import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "đ",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "đ",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "đĻĢ",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
    setAnimals([...animals, { ...newAnimal, id: uid() }]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
