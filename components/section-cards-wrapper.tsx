import { SectionCards } from "@/components/section-cards"
import { getAllPosts } from "@/lib/posts"

export function SectionCardsWrapper() {
  const posts = getAllPosts()
  const latestPost = posts[0] || null

  return <SectionCards latestPost={latestPost} />
}