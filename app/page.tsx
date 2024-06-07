import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <h1 className="text-2xl mb-20">All links</h1>

      <ul className="list-disc">
        <li>
          <Link href="/default-page">Default Page (Cache by default)</Link>
        </li>
        <li>
          <Link href="/revalidate-cache">
            Revalidate Cache (Cache revalidate every 60 seconds)
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/revalidate-cache-2">
            Revalidate Cache (Cache revalidate every 120 seconds) - No prefetch
          </Link>
        </li>
        <li>
          <Link href="/no-cache">No Cache</Link>
        </li>
      </ul>
    </main>
  );
}
