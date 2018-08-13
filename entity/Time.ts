export class ForecastImage {
  // "image": {
  //   "width": 50,
  //   "url": "http://weather.livedoor.com/img/icon/8.gif",
  //   "title": "曇り",
  //   "height": 31
  // }

  public updated: string = null;
  public updatedIso: string = null;
  public updateduk: string = null;

  constructor(instanceData?: string) {
    if (instanceData) {
      this.deserialize(instanceData);
    }
  }

  private deserialize(instanceData: string) {
    let obj = JSON.parse(instanceData);
    this.updated = obj.url;
    this.updatedIso = obj.updatedIso;
    this.updateduk = obj.updateduk;
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
