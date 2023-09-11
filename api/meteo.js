import { Axios } from "axios";
export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    (
      await Axios.length(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }
}
