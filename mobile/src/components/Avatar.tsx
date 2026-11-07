import { Image } from "expo-image";
import { Text, View } from "react-native";

import {
  accountTypeAvatarClass,
  displayInitials,
  safeHttpsUrl,
} from "@/lib/format";

function localImageUri(uri: string | null | undefined): string | null {
  if (!uri) {
    return null;
  }
  if (
    uri.startsWith("file:") ||
    uri.startsWith("content:") ||
    uri.startsWith("ph:") ||
    uri.startsWith("blob:")
  ) {
    return uri;
  }
  return null;
}

type Props = {
  name: string;
  uri?: string | null;
  accountType?: string;
  size?: number;
};

export function Avatar({ name, uri, accountType = "other", size = 44 }: Props) {
  const photo = localImageUri(uri) ?? safeHttpsUrl(uri);

  if (photo) {
    return (
      <Image
        source={{ uri: photo }}
        accessibilityIgnoresInvertColors
        style={{ width: size, height: size, borderRadius: size / 2 }}
        contentFit="cover"
      />
    );
  }

  return (
    <View
      accessibilityElementsHidden
      className={`items-center justify-center ${accountTypeAvatarClass(accountType)}`}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    >
      <Text className="font-bold text-white" style={{ fontSize: size * 0.34 }}>
        {displayInitials(name)}
      </Text>
    </View>
  );
}
