import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { to: '/dashboard', icon: 'home', label: '首頁', id: 'home' },
    { to: '/dashboard', icon: 'waves', label: '公益池', id: 'pools' },
    { to: '/wallet', icon: 'account_balance_wallet', label: '錢包', id: 'wallet' },
    { to: '/dashboard', icon: 'person', label: '個人', id: 'profile' },
];

const BottomNav: React.FC = () => {
    const location = useLocation();

    const getIsActive = (id: string, path: string) => {
        if (id === 'wallet') {
            return location.pathname.startsWith('/wallet');
        }
        if (id === 'home') {
            return location.pathname === '/dashboard';
        }
        // Pools and Profile share /dashboard and won't be marked active
        return false;
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-light dark:border-border-dark bg-white/90 dark:bg-component-bg-dark/90 backdrop-blur-lg rounded-t-2xl pb-[calc(env(safe-area-inset-bottom,0))]">
            <div className="mx-auto max-w-md h-18 sm:h-20 px-6 flex items-center justify-between">
                {navItems.map((item) => {
                    const isActive = getIsActive(item.id, item.to);
                    const iconStyle = {
                        fontVariationSettings: `'FILL' ${isActive ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
                    };
                    return (
                        <Link
                            key={item.id}
                            to={item.to}
                            className={`flex flex-col items-center gap-1 py-3 transition-colors ${isActive ? 'text-primary' : 'text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary'}`}
                        >
                            <span className="material-symbols-outlined" style={iconStyle}>{item.icon}</span>
                            <span className={`text-xs ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
