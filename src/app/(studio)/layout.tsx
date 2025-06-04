import { HomeLayoutPage } from "@/modules/home/ui/layouts/home-layout";
// import { StudioLayoutPage } from "@/modules/studio/ui/layout/studio-layout";
interface LayoutProps {
  children: React.ReactNode;
}
const HomeLayout = ({ children }: LayoutProps) => {
  return <HomeLayoutPage>{children}</HomeLayoutPage>;
};
export default HomeLayout;
