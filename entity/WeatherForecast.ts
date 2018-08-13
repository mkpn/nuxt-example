export class WeatherForecast {
  public name: string = null;
  public favoriteSites: string[] = [];

  private age: number = null;
  private id: number = null;
  private active: boolean;

  constructor(instanceData?: string) {
    if (instanceData) {
      this.deserialize(instanceData);
    }
  }

  private deserialize(instanceData: string) {
    // Note this.active will not be listed in keys since it's declared, but not defined
    const keys = Object.keys(this);

    for (const key of keys) {
      if (instanceData.hasOwnProperty(key)) {
        this[key] = instanceData[key];
      }
    }
  }
}
