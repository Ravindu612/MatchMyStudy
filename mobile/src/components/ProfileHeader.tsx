import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

import { Avatar } from "@/components/Avatar";
import { brand } from "@/lib/brand";
import {
  accountTypeBadgeClass,
  accountTypeLabel,
  formatJoined,
} from "@/lib/format";
import type { DirectoryProfile } from "@/lib/profile";

export function ProfileHeader({
  profile,
  avatarUri,
}: {
  profile: DirectoryProfile;
  avatarUri?: string | null;
}) {
  const joined = formatJoined(profile.createdAt);
  const photo = avatarUri ?? profile.avatarUrl;

  return (
    <View className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <View className="relative h-36">
        <LinearGradient
          colors={[brand.blue600, brand.indigo600, brand.violet600]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 144 }}
        />
        {profile.coverUrl ? (
          <Image
            source={{ uri: profile.coverUrl }}
            accessibilityLabel={`Cover photo for ${profile.displayName}`}
            contentFit="cover"
            style={{ position: "absolute", top: 0, left: 0, right: 0, height: 144 }}
          />
        ) : null}
      </View>
      <View className="px-5 pb-6">
        <View className="-mt-12">
          <View className="rounded-full border-4 border-white">
            <Avatar
              name={profile.displayName}
              uri={photo}
              accountType={profile.accountType}
              size={96}
            />
          </View>
        </View>
        <Text className="mt-4 text-3xl font-bold text-slate-900">
          {profile.displayName}
        </Text>
        <Text className="mt-1 text-base text-slate-500">@{profile.handle}</Text>
        <View className="mt-4 flex-row flex-wrap items-center gap-2">
          <View className={`rounded-full px-3 py-1 ${accountTypeBadgeClass(profile.accountType).box}`}>
            <Text className={`text-sm font-semibold ${accountTypeBadgeClass(profile.accountType).text}`}>
              {accountTypeLabel(profile.accountType)}
            </Text>
          </View>
          {profile.isVerified ? (
            <View className="rounded-full bg-green-100 px-3 py-1">
              <Text className="text-sm font-semibold text-green-700">Verified</Text>
            </View>
          ) : null}
          {profile.isUpgraded ? (
            <View className="rounded-full bg-blue-600 px-3 py-1">
              <Text className="text-sm font-bold text-white">Pro</Text>
            </View>
          ) : null}
        </View>
        {profile.headline ? (
          <Text className="mt-4 text-lg text-slate-700">{profile.headline}</Text>
        ) : null}
        {profile.bio ? (
          <Text className="mt-3 text-base leading-6 text-slate-800">{profile.bio}</Text>
        ) : (
          <Text className="mt-3 text-base text-slate-500">No bio yet.</Text>
        )}
        {profile.country ? (
          <Text className="mt-3 text-sm text-slate-600">Home: {profile.country}</Text>
        ) : null}
        {profile.targetCountries.length > 0 ? (
          <Text className="mt-1 text-sm text-slate-600">
            Looking at: {profile.targetCountries.join(", ")}
          </Text>
        ) : null}
        {joined ? (
          <Text className="mt-3 text-sm text-slate-500">Joined {joined}</Text>
        ) : null}
      </View>
    </View>
  );
}
