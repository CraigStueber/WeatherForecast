import { View } from "react-native";
import { s } from "./Home.style";
import { Txt } from "../../components/Txt/Txt";
export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Txt>Basic Weather Info</Txt>
      </View>
      <View style={s.searchbar_container}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advanced Weather Info</Txt>
      </View>
    </>
  );
}
