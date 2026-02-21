import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  TextInput,
  View,
} from "react-native";

import { router } from "expo-router";

import { login } from "../src/services/auth";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(username, password);
      router.replace("/HomeScreen");
    } catch (err) {
      Alert.alert("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="enter the email address"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      ></TextInput>
      <TextInput
        placeholder="enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      ></TextInput>
      {loading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <Button title="login" onPress={handleLogin}></Button>
      )}
    </View>
  );
}
