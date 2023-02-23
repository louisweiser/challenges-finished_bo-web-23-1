import React from "react";
import "./styles.css";

export default function App({ isHappy }) {
  return <h1>{isHappy ? "🥳" : "😭"}</h1>;
}
