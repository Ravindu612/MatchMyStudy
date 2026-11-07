import { router } from "expo-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { ErrorBanner, PrimaryButton, SecondaryButton, SetupNotice, SuccessBanner } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { brand } from "@/lib/brand";
import { APP_SCHEME_REDIRECT, authRedirectUrl, signInWithGoogle } from "@/lib/oauth";
import { PASSWORD_MIN, type SignupRole } from "@/lib/validation";

export default function LoginScreen() {
  const { configured, session, signInWithEmail, registerWithEmail } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<SignupRole | "">("");
  const [busy, setBusy] = useState<"email" | "google" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const runtimeRedirect = authRedirectUrl();

  useEffect(() => {
    if (session) {
      router.replace("/feed");
    }
  }, [session]);

  if (!configured) {
    return <SetupNotice />;
  }

  function clearMessages() {
    setError(null);
    setSuccess(null);
  }

  async function submitEmail() {
    clearMessages();
    if (mode === "register") {
      if (!role) {
        setError("Please select your role.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (password.length < PASSWORD_MIN) {
        setError("Password must be at least 6 characters.");
        return;
      }
    }

    setBusy("email");
    if (mode === "login") {
      const result = await signInWithEmail(email, password);
      setBusy(null);
      if (result.error) {
        setError(result.error);
      }
      return;
    }

    const result = await registerWithEmail({
      email,
      password,
      role: role as SignupRole,
    });
    setBusy(null);
    if (result.error) {
      setError(result.error);
      return;
    }
    if (result.needsConfirmation) {
      setSuccess(
        "Account created. Check your email and confirm it before signing in."
      );
      setMode("login");
      setPassword("");
      setConfirmPassword("");
    }
  }

  async function submitGoogle() {
    clearMessages();
    setBusy("google");
    const result = await signInWithGoogle();
    setBusy(null);
    if (result.error) {
      setError(result.error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: brand.slate50 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        <View className="rounded-3xl border border-slate-200 bg-white p-6">
          <Text className="text-3xl font-bold text-slate-900">
            {mode === "login" ? "Login" : "Create your account"}
          </Text>
          <Text className="mt-2 text-base text-slate-600">
            {mode === "login"
              ? "Sign in to your MatchMyStudy account."
              : "Create your MatchMyStudy account to continue."}
          </Text>

          {success ? (
            <View className="mt-6">
              <SuccessBanner message={success} />
            </View>
          ) : null}
          {error ? (
            <View className="mt-6">
              <ErrorBanner message={error} />
            </View>
          ) : null}

          <View className="mt-6 gap-4">
            <SecondaryButton
              label={
                busy === "google"
                  ? "Redirecting to Google..."
                  : mode === "login"
                    ? "Sign in with Google"
                    : "Sign up with Google"
              }
              disabled={busy !== null}
              onPress={() => void submitGoogle()}
            />
            {mode === "register" ? (
              <Text className="text-sm text-slate-500">
                A new Google account is created as a student.
              </Text>
            ) : null}

            <View className="flex-row items-center gap-3">
              <View className="h-px flex-1 bg-slate-200" />
              <Text className="text-sm text-slate-500">or</Text>
              <View className="h-px flex-1 bg-slate-200" />
            </View>

            {mode === "register" ? <RolePicker role={role} onChange={setRole} /> : null}

            <Field label="Email">
              <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="you@example.com"
                placeholderTextColor={brand.slate500}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900"
              />
            </Field>
            <Field label="Password">
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textContentType={mode === "login" ? "password" : "newPassword"}
                placeholder={mode === "login" ? "Your password" : "Create a password"}
                placeholderTextColor={brand.slate500}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900"
              />
            </Field>
            {mode === "register" ? (
              <Field label="Confirm password">
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  textContentType="newPassword"
                  placeholder="Confirm your password"
                  placeholderTextColor={brand.slate500}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900"
                />
              </Field>
            ) : null}

            <PrimaryButton
              label={
                busy === "email"
                  ? mode === "login"
                    ? "Signing in..."
                    : "Creating account..."
                  : mode === "login"
                    ? "Sign in"
                    : "Register"
              }
              disabled={busy !== null}
              onPress={() => void submitEmail()}
            />

            <Pressable
              accessibilityRole="button"
              onPress={() => {
                setMode(mode === "login" ? "register" : "login");
                clearMessages();
              }}
            >
              <Text className="text-center text-base text-slate-600">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <Text className="font-semibold text-blue-600">
                  {mode === "login" ? "Register here" : "Login here"}
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <Text className="text-sm font-semibold text-slate-800">
            Supabase redirect URL
          </Text>
          <Text selectable className="mt-2 text-sm font-medium text-blue-700">
            {APP_SCHEME_REDIRECT}
          </Text>
          {runtimeRedirect !== APP_SCHEME_REDIRECT ? (
            <>
              <Text className="mt-3 text-sm text-slate-600">
                Expo Go uses this address instead. Add it too while you are testing:
              </Text>
              <Text selectable className="mt-1 text-sm font-medium text-blue-700">
                {runtimeRedirect}
              </Text>
            </>
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View>
      <Text className="mb-2 font-semibold text-slate-700">{label}</Text>
      {children}
    </View>
  );
}

function RolePicker({
  role,
  onChange,
}: {
  role: SignupRole | "";
  onChange: (role: SignupRole) => void;
}) {
  return (
    <View>
      <Text className="mb-2 font-semibold text-slate-700">Your role</Text>
      <View className="flex-row gap-2">
        <RoleOption
          label="Student"
          selected={role === "student"}
          onPress={() => onChange("student")}
        />
        <RoleOption
          label="Consultant"
          selected={role === "consultant"}
          onPress={() => onChange("consultant")}
        />
      </View>
      <Text className="mt-2 text-sm text-slate-500">
        This role is saved with the email account.
      </Text>
    </View>
  );
}

function RoleOption({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      className={`flex-1 items-center rounded-xl border px-3 py-3 ${
        selected ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white"
      }`}
    >
      <Text className={`font-semibold ${selected ? "text-blue-700" : "text-slate-700"}`}>
        {label}
      </Text>
    </Pressable>
  );
}
