import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>heading</h1>
      <p>This is an p tag!</p>
    </article>
  );
}
