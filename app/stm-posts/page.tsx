import Footer from "../components/hompage/Footer"
import MainNavbar from "../components/hompage/MainNavbar"
import STMMasonryPost, { MasonryPost } from "../components/masonry/STMMasonryPost"


async function getPosts(): Promise<MasonryPost[]> {
  const res = await fetch(
    'https://stm-food-backend-production.up.railway.app/api/studio/stm-post/',
    {
    cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch STM posts')
  }

  const data = await res.json()



    // 🔁 Map backend → frontend shape (produce URL-safe slug)
    return data.map((post: any) => {
      const raw = String(post.slug ?? post.id)
      const safe = encodeURIComponent(raw.replace(/[,\s]+$/g, "")) // trims trailing comma/spaces

      return {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt ?? '',
        image: post.image_url || '',
        href: `/stm-posts/${encodeURIComponent(safe)}`,
      }
    })
  }

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <MainNavbar />

     
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Latest Stories
        </h2>
        <STMMasonryPost
          posts={posts}
          variant="card" />
      </div>
      
      <Footer />
    </main>
  )
}