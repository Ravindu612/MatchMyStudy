import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { brand } from "@/lib/brand";

function iconColor(color: unknown): string {
  return typeof color === "string" ? color : brand.slate500;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: brand.white },
        headerTitleStyle: { color: brand.slate900, fontWeight: "700" },
        headerShadowVisible: false,
        tabBarActiveTintColor: brand.blue600,
        tabBarInactiveTintColor: brand.slate500,
        tabBarStyle: {
          backgroundColor: brand.white,
          borderTopColor: brand.slate200,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        sceneStyle: { backgroundColor: brand.slate50 },
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={iconColor(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: "Network",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={iconColor(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" color={iconColor(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={iconColor(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={iconColor(color)} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
