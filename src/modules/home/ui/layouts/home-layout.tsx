interface HomeLayoutProps {
    children: React.ReactNode;
};
export const HomeLayoutPage = ({ children }: HomeLayoutProps) => {
    return (
        <div>
            <h1>Navbar</h1>
            {children}
        </div>
    )
};