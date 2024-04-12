import Link from "next/link";

import { tag } from "./styles";

export default function Tag({
  label,
}: {
  label: string;
}) {
  return (
    <Link href={`/tags/${label}`} className={tag}>
      {label}
    </Link>
  );
}
