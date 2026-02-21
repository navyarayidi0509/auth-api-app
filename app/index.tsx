import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();

  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      if (userToken) {
        router.replace("/HomeScreen");
      } else {
        router.replace("/LoginScreen");
      }
    };
    checkToken();
  }, []);

  return null;
}
