import Weather from '../entity/Weather'

export default class WeatherRepository {
  public static fetchWeatherList(): [] {
    //return await axios.get('https://hoge')
    const response = "{\n" +
      "\"pinpointLocations\": [\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4020200\",\n" +
      "\"name\": \"大牟田市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4020300\",\n" +
      "\"name\": \"久留米市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4020700\",\n" +
      "\"name\": \"柳川市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4021000\",\n" +
      "\"name\": \"八女市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4021100\",\n" +
      "\"name\": \"筑後市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4021200\",\n" +
      "\"name\": \"大川市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4021600\",\n" +
      "\"name\": \"小郡市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4022500\",\n" +
      "\"name\": \"うきは市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4022800\",\n" +
      "\"name\": \"朝倉市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4022900\",\n" +
      "\"name\": \"みやま市\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4044700\",\n" +
      "\"name\": \"筑前町\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4044800\",\n" +
      "\"name\": \"東峰村\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4050300\",\n" +
      "\"name\": \"大刀洗町\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4052200\",\n" +
      "\"name\": \"大木町\"\n" +
      "},\n" +
      "{\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/4054400\",\n" +
      "\"name\": \"広川町\"\n" +
      "}\n" +
      "],\n" +
      "\"link\": \"http://weather.livedoor.com/area/forecast/400040\",\n" +
      "\"forecasts\": [\n" +
      "{\n" +
      "\"dateLabel\": \"今日\",\n" +
      "\"telop\": \"曇り\",\n" +
      "\"date\": \"2018-08-16\",\n" +
      "\"temperature\": {\n" +
      "\"min\": null,\n" +
      "\"max\": null\n" +
      "},\n" +
      "\"image\": {\n" +
      "\"width\": 50,\n" +
      "\"url\": \"http://weather.livedoor.com/img/icon/8.gif\",\n" +
      "\"title\": \"曇り\",\n" +
      "\"height\": 31\n" +
      "}\n" +
      "},\n" +
      "{\n" +
      "\"dateLabel\": \"明日\",\n" +
      "\"telop\": \"曇のち晴\",\n" +
      "\"date\": \"2018-08-17\",\n" +
      "\"temperature\": {\n" +
      "\"min\": {\n" +
      "\"celsius\": \"27\",\n" +
      "\"fahrenheit\": \"80.6\"\n" +
      "},\n" +
      "\"max\": {\n" +
      "\"celsius\": \"34\",\n" +
      "\"fahrenheit\": \"93.2\"\n" +
      "}\n" +
      "},\n" +
      "\"image\": {\n" +
      "\"width\": 50,\n" +
      "\"url\": \"http://weather.livedoor.com/img/icon/12.gif\",\n" +
      "\"title\": \"曇のち晴\",\n" +
      "\"height\": 31\n" +
      "}\n" +
      "},\n" +
      "{\n" +
      "\"dateLabel\": \"明後日\",\n" +
      "\"telop\": \"晴時々曇\",\n" +
      "\"date\": \"2018-08-18\",\n" +
      "\"temperature\": {\n" +
      "\"min\": null,\n" +
      "\"max\": null\n" +
      "},\n" +
      "\"image\": {\n" +
      "\"width\": 50,\n" +
      "\"url\": \"http://weather.livedoor.com/img/icon/2.gif\",\n" +
      "\"title\": \"晴時々曇\",\n" +
      "\"height\": 31\n" +
      "}\n" +
      "}\n" +
      "],\n" +
      "\"location\": {\n" +
      "\"city\": \"久留米\",\n" +
      "\"area\": \"九州\",\n" +
      "\"prefecture\": \"福岡県\"\n" +
      "},\n" +
      "\"publicTime\": \"2018-08-16T19:00:00+0900\",\n" +
      "\"copyright\": {\n" +
      "\"provider\": [\n" +
      "{\n" +
      "\"link\": \"http://tenki.jp/\",\n" +
      "\"name\": \"日本気象協会\"\n" +
      "}\n" +
      "],\n" +
      "\"link\": \"http://weather.livedoor.com/\",\n" +
      "\"title\": \"(C) LINE Corporation\",\n" +
      "\"image\": {\n" +
      "\"width\": 118,\n" +
      "\"link\": \"http://weather.livedoor.com/\",\n" +
      "\"url\": \"http://weather.livedoor.com/img/cmn/livedoor.gif\",\n" +
      "\"title\": \"livedoor 天気情報\",\n" +
      "\"height\": 26\n" +
      "}\n" +
      "},\n" +
      "\"title\": \"福岡県 久留米 の天気\",\n" +
      "\"description\": {\n" +
      "\"text\": \" 九州北部地方は、湿った空気の影響により、概ね曇りで雷を伴った非常に\\n激しい雨が降っている所があります。\\n\\n 16日の九州北部地方は、湿った空気や前線の影響により、曇りや雨で雷\\nを伴い非常に激しい雨の降る所があるでしょう。\\n\\n 17日の九州北部地方は、湿った空気の影響により、はじめ曇りで雨の降\\nる所がありますが次第に高気圧に覆われて晴れとなるでしょう。午後は日射\\nの影響により雷を伴い激しい雨の降る所があるでしょう。\\n 福岡県では高温が予想されるため、熱中症など健康管理に注意してくださ\\nい。\\n\\n 波の高さは、対馬海峡では、16日は2.5メートル、17日は3メート\\nルでしょう。九州西海上では、16日は4メートル、17日は3メートルで\\n共にうねりを伴うでしょう。豊後水道では、16日は2メートル、17日は\\n1.5メートルで共にうねりを伴うでしょう。\\n 福岡県の内海では、16日と17日は0.5メートルでしょう。\\n\\n<天気変化等の留意点>\\n 筑後北部では、16日18時から17日18時までの降水量は、多い所で\\n1時間に30ミリ、24時間に60ミリの見込みです。\",\n" +
      "\"publicTime\": \"2018-08-16T16:34:00+0900\"\n" +
      "}\n" +
      "}"
    let weatherOgj = JSON.parse(response)
    return weatherOgj.forecasts.map((forecast) => new Weather(forecast));
  }
}

