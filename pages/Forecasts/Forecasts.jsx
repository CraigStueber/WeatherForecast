import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  return <Txt>Forecasts a</Txt>;
}
