import PlaceImage from "../PlaceImage";
export default function PlaceCard({ place, isLarge }) {
  return (
    <>
      <PlaceImage place={place} isLarge={isLarge} />
      <section>
        <h2>{place.name}</h2>
        <p>{place.description}</p>
      </section>
    </>
  );
}
