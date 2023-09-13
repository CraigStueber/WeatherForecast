import { View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./MeteoAdvanced.style";
export function MeteoAdvanced({ sunrise, sunset, windSpeed }) {
  return (
    <View style={s.container}>
      <View style={s.styledContainer}>
        <Txt style={s.styledValue}>{sunrise}</Txt>
        <Txt style={s.styledLabel}>Sunrise</Txt>
      </View>
      <View style={s.styledContainer}>
        <Txt style={s.styledValue}>{sunset}</Txt>
        <Txt style={s.styledLabel}>Sunset </Txt>
      </View>
      <View style={s.styledContainer}>
        <Txt style={s.styledValue}>{windSpeed}km/h</Txt>
        <Txt style={s.styledLabel}>Wind Speed</Txt>
      </View>
    </View>
  );
}
