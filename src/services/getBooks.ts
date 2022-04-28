import axios from "axios";
import store from "@/store";

export default function (): any {
  const booksFromServer = async (): Promise<void> => {
    const url: string = "https://www.googleapis.com/books/v1/volumes";
    const param_1: string = "q=flowers+inauthor:keyes";
    const param_key: string = "key=AIzaSyBX4sYCZZxiEAs2CTdbs7qsm0QqJLCU6mI";
    const string: string = url + "?" + param_1 + "&" + param_key;
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
