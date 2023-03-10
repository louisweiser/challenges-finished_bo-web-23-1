import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;
  console.log(data);

  return (
    <div>
      <h1>random character</h1>
      <RenderData data={data} />
    </div>
  );
}

function RenderData({ data }) {
  const dataElements = [];

  for (const [key, value] of Object.entries(data)) {
    dataElements.push(
      <div key={key}>
        <span>{key}:</span> {value}
      </div>
    );
  }

  return <div>{dataElements}</div>;
}
