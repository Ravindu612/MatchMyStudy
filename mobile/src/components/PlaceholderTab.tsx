import { Text, View } from "react-native";

export function PlaceholderTab({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-8">
      <Text className="text-2xl font-bold text-slate-900">{title}</Text>
      <Text className="mt-2 text-center text-base leading-6 text-slate-600">{body}</Text>
    </View>
  );
}
