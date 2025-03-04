"use client";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const Items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,

    },
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,

    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon,

    },
]


const MainSection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>{Items.map((items) => (
                    <SidebarMenuItem key={items.title}>
                        <SidebarMenuButton tooltip={items.title} asChild isActive={false} onClick={() => { }}>
                            <Link href={items.url} className="flex items-center gap-4">
                                <items.icon />
                                <span>{items.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>))}</SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
export default MainSection;