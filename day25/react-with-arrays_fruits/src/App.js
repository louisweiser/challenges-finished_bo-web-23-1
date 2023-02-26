import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍒 cherry",
      color: "red",
    },
    {
      id: 4,
      name: "🍓 strawberry",
      color: "red",
    },
    {
      id: 5,
      name: "🥝 kiwi",
      color: "green",
    },
  ];

  return fruits.map(({ id, name, color }) => (
    <div className="app" key={id}>
      <Card name={name} className="" color={color} />
    </div>
  ));
}
