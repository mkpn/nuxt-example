import Video from '../entity/Video'

export default class VideoRepository {
  public static fetchVideoList(): Video[] {
    //return await axios.get('https://hoge')
    const response = "{\n" +
      "\"src_list\": [" +
      "{\"src\": \"https://www.youtube.com/embed/srH34Tjjo9U\"}," +
      "{\"src\": \"https://www.youtube.com/embed/paXpvS23N5w\"}" +
      "]" +
      "}"
    let videoObj = JSON.parse(response)
    return videoObj.src_list.map((src) => new Video(src));
  }
}

