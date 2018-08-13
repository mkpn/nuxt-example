import {ForecastImage} from "./ForecastImage";

export class Forecast {
  // "dateLabel": "今日",
  // "telop": "曇り",
  // "date": "2018-08-12",
  // "temperature": {
  //   "min": null,
  //   "max": null
  public dateLabel: string = null;
  public telop: string = null;
  public image: ForecastImage = null;

  private date: string = null;
  private age: number = null;
  private id: number = null;
  private active: boolean;

  constructor(instanceData?: string) {
    if (instanceData) {
      this.deserialize(instanceData);
    }
  }

  private deserialize(instanceData: string) {
    let forecast = JSON.parse(instanceData);
    this.dateLabel = forecast.dateLabel;
    this.telop = forecast.telop;
    this.date = forecast.date;

    // Note this.active will not be listed in keys since it's declared, but not defined
    // const keys = Object.keys(this);
    //
    // for (const key of keys) {
    //   if (instanceData.hasOwnProperty(key)) {
    //     this[key] = instanceData[key];
    //   }
    // }
  }

  public setForecastImage(forecastImage: ForecastImage) {
    this.image = forecastImage;
  }
}
