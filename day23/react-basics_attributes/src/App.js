import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">article headline</h2>
      <label htmlFor="input">input</label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
      >
        Wikipedia
      </a>
    </article>
  );
}
