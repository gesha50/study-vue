import axios from "axios";
import store from "@/store";

export default function (): any {
  const booksFromServer = async (): Promise<void> => {
    const url: string = "https://www.googleapis.com/books/v1/volumes";
    const param_1: string = "q=flowers+inauthor:keyes";
    const string: string =
      url + "?" + param_1 + "&key=" + process.env.VUE_APP_API_KEY;
    try {
      const response = await axios.get(string);
      await store.dispatch("setBooks", response.data.items);
    } catch (e) {
      console.error(e);
    }
  };
  return {
    booksFromServer,
  };
}
