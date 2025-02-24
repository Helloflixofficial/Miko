import { HomeLayoutPage } from "@/modules/home/ui/layouts/home-layout"
interface LayoutProps {
    children: React.ReactNode
}
const HomeLayout = ({ children }: LayoutProps) => {
    return (
        <HomeLayoutPage>
            {children}
        </HomeLayoutPage>
    )
}
export default HomeLayout