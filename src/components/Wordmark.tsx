import Link from "next/link";

export default function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="studio-wordmark" href="/" aria-label="Alma and Light home" onClick={onClick}>
      Alma & Light
    </Link>
  );
}
