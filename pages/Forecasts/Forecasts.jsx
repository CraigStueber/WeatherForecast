import { Header } from "../../components/Header/Header";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  return <Header city={params.city} />;
}
