import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import MainSection from "./home-section"

const Homesidebar = () => {
    return (
        <Sidebar>
            <SidebarContent className="bg-background">
                <MainSection />
            </SidebarContent>
        </Sidebar>
    )
}

export default Homesidebar