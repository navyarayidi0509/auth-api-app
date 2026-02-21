import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_URL = "https://dummyjson.com/auth/login";

export const login = async (username, password) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (username === "navya" && password === "12345") {
    const token = "fake-token";
    await AsyncStorage.setItem("userToken", token);
    return token;
  }
  throw new Error("login failed");
};

// FIX ME:above API is returning html instead of JSON
//   const response = await fetch(LOGIN_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ username, password }),
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.error || "login failed");
//   }

//   await AsyncStorage.setItem("userToken", data.token);
//   return data.token;
// };

export const logout = async () => {
  await AsyncStorage.removeItem("userToken");
};
