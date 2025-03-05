interface AuthLayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: AuthLayoutProps) => {
    return (
        <div className=" min-h-screen flex justify-center items-center">
            {children}
        </div>
    );
}
export default Layout;