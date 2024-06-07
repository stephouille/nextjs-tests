export const dynamic = "force-dynamic";

export default async function Page() {
  const date = new Date();

  return (
    <div>
      <h1 className="text-2xl">No cache</h1>

      <p>export const dynamic = `force-dynamic`;</p>

      <p>{date.toLocaleString()}</p>
    </div>
  );
}
