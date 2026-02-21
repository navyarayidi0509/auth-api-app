import { router } from "expo-router";
import { Button, Text, View } from "react-native";

import { logout } from "../src/services/auth";

export default function HomeScreen() {
  const handleLogout = async () => {
    await logout();
    router.replace("/LoginScreen");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome Home</Text>
      <Button title="logout" onPress={handleLogout}></Button>
    </View>
  );
}
