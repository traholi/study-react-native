import { Button, Text } from "react-native";
import Center from "../../components/Center";
import { useRouter } from "expo-router";

interface Props {}

const containedModal: React.FC = () => {
  return (
    <Center>
      <Text>hello🖐️ I'm contained content</Text>
    </Center>
  );
};

export default containedModal;
