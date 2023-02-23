import React from "react";
import "./styles.css";

export default function App({ valueA, valueB }) {
  return (
    <h1>
      The sum from {valueA} and {valueB} is : {valueA + valueB}
    </h1>
  );
}
