import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/posts"
import { format } from "date-fns"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Blog</h1>
                <p className="text-muted-foreground">
                  Thoughts, tutorials, and insights on development and technology.
                </p>
              </div>
              
              {posts.length === 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>No posts yet</CardTitle>
                    <CardDescription>
                      Check back soon for new content!
                    </CardDescription>
                  </CardHeader>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {posts.map((post) => (
                    <Card key={post.slug} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle className="hover:text-primary transition-colors">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription>
                              {format(new Date(post.date), "MMMM d, yyyy")}
                            </CardDescription>
                          </div>
                        </div>
                        {post.excerpt && (
                          <CardDescription className="text-base">
                            {post.excerpt}
                          </CardDescription>
                        )}
                      </CardHeader>
                      {post.tags && post.tags.length > 0 && (
                        <CardContent className="pt-0">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}