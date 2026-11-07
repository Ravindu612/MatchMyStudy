import { Pressable, Text, View } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function PrimaryButton({ label, onPress, disabled }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      className={`items-center rounded-xl bg-blue-600 px-6 py-3 active:bg-blue-700 ${
        disabled ? "opacity-60" : ""
      }`}
    >
      <Text className="text-base font-semibold text-white">{label}</Text>
    </Pressable>
  );
}

export function SecondaryButton({ label, onPress, disabled }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      className={`items-center rounded-xl border border-slate-300 bg-white px-6 py-3 active:bg-slate-50 ${
        disabled ? "opacity-60" : ""
      }`}
    >
      <Text className="text-base font-semibold text-slate-800">{label}</Text>
    </Pressable>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <View
      accessibilityRole="alert"
      className="rounded-xl border border-red-300 bg-red-100 px-4 py-3"
    >
      <Text className="text-base font-medium text-red-800">{message}</Text>
    </View>
  );
}

export function SuccessBanner({ message }: { message: string }) {
  return (
    <View className="rounded-xl border border-green-200 bg-green-50 px-4 py-3">
      <Text className="text-sm text-green-700">{message}</Text>
    </View>
  );
}

export function SetupNotice() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-6">
      <Text className="text-center text-lg font-bold text-slate-900">
        Supabase is not configured
      </Text>
      <Text className="mt-2 text-center text-base leading-6 text-slate-600">
        Copy mobile/.env.example to mobile/.env, paste the project URL and anon
        key, then restart Expo.
      </Text>
    </View>
  );
}
