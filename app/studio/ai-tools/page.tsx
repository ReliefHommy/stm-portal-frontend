export default function AiToolsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">AI Tools</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <a className="rounded-xl border bg-white p-4 hover:shadow" href="/studio/posts">
          <h3 className="font-medium">Auto-Post</h3>
          <p className="text-sm text-gray-500">Generate & schedule multi-channel posts.</p>
        </a>
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-medium">Recipe Caption Generator</h3>
          <p className="text-sm text-gray-500">Short, catchy, SEO-friendly copy.</p>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-medium">Blog Assistant</h3>
          <p className="text-sm text-gray-500">Outline → draft → fact blocks.</p>
        </div>
      </div>
    </section>
  )
}
