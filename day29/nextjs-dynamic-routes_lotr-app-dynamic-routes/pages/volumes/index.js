import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Button from "../../components/Button";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Button></Button>
    </>
  );
}
//bei map muss der key mit rein !!
