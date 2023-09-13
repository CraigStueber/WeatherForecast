import { TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./Header.style";

export function Header({}) {
  return (
    <View>
      <TouchableOpacity>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View>
        <Txt></Txt>
        <Txt></Txt>
        <Txt></Txt>
      </View>
    </View>
  );
}
