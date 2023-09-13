import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { Header } from "../../components/Header/Header";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  return (
    <>
      <Header city={params.city} />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={30}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={30}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={30}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={30}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={30}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"Mon"}
        date={"03/11"}
        temperature={30}
      />
    </>
  );
}
