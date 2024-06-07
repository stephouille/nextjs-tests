export default async function Page() {
  const date = new Date();

  return (
    <div>
      <h1 className="text-2xl">Default Page</h1>

      <p>Cache by default</p>

      <p>{date.toLocaleString()}</p>
    </div>
  );
}
