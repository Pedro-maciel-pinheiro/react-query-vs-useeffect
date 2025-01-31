import { Home } from "lucide-react"
import { SiReactquery, SiReact } from "react-icons/si";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    className: "",
    icon: Home,
  },
  {
    title: "UseEffect Filter",
    url: "/use-effect",
    className: "text-cyan-500",
    icon: SiReact,
  },
  {
    title: "React.Query Filter",
    url: "/query",
    className: "text-purple-500",
    icon: SiReactquery,
  },

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-center font-bold text-black">UseEffect vs React.Query</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="border-b">
                    <Link href={item.url} className="my-2 font-medium ">
                      <item.icon className={cn(`delay-200 w-15 h-15 ${item.className}`, index === 1 || index === 2 ? "animate-pulse" : "")} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
