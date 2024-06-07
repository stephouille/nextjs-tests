export const revalidate = 120;

export default async function Page() {
  const date = new Date();

  return (
    <div>
      <h1 className="text-2xl">Cache Revalidate</h1>

      <p>Cache Revalidate every 120 secondes</p>

      <p>{date.toLocaleString()}</p>
    </div>
  );
}
