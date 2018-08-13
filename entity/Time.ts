export default class Time {
  public updated: string = "";
  public updatedIso: string = "";
  public updateduk: string = "";

  constructor(json?: any) {
    if (json) {
      this.deserialize(json);
    }
  }

  private deserialize(json: any) {
    let timeObj = json.data.time;
    this.updated = timeObj.updated;
    this.updatedIso = timeObj.updatedIso;
    this.updateduk = timeObj.updateduk;
  }
}
