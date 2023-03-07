import Image from "next/image";

export default function PlaceImage({ place, isLarge }) {
  const imageSize = isLarge ? 150 : 100;
  return (
    <Image
      src={`/assets/img/${place.imageId}.jpg`}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
