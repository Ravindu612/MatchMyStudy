import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { ProfileHeader } from "@/components/ProfileHeader";
import { PrimaryButton, SecondaryButton, SetupNotice } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { brand } from "@/lib/brand";
import { loadProfileById, type DirectoryProfile } from "@/lib/profile";

export default function ProfileScreen() {
  const { configured, ready, session, signOut } = useAuth();
  const [profile, setProfile] = useState<DirectoryProfile | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [message, setMessage] = useState<string | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  const load = useCallback(async () => {
    if (!session) {
      setProfile(null);
      setStatus("ready");
      return;
    }
    setStatus("loading");
    const result = await loadProfileById(session.user.id);
    if (!result.ok) {
      setMessage(result.message);
      setStatus("error");
      return;
    }
    setProfile(result.profile);
    setStatus("ready");
  }, [session]);

  useFocusEffect(
    useCallback(() => {
      if (configured && ready) {
        void load();
      }
    }, [configured, ready, load])
  );

  if (!configured) {
    return <SetupNotice />;
  }

  if (!ready || (session && status === "loading" && !profile)) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator color={brand.blue600} />
      </View>
    );
  }

  if (!session) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-slate-50 px-8">
        <Text className="text-center text-2xl font-bold text-slate-900">Your profile</Text>
        <Text className="text-center text-base leading-6 text-slate-600">
          Sign in to see your profile, update your bio, and change your photo.
        </Text>
        <PrimaryButton label="Sign in" onPress={() => router.push("/login")} />
      </View>
    );
  }

  if (status === "error" || !profile) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-slate-50 px-6">
        <Text className="text-center text-base text-slate-700">
          {message ?? "Couldn't load your profile."}
        </Text>
        <PrimaryButton label="Try again" onPress={() => void load()} />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: brand.slate50 }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <ProfileHeader profile={profile} />
      <PrimaryButton label="Edit bio and photo" onPress={() => router.push("/edit-profile")} />
      <SecondaryButton
        label={signingOut ? "Signing out..." : "Sign out"}
        disabled={signingOut}
        onPress={() => {
          setSigningOut(true);
          void signOut().finally(() => setSigningOut(false));
        }}
      />
    </ScrollView>
  );
}
