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
      <Button
        title="open contained modal"
        onPress={() => router.push("/screen-presentation/containedModal")}
      />
      <Button
        title="open form sheet"
        onPress={() => router.push("/screen-presentation/formSheet")}
      />
      <Button
        title="open card"
        onPress={() => router.push("/screen-presentation/card")}
      />
      <Button
        title="open contained transparent modal"
        onPress={() =>
          router.push("/screen-presentation/containedTransparentModal")
        }
      />
      <Button
        title="open contained full screen modal"
        onPress={() => router.push("/screen-presentation/fullScreenModal")}
      />
      <Button
        title="open contained transparent modal"
        onPress={() => router.push("/screen-presentation/transparentModal")}
      />
    </Center>
  );
};

export default Index;
