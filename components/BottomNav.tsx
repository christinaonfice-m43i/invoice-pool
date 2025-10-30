
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
  activePath?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, activePath }) => {
    const location = useLocation();
    const isActive = activePath ? location.pathname === activePath : location.pathname === to;
    
    const iconStyle = {
      fontVariationSettings: `'FILL' ${isActive ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
    };

    return (
        <Link to={to} className={`flex flex-col items-center justify-center gap-1 ${isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary'}`}>
            <span className="material-symbols-outlined" style={iconStyle}>{icon}</span>
            <span className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
        </Link>
    );
};


const BottomNav: React.FC = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-border-light dark:border-border-dark bg-white/80 dark:bg-component-bg-dark/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-md items-center justify-around px-4">
                <NavItem to="/dashboard" icon="home" label="首頁" activePath="/dashboard" />
                <NavItem to="/dashboard" icon="volunteer_activism" label="公益池" />
                <NavItem to="/dashboard" icon="receipt_long" label="發票" />
                <NavItem to="/dashboard" icon="person" label="個人" />
            </div>
        </nav>
    );
}

export default BottomNav;
