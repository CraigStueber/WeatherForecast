import { View, Image } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

export function MeteoBasic({ temperature, interpretation }) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}&#176;</Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
