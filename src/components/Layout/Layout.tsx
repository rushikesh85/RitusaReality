import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className={`flex-1 ${!isHome ? 'pt-20 md:pt-24' : ''}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
