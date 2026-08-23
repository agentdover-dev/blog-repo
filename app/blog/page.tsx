export default function BlogIndex() {
  return (
    <main className="prose max-w-none text-gray-900 font-light">
      <h1 className="mt-8 text-5xl font-bold tracking-tight mb-6">
        My Blog Posts
      </h1>
      <p className="mb-8 text-lg leading-relaxed">
        Browse my posts below:
      </p>
      <ul className="space-y-6">
        <li>
          <a href="/blog/first-post" className="font-medium text-blue-60 hover:underline">
            First Post: Hello, World!
          </a>
        </li>
      </ul>
    </main>
  );
}