import Video from '../entity/Video'

export default class VideoRepository {
  public static fetchVideoList(): [] {
    const response = "{\n" +
      "\"src_list\": [" +
      "{\"src\": \"https://www.youtube.com/embed/srH34Tjjo9U\"}," +
      "{\"src\": \"https://www.youtube.com/embed/paXpvS23N5w\"}," +
      "{\"src\": \"https://www.youtube.com/embed/4Ohpj2GDbRQ\"}," +
      "{\"src\": \"https://www.youtube.com/embed/0dIs_vSG400\"}," +
      "{\"src\": \"https://www.youtube.com/embed/dHm6BjJqIsE\"}" +
      "]" +
      "}"
    let videoObj = JSON.parse(response)
    return videoObj.src_list.map((src) => new Video(src));
  }
}

