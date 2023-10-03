import { Link, useRouter } from "expo-router";
import { Button, View } from "react-native";
import Center from "../../components/Center";

interface Props {}

const Index: React.FC = () => {
  const router = useRouter();
  return (
    <Center>
      <Button
        title="open modal"
        onPress={() => router.push("/screen-presentation/modal")}
      />
    </Center>
  );
};

export default Index;
