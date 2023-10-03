import { Stack, router } from "expo-router";
import { Button } from "react-native";

const Layout = () => {
  return (
    <>
      <Button title="back" onPress={router.back} />
      <Stack>
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="containedModal"
          options={{ presentation: "containedModal" }}
        />
        <Stack.Screen
          name="formSheet"
          options={{ presentation: "formSheet" }}
        />
        <Stack.Screen name="card" options={{ presentation: "card" }} />
        <Stack.Screen
          name="containedTransparentModal"
          options={{ presentation: "containedTransparentModal" }}
        />
        <Stack.Screen
          name="fullScreenModal"
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="transparentModal"
          options={{ presentation: "transparentModal" }}
        />
      </Stack>
    </>
  );
};

export default Layout;
