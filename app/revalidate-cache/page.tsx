export const revalidate = 60;

export default async function Page() {
  const date = new Date();

  return (
    <div>
      <h1 className="text-2xl">Cache Revalidate</h1>

      <p>Cache Revalidate every 60 secondes</p>

      <p>{date.toLocaleString()}</p>
    </div>
  );
}
