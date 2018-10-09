import axios from "~/node_modules/axios";

export default class RakutenGamesRepository {
  public static fetchRaw() {
    axios.get('https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&booksGenreId=006&applicationId=1050843850478026195')
      .then(response => {
        console.log(response)
      })
      .catch()
  }
}
