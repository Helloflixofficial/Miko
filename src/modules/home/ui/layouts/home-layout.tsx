import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../components/home-navbar";
import Homesidebar from "../components/home-sidebar/home-sidebar";

interface HomeLayoutProps {
    children: React.ReactNode;
};
export const HomeLayoutPage = ({ children }: HomeLayoutProps) => {
    return (
        <SidebarProvider className="w-full">
            <HomeNavbar />
            <div className="flex min-h-screen pt-[4.1rem]">
                <Homesidebar />
                <main className="flex-1 overflow-y-auto">  {children}</main>

            </div>
        </SidebarProvider>
    )
};