import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { ProfileHeader } from "@/components/ProfileHeader";
import { ErrorBanner, PrimaryButton, SecondaryButton } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { brand } from "@/lib/brand";
import {
  loadProfileById,
  prepareAvatar,
  saveBioAndAvatar,
  type DirectoryProfile,
} from "@/lib/profile";
import { BIO_MAX } from "@/lib/validation";

export default function EditProfileScreen() {
  const { configured, session } = useAuth();
  const [profile, setProfile] = useState<DirectoryProfile | null>(null);
  const [bio, setBio] = useState("");
  const [localUri, setLocalUri] = useState<string | null>(null);
  const [nextBase64, setNextBase64] = useState<string | null>(null);
  const [removeAvatar, setRemoveAvatar] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!configured || !session) {
      return;
    }

    let cancelled = false;
    loadProfileById(session.user.id).then((result) => {
      if (cancelled) {
        return;
      }
      if (!result.ok) {
        setError(result.message);
        setStatus("error");
        return;
      }
      setProfile(result.profile);
      setBio(result.profile.bio ?? "");
      setStatus("ready");
    });

    return () => {
      cancelled = true;
    };
  }, [configured, session]);

  if (!session) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-slate-50 px-6">
        <Text className="text-center text-base text-slate-700">
          Sign in to edit your profile.
        </Text>
        <PrimaryButton label="Sign in" onPress={() => router.replace("/login")} />
      </View>
    );
  }

  if (status === "loading" || !profile) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        {status === "error" ? (
          <Text className="px-6 text-center text-base text-slate-700">
            {error ?? "Couldn't load your profile."}
          </Text>
        ) : (
          <ActivityIndicator color={brand.blue600} />
        )}
      </View>
    );
  }

  async function choosePhoto() {
    setError(null);
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setError("Allow photo access to change your profile photo.");
      return;
    }

    const picked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.9,
    });

    if (picked.canceled || !picked.assets[0]) {
      return;
    }

    try {
      const base64 = await prepareAvatar(picked.assets[0].uri);
      setLocalUri(picked.assets[0].uri);
      setNextBase64(base64);
      setRemoveAvatar(false);
    } catch (pickError) {
      setError(pickError instanceof Error ? pickError.message : "Could not read that photo.");
    }
  }

  async function save() {
    if (!session || !profile) {
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await saveBioAndAvatar({
        userId: session.user.id,
        bio,
        previousAvatarUrl: profile.avatarUrl,
        nextAvatarBase64: nextBase64,
        removeAvatar,
      });
      router.back();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Could not save your profile. Please try again."
      );
      setSaving(false);
    }
  }

  const preview = removeAvatar ? null : localUri ?? profile.avatarUrl;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: brand.slate50 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <ProfileHeader
          profile={{ ...profile, bio: bio.trim() ? bio : null, avatarUrl: preview }}
          avatarUri={localUri && !removeAvatar ? localUri : null}
        />
        {error ? <ErrorBanner message={error} /> : null}
        <View className="gap-3">
          <SecondaryButton label="Choose a photo" onPress={() => void choosePhoto()} disabled={saving} />
          {preview ? (
            <SecondaryButton
              label="Remove photo"
              disabled={saving}
              onPress={() => {
                setLocalUri(null);
                setNextBase64(null);
                setRemoveAvatar(true);
              }}
            />
          ) : null}
        </View>
        <View>
          <Text className="mb-2 font-semibold text-slate-700">Bio</Text>
          <TextInput
            value={bio}
            onChangeText={setBio}
            multiline
            maxLength={BIO_MAX}
            placeholder="Tell people what you're studying and where you want to go."
            placeholderTextColor={brand.slate500}
            textAlignVertical="top"
            className="min-h-[140px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900"
          />
          <Text className="mt-2 text-right text-xs text-slate-500">
            {bio.length}/{BIO_MAX}
          </Text>
        </View>
        <PrimaryButton
          label={saving ? "Saving..." : "Save"}
          disabled={saving}
          onPress={() => void save()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
