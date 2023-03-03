import React from "react";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function Button() {
  const router = useRouter();

  function handleClick() {
    const index = volumes[Math.floor(Math.random() * volumes.length)];
    const volume = volumes[index];
    router.push(`/volumes/${volume.slag}`);
  }

  return (
    <button
      onClick={() => {
        handleClick;
      }}
    >
      Random Link
    </button>
  );
}
