export default class Weather {
  public dataLabel: string = ""
  public telop: string = ""
  public imageUrl: string = ""

  constructor(json?: any) {
    if (json) {
      this.deserialize(json)
    }
  }

  private deserialize(weatherObj: any) {
    this.dataLabel = weatherObj.dateLabel
    this.telop = weatherObj.telop
    this.imageUrl = weatherObj.imageUrl
  }
}
