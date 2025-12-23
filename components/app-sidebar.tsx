"use client"

import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import {
  IconFolderFilled,
  IconHomeFilled,
  IconUserFilled,
  IconBriefcaseFilled,
  IconArticleFilled,
  IconMusic,
  IconPrinter,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: IconHomeFilled,
    },
    {
      title: "About Me",
      url: "/about",
      icon: IconUserFilled,
    },
    {
      title: "Resume",
      url: "/resume",
      icon: IconBriefcaseFilled,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolderFilled,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: IconArticleFilled,
    },
    {
      title: "Music",
      url: "/music",
      icon: IconMusic,
    },
  ],
  documents: [
    {
      name: "Music Production",
      url: "#",
      icon: IconMusic,
    },
    {
      name: "3D Printing",
      url: "#",
      icon: IconPrinter,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-6! data-[slot=sidebar-menu-button]:min-h-30"
            >
            {<Link href="/" className="flex items-center gap-2">
            <Image
              src="/CFLogo.png"
              alt="CF Logo"
              width={300}
              height={100}
              className=""
            />
            </Link>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
