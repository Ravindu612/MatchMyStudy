import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { ProfileHeader } from "@/components/ProfileHeader";
import { PrimaryButton } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { brand } from "@/lib/brand";
import { loadProfileByHandle, type DirectoryProfile } from "@/lib/profile";

export default function PublicProfileScreen() {
  const { handle } = useLocalSearchParams<{ handle: string }>();
  const { session } = useAuth();
  const [profile, setProfile] = useState<DirectoryProfile | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing" | "error">(
    "loading"
  );
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const value = typeof handle === "string" ? handle : "";

    loadProfileByHandle(value).then((result) => {
      if (cancelled) {
        return;
      }
      if (!result.ok) {
        setMessage(result.message);
        setStatus(result.missing ? "missing" : "error");
        return;
      }
      setProfile(result.profile);
      setStatus("ready");
    });

    return () => {
      cancelled = true;
    };
  }, [handle]);

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator color={brand.blue600} />
      </View>
    );
  }

  if (status !== "ready" || !profile) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50 px-6">
        <Text className="text-center text-base text-slate-700">
          {message ?? "That profile doesn't exist."}
        </Text>
      </View>
    );
  }

  const mine = session?.user.id === profile.id;

  return (
    <ScrollView
      style={{ backgroundColor: brand.slate50 }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <ProfileHeader profile={profile} />
      {mine ? (
        <PrimaryButton
          label="Edit bio and photo"
          onPress={() => router.push("/edit-profile")}
        />
      ) : null}
    </ScrollView>
  );
}
