import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Certificate: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="flex-grow pb-28">
                <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <button onClick={() => navigate(-1)} className="text-text-light dark:text-text-dark flex size-12 shrink-0 items-center justify-center rounded-full">
                            <span className="material-symbols-outlined text-2xl">arrow_back</span>
                        </button>
                        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">你的公益憑證已生成 🌿</h2>
                        <div className="size-12 shrink-0"></div>
                    </div>
                </header>
                <main className="flex flex-col items-center">
                    <div className="w-full max-w-md px-4 pt-4">
                        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-component-bg-light dark:bg-component-bg-dark/50">
                            {/* Fix: Removed invalid 'alt' attribute from div element. */}
                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUXppAg52SvdYFotKY4H8GuMnb-m0BmONi5G9X2Ln3EDFek7e-TmGcijPVejHeHlgOqg505LYxCAjfRv4ZiBDl6MrGiTiRgt6kj_q0GBFQm_HqTMCj3JcSzFfxg9lreMfxhNpggDYPaTesRFuZ4pitFHAVqxE7K-LVfp-uz1o73Cdouk1ap5XjIO27oAVoSHwLJn8BuU3pZbPAJwTYQcqnHlu31CE1Xg6ONBmRU_5xhjy6P37fBVm4V8j41waW9l1sTFD81KEwcmkf")' }}></div>
                            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 px-4">
                                <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">NFT ID #02345</p>
                                <div className="flex items-end gap-3 justify-between">
                                    <p className="text-green-600 dark:text-green-400 text-base font-normal leading-normal">已上鏈 ✅</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 mt-4 bg-component-bg-light dark:bg-component-bg-dark/50 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                            <div className="flex justify-between gap-x-6 py-3 border-b border-border-light dark:border-border-dark">
                                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">公益名稱</p>
                                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal text-right">陽光基金會</p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-3 border-b border-border-light dark:border-border-dark">
                                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">捐贈比例</p>
                                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal text-right">80%</p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-3 border-b border-border-light dark:border-border-dark">
                                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">發票數量</p>
                                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal text-right">15</p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-3">
                                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">開獎日期</p>
                                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal text-right">2024/08/25</p>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-3 w-full flex-col items-stretch py-6">
                            <Link to="/transfer-nft/02345" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-text-light dark:text-black text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform active:scale-95">
                                <span className="truncate">轉移此 NFT</span>
                            </Link>
                            <Link to="/wallet" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 text-primary text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform active:scale-95">
                                <span className="truncate">回到錢包</span>
                            </Link>
                        </div>
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">憑證將於開獎日自動更新分潤狀態。</p>
                    </div>
                </main>
            </div>
            <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-border-light dark:border-border-dark bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg">
                <div className="mx-auto flex h-20 max-w-md items-center justify-around px-4">
                    <Link to="/dashboard" className="flex flex-col items-center gap-1 text-subtle-light dark:text-subtle-dark">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-xs">首頁</span>
                    </Link>
                    <Link to="/dashboard" className="flex flex-col items-center gap-1 text-subtle-light dark:text-subtle-dark">
                        <span className="material-symbols-outlined">waves</span>
                        <span className="text-xs">公益池</span>
                    </Link>
                    <Link to="/wallet" className="flex flex-col items-center gap-1 text-primary dark:text-primary">
                        <span className="material-symbols-outlined material-symbols-filled">account_balance_wallet</span>
                        <span className="text-xs font-bold">錢包</span>
                    </Link>
                    <Link to="/dashboard" className="flex flex-col items-center gap-1 text-subtle-light dark:text-subtle-dark">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-xs">個人</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};
export default Certificate;