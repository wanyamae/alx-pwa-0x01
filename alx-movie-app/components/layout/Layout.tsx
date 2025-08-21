import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ComponentProps } from "@/interfaces"

const Layout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;