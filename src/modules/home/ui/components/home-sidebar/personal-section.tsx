"use client";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const Items = [
    {
        title: "History",
        url: "/playlist/history",
        icon: HistoryIcon,
        auth: true,

    },
    {
        title: "Liked Videos",
        url: "/playlist/liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All PlayLists",
        url: "/playlists/all",
        icon: ListVideoIcon,
        auth: true,
    },
]


const PersonalSection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
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
export default PersonalSection;