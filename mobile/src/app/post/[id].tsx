import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Avatar } from "@/components/Avatar";
import { PostCard } from "@/components/PostCard";
import { ErrorBanner, PrimaryButton } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { brand } from "@/lib/brand";
import {
  createComment,
  getVisiblePost,
  likePost,
  listPostComments,
  unlikePost,
  type FeedPost,
  type PostComment,
} from "@/lib/feed";
import { formatPostTime } from "@/lib/format";
import { commentWasEdited } from "@/lib/validation";
import { COMMENT_MAX } from "@/lib/validation";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const postId = typeof id === "string" ? id : "";
  const { session } = useAuth();
  const insets = useSafeAreaInsets();
  const [post, setPost] = useState<FeedPost | null>(null);
  const [comments, setComments] = useState<PostComment[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "missing" | "error">(
    "loading"
  );
  const [commentStatus, setCommentStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [draft, setDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [likePending, setLikePending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setStatus("loading");
    const result = await getVisiblePost(postId);
    if (result.error) {
      setStatus("error");
      return;
    }
    if (!result.post) {
      setStatus("missing");
      return;
    }
    setPost(result.post);
    setStatus("ready");
    try {
      const next = await listPostComments(result.post.id);
      setComments(next);
      setCommentStatus("ready");
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Couldn't load comments.");
      setCommentStatus("error");
    }
  }, [postId]);

  useEffect(() => {
    void load();
  }, [load]);

  async function toggleLike() {
    if (!post) {
      return;
    }
    if (!session) {
      router.push("/login");
      return;
    }
    const nextLiked = !post.likedByMe;
    setLikePending(true);
    setError(null);
    setPost({
      ...post,
      likedByMe: nextLiked,
      likeCount: Math.max(0, post.likeCount + (nextLiked ? 1 : -1)),
    });
    try {
      if (nextLiked) {
        await likePost(post.id, session.user.id);
      } else {
        await unlikePost(post.id, session.user.id);
      }
    } catch (likeError) {
      setPost(post);
      setError(likeError instanceof Error ? likeError.message : "Couldn't update this like.");
    } finally {
      setLikePending(false);
    }
  }

  async function publish() {
    if (!post) {
      return;
    }
    if (!session) {
      router.push("/login");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const created = await createComment(post.id, session.user.id, draft);
      const next: PostComment = {
        id: created.id,
        postId: post.id,
        authorId: session.user.id,
        body: created.body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        authorName: "You",
        authorHandle: null,
        authorAvatarUrl: null,
        accountType: "other",
      };
      setComments((current) => [...current, next]);
      setPost({ ...post, commentCount: post.commentCount + 1 });
      setDraft("");
    } catch (publishError) {
      setError(
        publishError instanceof Error ? publishError.message : "Couldn't post this comment."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator color={brand.blue600} />
      </View>
    );
  }

  if (status !== "ready" || !post) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-slate-50 px-6">
        <Text className="text-center text-base text-slate-700">
          {status === "error" ? "Couldn't load this post." : "This post is unavailable."}
        </Text>
        {status === "error" ? (
          <PrimaryButton label="Try again" onPress={() => void load()} />
        ) : null}
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: brand.slate50 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <PostCard post={post} likePending={likePending} onToggleLike={() => void toggleLike()} />
        {error ? <ErrorBanner message={error} /> : null}
        <Text className="mt-2 text-lg font-bold text-slate-900">Comments</Text>
        {commentStatus === "loading" ? <ActivityIndicator color={brand.blue600} /> : null}
        {commentStatus === "ready" && comments.length === 0 ? (
          <Text className="text-sm text-slate-500">No comments yet.</Text>
        ) : null}
        {comments.map((comment) => (
          <Pressable
            key={comment.id}
            accessibilityRole="button"
            disabled={!comment.authorHandle}
            onPress={() => {
              if (comment.authorHandle) {
                router.push({
                  pathname: "/u/[handle]",
                  params: { handle: comment.authorHandle },
                });
              }
            }}
            className="rounded-2xl border border-slate-200 bg-white p-3"
          >
            <View className="flex-row gap-3">
              <Avatar
                name={comment.authorName}
                uri={comment.authorAvatarUrl}
                accountType={comment.accountType}
                size={36}
              />
              <View className="min-w-0 flex-1">
                <Text className="text-sm font-bold text-slate-900">{comment.authorName}</Text>
                <Text className="text-xs text-slate-500">
                  {formatPostTime(comment.createdAt)}
                  {commentWasEdited(comment.createdAt, comment.updatedAt) ? " · Edited" : ""}
                </Text>
                <Text className="mt-1 text-base leading-6 text-slate-800">{comment.body}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <View
        className="border-t border-slate-200 bg-white px-4 pt-3"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        {session ? (
          <View className="flex-row items-end gap-2">
            <TextInput
              value={draft}
              onChangeText={setDraft}
              multiline
              maxLength={COMMENT_MAX}
              placeholder="Write a comment..."
              placeholderTextColor={brand.slate500}
              textAlignVertical="top"
              className="max-h-32 min-h-[44px] flex-1 rounded-xl border border-slate-300 px-3 py-2 text-base text-slate-900"
            />
            <Pressable
              accessibilityRole="button"
              disabled={submitting || draft.trim().length === 0}
              onPress={() => void publish()}
              className={`rounded-xl bg-blue-600 px-4 py-3 ${
                submitting || draft.trim().length === 0 ? "opacity-60" : ""
              }`}
            >
              <Text className="font-semibold text-white">
                {submitting ? "..." : "Post"}
              </Text>
            </Pressable>
          </View>
        ) : (
          <PrimaryButton label="Log in to comment" onPress={() => router.push("/login")} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
