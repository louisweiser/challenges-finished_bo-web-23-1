import PlaceList from "../components/PlaceList";
import Link from "next/link";

export default function PlacesPage({ isLarge }) {
  return (
    <>
      <PlaceList isLarge={isLarge} />
      <Link href="/">Back to Home</Link>
    </>
  );
}
