export class ForecastImage {
  // "image": {
  //   "width": 50,
  //   "url": "http://weather.livedoor.com/img/icon/8.gif",
  //   "title": "曇り",
  //   "height": 31
  // }

  public url: string = null;
  public title: string = null;
  public width: string = null;
  public height: string = null;

  constructor(instanceData?: string) {
    if (instanceData) {
      this.deserialize(instanceData);
    }
  }

  private deserialize(instanceData: string) {
    let image = JSON.parse(instanceData);
    this.url = image.url;
    this.title = image.title;
    this.width = image.width;
    this.height = image.height;
    // Note this.active will not be listed in keys since it's declared, but not defined
    // const keys = Object.keys(this);
    //
    // for (const key of keys) {
    //   if (instanceData.hasOwnProperty(key)) {
    //     this[key] = instanceData[key];
    //   }
    // }
  }
}
