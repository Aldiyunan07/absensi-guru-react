import { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function App({ children, title = null }: ChildrenApp) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // Default sidebar terbuka
    const [isCollapsed, setIsCollapsed] = useState<boolean>(window.innerWidth < 992);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target instanceof HTMLElement)) return;
            if (!event.target.closest('.vertical-menu') && !event.target.closest('#vertical-menu-btn')) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div id="layout-wrapper">
                <Navbar onToggle={() => setIsSidebarOpen((prev) => !prev)} />
                <Sidebar isSidebarOpen={isSidebarOpen} isCollapsed={isCollapsed} />
                <div className={`page-content ${isSidebarOpen ? '' : 'full-width'}`}>
                    <div className="container-fluid">
                        <div className="main-content">{children}</div>
                    </div>
                </div>
                <Footer />
                <div className="rightbar-overlay"></div>
            </div>
        </>
    );
}

// Perbaiki interface
interface ChildrenApp {
    title?: string;
    children: JSX.Element | JSX.Element[];
}
