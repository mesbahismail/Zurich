import Link from "next/link";

export default function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="studio-wordmark" href="/" aria-label="Elya Zurich home" onClick={onClick}>
      Elya Zurich
    </Link>
  );
}
