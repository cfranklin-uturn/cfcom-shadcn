import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AudioPlayer } from "@/components/audio-player"

// Sample track data - replace with your actual tracks
const tracks = [
  {
    id: 1,
    title: "Neon",
    src: "/audio/Neon.mp3",
    duration: "3:56",
    description: "I was listening to a lot of Cyberpunk. This is my take on that kind of sound."
  },
  {
    id: 2,
    title: "Northern Slights",
    src: "/audio/NorthernSlights.mp3", 
    duration: "4:07",
    description: "An electronic composition blending interesting vocal runs with a savage beat."
  },
  {
    id: 3,
    title: "Coffee Shop Conversations", 
    src: "/audio/coffee-shop-conversations.mp3",
    duration: "2:58",
    description: "A warm, acoustic melody inspired by overheard stories and human connection."
  },
  {
    id: 4,
    title: "Neon Nights",
    src: "/audio/neon-nights.mp3",
    duration: "5:23", 
    description: "A synthwave journey through cyberpunk cityscapes and electric emotions."
  }
]

export default function MusicPage() {
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
            <div className="flex flex-col gap-6 py-4 md:gap-8 md:py-6 px-4 lg:px-6">
              {/* Header */}
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">My Music</h1>
                <p className="text-muted-foreground">
                  Original compositions and musical explorations. Click play to listen.
                </p>
              </div>

              {/* About Section */}
              <div className="p-6 bg-muted/30 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">About the Music</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These tracks represent my journey as a composer and producer, exploring different 
                  genres and emotional landscapes. Each piece tells a story and invites the listener 
                  into a unique sonic world. All compositions, arrangements, and production are my own work.
                </p>
              </div>

              {/* Track List */}
              <div className="grid gap-6 md:gap-8">
                {tracks.map((track, index) => (
                  <div key={track.id} className="space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground mb-1">{track.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{track.description}</p>
                        <AudioPlayer
                          src={track.src}
                          title={track.title}
                          duration={track.duration}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}