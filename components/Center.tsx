import { Slot } from "expo-router";
import { View } from "./Themed";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Center: React.FC<Props> = (props) => {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      {props.children}
    </View>
  );
};

export default Center;
