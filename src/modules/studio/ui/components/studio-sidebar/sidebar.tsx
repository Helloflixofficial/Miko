import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import MainSection from "./home-section";
import { Separator } from "@/components/ui/separator";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

const StudioSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-b shadow-md" collapsible="icon">
      <SidebarContent className="bg-background ">
        <MainSection />
        <Separator />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Exit Studio" asChild>
                <Link href="/">
                  <LogInIcon className="size-5" />
                  <span className="text-sm">Exit Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default StudioSidebar;
