import { Txt } from "../Txt/Txt";
import { s } from "./ForecastListItem.style";
import { View, Image } from "react-native";

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image source={image} style={s.image}></Image>
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}&#176;</Txt>
    </View>
  );
}
