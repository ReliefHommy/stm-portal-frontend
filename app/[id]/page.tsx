import Image from "next/image"

async function getPost(id: string) {
  const res = await fetch(`https://stm-food-backend-production.up.railway.app/api/studio/stm-post/${id}/`)
  return res.json()
}

export default async function PostDetail({ params }: any) {
  const post = await getPost(params.id)

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <Image
        src={post.image_url || ''}
        alt={post.title}
        width={1200}
        height={900}
        className="w-full rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
        {post.overview}
      </p>
    </div>
  )
}
