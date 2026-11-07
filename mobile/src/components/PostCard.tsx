import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Avatar } from "@/components/Avatar";
import {
  accountTypeBadgeClass,
  accountTypeLabel,
  formatPostTime,
} from "@/lib/format";
import type { FeedPost } from "@/lib/feed";

type Props = {
  post: FeedPost;
  likePending: boolean;
  onToggleLike: () => void;
  onOpenPost?: () => void;
};

export function PostCard({ post, likePending, onToggleLike, onOpenPost }: Props) {
  const author = post.author;
  const name = author?.displayName ?? "Member";

  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <View className="flex-row gap-3">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`${name}'s profile`}
          disabled={!author}
          onPress={() => {
            if (author) {
              router.push({ pathname: "/u/[handle]", params: { handle: author.handle } });
            }
          }}
        >
          <Avatar
            name={name}
            uri={author?.avatarUrl}
            accountType={author?.accountType}
          />
        </Pressable>
        <View className="min-w-0 flex-1">
          <View className="flex-row flex-wrap items-center gap-2">
            <Pressable
              disabled={!author}
              onPress={() => {
                if (author) {
                  router.push({
                    pathname: "/u/[handle]",
                    params: { handle: author.handle },
                  });
                }
              }}
            >
              <Text className="text-sm font-bold text-slate-900">{name}</Text>
            </Pressable>
            {author?.isVerified ? (
              <Text className="text-xs font-semibold text-blue-600">Verified</Text>
            ) : null}
            {author ? (
              <View className={`rounded-full px-2 py-0.5 ${accountTypeBadgeClass(author.accountType).box}`}>
                <Text className={`text-xs font-semibold ${accountTypeBadgeClass(author.accountType).text}`}>
                  {accountTypeLabel(author.accountType)}
                </Text>
              </View>
            ) : null}
          </View>
          <Text className="mt-0.5 text-xs text-slate-500">
            {formatPostTime(post.createdAt)}
            {post.editedAt ? " · Edited" : ""}
            {" · "}
            {post.visibility === "followers" ? "Followers" : "Public"}
          </Text>
        </View>
      </View>

      <Pressable accessibilityRole="button" disabled={!onOpenPost} onPress={onOpenPost}>
        <Text className="mt-3 text-[15px] leading-6 text-slate-800">{post.body}</Text>
      </Pressable>

      {post.media.length > 0 ? (
        <View className="mt-3 gap-2">
          {post.media.map((media, index) => (
            <Image
              key={media.id}
              source={{ uri: media.url }}
              accessibilityLabel={`Photo ${index + 1} from ${name}`}
              contentFit="cover"
              style={{ width: "100%", height: post.media.length === 1 ? 240 : 160, borderRadius: 12 }}
            />
          ))}
        </View>
      ) : null}

      {post.tags.length > 0 ? (
        <View className="mt-3 flex-row flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Text
              key={tag}
              className="overflow-hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tag}
            </Text>
          ))}
        </View>
      ) : null}

      <View className="mt-4 flex-row items-center justify-between border-t border-slate-100 pt-2">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={post.likedByMe ? "Unlike" : "Like"}
          accessibilityState={{ selected: post.likedByMe, disabled: likePending }}
          disabled={likePending}
          onPress={onToggleLike}
          className="flex-row items-center gap-2 rounded-lg px-3 py-2"
        >
          <Text
            className={`text-sm font-medium ${
              post.likedByMe ? "text-blue-700" : "text-slate-600"
            }`}
          >
            {post.likedByMe ? "Liked" : "Like"} · {post.likeCount}
          </Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open comments"
          disabled={!onOpenPost}
          onPress={onOpenPost}
          className="rounded-lg px-3 py-2"
        >
          <Text className="text-sm font-medium text-slate-600">
            {post.commentCount === 1 ? "1 comment" : `${post.commentCount} comments`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
