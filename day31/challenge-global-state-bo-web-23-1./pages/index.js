import { useEffect, useState } from "react";
import { places } from "../data/places";
import PlaceCard from "../components/PlaceCard";
import Link from "next/link";

export default function HomePage({ isLarge }) {
  const [randomPlace, setRandomPlace] = useState(null);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * places.length);
    setRandomPlace(places[randomIndex]);
  }, []);
  if (!randomPlace) {
    return null;
  }
  return (
    <>
      <h2>Homepage</h2>
      <h3>Place of the week</h3>
      <PlaceCard place={randomPlace} isLarge={isLarge} />
      <Link href="/places">See all places</Link>
    </>
  );
}
