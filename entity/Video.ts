export default class Video {
  public src: string = ""

  constructor(json?: any) {
    if (json) {
      this.deserialize(json)
    }
  }

  private deserialize(videoObj: any) {
    this.src = videoObj.src
  }
}
