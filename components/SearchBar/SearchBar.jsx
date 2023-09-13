import { s } from "./SearchBar.style";
import { TextInput, View } from "react-native";

export function SearchBar({}) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.textInput}
      placeholder="Type a city... ex: Richmond"
    />
  );
}
