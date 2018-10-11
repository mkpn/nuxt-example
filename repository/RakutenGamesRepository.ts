import axios from "~/node_modules/axios";

export default class RakutenGamesRepository {
  public static async fetchRaw() {
    const response = await axios.get('https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&booksGenreId=006&applicationId=1050843850478026195')
    console.log('フェッチ完了〜')
    return response.data.Items
  }
}
