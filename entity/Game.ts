export default class Game {
  public largeImageUrl
  public itemPrice
  public title
  public label
  public itemCaption
  public hardware
  public salesDate
  public reviewCount
  public reviewAverage

  constructor(data?: any) {
    this.largeImageUrl = data.largeImageUrl
    this.itemPrice = data.itemPrice
    this.title = data.title
    this.label = data.label
    this.itemCaption = data.itemCaption
    this.hardware = data.hardware
    this.salesDate = data.salesDate
    this.reviewCount = data.reviewCount
    this.reviewAverage = data.reviewAverage
  }
}
