import { SidebarProvider } from "@/components/ui/sidebar";
import StudioNavbar from "../components/studio-navbar";
import StudioSidebar from "../components/studio-sidebar/sidebar";

interface StudioLayoutProps {
  children: React.ReactNode;
}
export const StudioLayoutPage = ({ children }: StudioLayoutProps) => {
  return (
    <SidebarProvider className="w-full">
      <StudioNavbar />
      <div className="flex min-h-screen pt-[4.1rem]">
        <StudioSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};
