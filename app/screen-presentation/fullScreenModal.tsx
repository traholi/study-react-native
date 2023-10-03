import { Button, Text } from "react-native";
import Center from "../../components/Center";
import { router } from "expo-router";

interface Props {}

const FullScreenModal: React.FC = () => {
  return (
    <Center>
      <Button title="back" onPress={router.back} />
      <Text>hi</Text>
    </Center>
  );
};

export default FullScreenModal;
