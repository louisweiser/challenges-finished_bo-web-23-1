import "./styles.css";

export default function App({ name }) {
  return (
    <h1>
      Hello,{" "}
      {name === "Andrea" || name === "Martin" || name === "Ralf"
        ? "Coach"
        : name}{" "}
      !
    </h1>
  );
}
