import Weather from '../entity/Weather'
import axios from "~/node_modules/axios";
import Time from "~/entity/Time";

class TimeRepository {
  private static timeResponse: String;

  async fetchWeatherList() {
    // await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => {
    //     this.timeResponse = response;
    //   })
    //   .catch()
  }
}

export default new TimeRepository()
