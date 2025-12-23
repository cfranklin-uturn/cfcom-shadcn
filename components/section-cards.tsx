"use client"

import { IconTrendingDown, IconTrendingUp, IconArrowRight, IconUsers } from "@tabler/icons-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useVisitorTracking } from "@/hooks/use-visitor-tracking"
import type { Post } from "@/lib/posts"

interface SectionCardsProps {
  latestPost?: Post | null
}

export function SectionCards({ latestPost }: SectionCardsProps) {
  const { stats, isLoading } = useVisitorTracking()

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Latest Blog Post</CardDescription>
          <CardTitle className="text-lg font-semibold leading-tight @[250px]/card:text-xl">
            {latestPost ? latestPost.title : "No posts yet"}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-3 text-sm">
          {latestPost ? (
            <>
              <div className="text-muted-foreground line-clamp-2">
                {latestPost.excerpt || "Click to read more about this post..."}
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/blog/${latestPost.slug}`} className="flex items-center gap-2">
                  Read More
                  <IconArrowRight className="size-3" />
                </Link>
              </Button>
            </>
          ) : (
            <div className="text-muted-foreground">
              No blog posts available
            </div>
          )}
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Site Visitors</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {isLoading ? "..." : stats.totalVisitors.toLocaleString()}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconUsers />
              Total
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {isLoading ? "Loading..." : `${stats.todayVisitors} today`} <IconUsers className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {isLoading ? "Tracking visitors" : stats.lastVisit ? `Last visit: ${new Date(stats.lastVisit).toLocaleDateString()}` : "Welcome, first visitor!"}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
