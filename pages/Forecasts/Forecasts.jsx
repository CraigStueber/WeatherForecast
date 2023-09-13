import { View } from "react-native";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { Header } from "../../components/Header/Header";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";
import { getWeatherInterpretation, DAYS } from "../../utils/meteo-utils.js";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  const forecastList = (
    <View>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
}
