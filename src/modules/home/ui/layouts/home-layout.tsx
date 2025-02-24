import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../components/home-navbar";

interface HomeLayoutProps {
    children: React.ReactNode;
};
export const HomeLayoutPage = ({ children }: HomeLayoutProps) => {
    return (
        <SidebarProvider className="w-full">
            <HomeNavbar />
            <div>
                {children}
            </div>
        </SidebarProvider>
    )
};