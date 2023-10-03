import { Link, useRouter } from "expo-router";
import { Button, View } from "react-native";
import Center from "../components/Center";

const Index: React.FC = () => {
  const router = useRouter();

  return (
    <Center>
      <Button
        title="/screen-presentation"
        onPress={() => router.push("/screen-presentation/")}
      />
    </Center>
  );
};

export default Index;
