import { StudioLayoutPage } from "@/modules/studio/ui/layout/studio-layout";
interface LayoutProps {
  children: React.ReactNode;
}
const HomeLayout = ({ children }: LayoutProps) => {
  return <StudioLayoutPage>{children}</StudioLayoutPage>;
};
export default HomeLayout;
