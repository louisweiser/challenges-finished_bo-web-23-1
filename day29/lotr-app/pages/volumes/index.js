import { introduction } from "../../lib/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            the-fellowship-of-the-ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            the-return-of-the-king
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">the-two-towers</Link>
        </li>
      </ul>
    </div>
  );
}
