import { Tabs, useFocusEffect, router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  View,
} from "react-native";

import { PostCard } from "@/components/PostCard";
import { ErrorBanner, PrimaryButton, SetupNotice } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { brand } from "@/lib/brand";
import {
  likePost,
  listFeedPosts,
  unlikePost,
  type FeedPost,
} from "@/lib/feed";

export default function FeedScreen() {
  const { configured, ready, session } = useAuth();
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [hasMore, setHasMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingLikes, setPendingLikes] = useState<ReadonlySet<string>>(new Set());
  const loaded = useRef(false);

  const load = useCallback(async (quiet: boolean) => {
    if (!quiet) {
      setStatus("loading");
    }
    const result = await listFeedPosts(0);
    if (!result.ok) {
      setStatus("error");
      return;
    }
    setPosts(result.posts);
    setHasMore(result.hasMore);
    setStatus("ready");
    loaded.current = true;
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!configured) {
        return;
      }
      void load(loaded.current);
    }, [configured, load])
  );

  useEffect(() => {
    if (configured && loaded.current) {
      void load(true);
    }
  }, [configured, load, session?.user.id]);

  async function refresh() {
    setRefreshing(true);
    setError(null);
    await load(true);
    setRefreshing(false);
  }

  async function loadMore() {
    setLoadingMore(true);
    const result = await listFeedPosts(posts.length);
    setLoadingMore(false);
    if (!result.ok) {
      setError("Couldn't load more posts.");
      return;
    }
    setPosts((current) => {
      const seen = new Set(current.map((post) => post.id));
      return [...current, ...result.posts.filter((post) => !seen.has(post.id))];
    });
    setHasMore(result.hasMore);
  }

  async function toggleLike(post: FeedPost) {
    if (!session) {
      router.push("/login");
      return;
    }

    const nextLiked = !post.likedByMe;
    setError(null);
    setPendingLikes((current) => new Set(current).add(post.id));
    setPosts((current) =>
      current.map((item) =>
        item.id === post.id
          ? {
              ...item,
              likedByMe: nextLiked,
              likeCount: Math.max(0, item.likeCount + (nextLiked ? 1 : -1)),
            }
          : item
      )
    );

    try {
      if (nextLiked) {
        await likePost(post.id, session.user.id);
      } else {
        await unlikePost(post.id, session.user.id);
      }
    } catch (likeError) {
      setPosts((current) =>
        current.map((item) =>
          item.id === post.id
            ? {
                ...item,
                likedByMe: !nextLiked,
                likeCount: Math.max(0, item.likeCount + (nextLiked ? -1 : 1)),
              }
            : item
        )
      );
      setError(likeError instanceof Error ? likeError.message : "Couldn't update this like.");
    } finally {
      setPendingLikes((current) => {
        const next = new Set(current);
        next.delete(post.id);
        return next;
      });
    }
  }

  if (!configured) {
    return <SetupNotice />;
  }

  if (!ready || status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator color={brand.blue600} />
      </View>
    );
  }

  if (status === "error") {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-slate-50 px-6">
        <Text className="text-center text-base text-slate-700">Couldn't load the feed.</Text>
        <PrimaryButton label="Try again" onPress={() => void load(false)} />
      </View>
    );
  }

  return (
    <>
    <Tabs.Screen
      options={{
        headerRight: () =>
          session ? undefined : (
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push("/login")}
              className="mr-4"
            >
              <Text className="text-base font-semibold text-blue-600">Sign in</Text>
            </Pressable>
          ),
      }}
    />
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, gap: 12, flexGrow: 1 }}
      style={{ backgroundColor: brand.slate50 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => void refresh()}
          tintColor={brand.blue600}
        />
      }
      ListHeaderComponent={
        error ? (
          <View className="mb-3">
            <ErrorBanner message={error} />
          </View>
        ) : undefined
      }
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center px-6 py-16">
          <Text className="text-center text-base text-slate-600">
            No posts yet. When people share their study plans, they will show up here.
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <PostCard
          post={item}
          likePending={pendingLikes.has(item.id)}
          onToggleLike={() => void toggleLike(item)}
          onOpenPost={() =>
            router.push({ pathname: "/post/[id]", params: { id: item.id } })
          }
        />
      )}
      ListFooterComponent={
        hasMore ? (
          <Pressable
            accessibilityRole="button"
            disabled={loadingMore}
            onPress={() => void loadMore()}
            className="mb-4 items-center rounded-xl border border-slate-200 bg-white py-3"
          >
            <Text className="font-semibold text-blue-600">
              {loadingMore ? "Loading..." : "Load more"}
            </Text>
          </Pressable>
        ) : (
          <View className="h-4" />
        )
      }
    />
    </>
  );
}
