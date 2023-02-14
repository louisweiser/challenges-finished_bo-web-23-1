import { Header } from "../Header/header.js";
import { CardList } from "../CardList/cardList.js";
import { Form } from "../Form/form.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
