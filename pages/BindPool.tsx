import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { charities } from '../lib/charities';

const BindPool: React.FC = () => {
    const navigate = useNavigate();
    const { charityId } = useParams<{ charityId: string }>();
    const charity = charities.find(c => c.id === charityId);
    
    const [donationRatio, setDonationRatio] = useState<'50' | '100'>('100');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleConfirmBinding = () => {
        if (charityId) {
            localStorage.setItem('boundCharityId', charityId);
        }
        setShowSuccessModal(true);
    };

    const handleViewWallet = () => {
        navigate('/wallet');
    };

    if (!charity) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">找不到公益池</h2>
                <p className="text-subtle-light dark:text-subtle-dark mb-6">您要找的公益池不存在。</p>
                <Link to="/charities" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-text-light dark:text-black text-base font-bold leading-normal tracking-[0.015em] w-48 transition-transform active:scale-95">
                    返回首頁
                </Link>
            </div>
        );
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <header className="flex sticky top-0 items-center bg-background-light dark:bg-background-dark bg-opacity-80 backdrop-blur-sm p-4 pb-2 z-10 justify-between border-b border-border-light dark:border-border-dark">
                <button
                    onClick={() => navigate(-1)}
                    className="flex size-10 shrink-0 items-center justify-center text-text-light dark:text-text-dark"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="flex-1 text-center text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                    綁定此公益池捐入發票 🌱
                </h2>
                <div className="size-10 shrink-0"></div>
            </header>

            <main className="flex-1 pb-32">
                <div className="p-4 @container">
                    <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-component-bg-light dark:bg-component-bg-dark/50 dark:border dark:border-border-dark">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-[2/1] @xl:aspect-square @xl:w-40 bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-r-none"
                            style={{ backgroundImage: `url("${charity.image}")` }}
                        ></div>
                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-4">
                            <div className="flex items-center gap-2">
                                <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">{charity.name}</p>
                                <span className="material-symbols-outlined text-primary text-base material-symbols-filled">verified</span>
                            </div>
                            <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">{charity.englishName}</p>
                            <p className="text-text-light dark:text-text-dark/80 text-base font-normal leading-normal mt-1">愛心碼:{charity.loveCode}</p>
                        </div>
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-200/50 dark:bg-slate-800 p-1">
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-[0_2px_8px_rgba(0,0,0,0.1)] has-[:checked]:text-text-light dark:has-[:checked]:text-text-dark text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal transition-all duration-200 ease-in-out">
                            <span className="truncate">捐出50%</span>
                            <input className="invisible w-0" name="donation-ratio" type="radio" value="50" checked={donationRatio === '50'} onChange={(e) => setDonationRatio(e.target.value as '50' | '100')} />
                        </label>
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-[0_2px_8px_rgba(0,0,0,0.1)] has-[:checked]:text-text-light dark:has-[:checked]:text-text-dark text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal transition-all duration-200 ease-in-out">
                            <span className="truncate">全額捐出(100%)</span>
                            <input className="invisible w-0" name="donation-ratio" type="radio" value="100" checked={donationRatio === '100'} onChange={(e) => setDonationRatio(e.target.value as '50' | '100')} />
                        </label>
                    </div>
                </div>
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-3 pt-1 px-4">💚 謝謝你的公益捐贈</p>
                <div className="flex flex-wrap gap-4 p-4 pt-0">
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-4 bg-component-bg-light dark:bg-component-bg-dark/50 border border-border-light dark:border-border-dark">
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal">位捐贈者</p>
                        <p className="text-text-light dark:text-text-dark tracking-tight text-2xl font-bold leading-tight">12,483</p>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-4 bg-component-bg-light dark:bg-component-bg-dark/50 border border-border-light dark:border-border-dark">
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-medium leading-normal">張發票</p>
                        <p className="text-text-light dark:text-text-dark tracking-tight text-2xl font-bold leading-tight">84,201</p>
                    </div>
                </div>
                <div className="px-4">
                    <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-component-bg-light dark:bg-component-bg-dark/50 p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                                <span className="material-symbols-outlined text-primary">security</span>
                            </div>
                            <p className="flex-1 text-text-light dark:text-text-dark text-base font-medium leading-normal">正在建立你的公益錢包，由 imToken 安全託管。</p>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-800 p-3">
                            <span className="text-subtle-light dark:text-subtle-dark/80 text-sm font-mono truncate">0x1234...abcd</span>
                            <button className="ml-auto flex size-7 shrink-0 items-center justify-center rounded-md text-subtle-light dark:text-subtle-dark hover:bg-gray-200 dark:hover:bg-slate-700">
                                <span className="material-symbols-outlined text-base">content_copy</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark bg-opacity-80 backdrop-blur-sm border-t border-border-light dark:border-border-dark">
                <p className="text-center text-xs text-subtle-light dark:text-subtle-dark mb-4 px-2">平台將於七天後自動將發票上鏈，由 imToken 安全託管，以 USDT 結算。</p>
                <button
                  onClick={handleConfirmBinding}
                  className="w-full h-14 text-center rounded-xl bg-primary text-white text-base font-bold shadow-[0_4px_14px_rgba(38,169,92,0.4)] hover:bg-opacity-90 active:scale-95 transition-all"
                >
                    確認綁定此公益池
                </button>
            </footer>

            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="relative mx-auto flex w-[90%] max-w-sm flex-col items-center rounded-xl bg-component-bg-light dark:bg-component-bg-dark p-6 text-center shadow-2xl">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <span className="material-symbols-outlined text-4xl text-white">volunteer_activism</span>
                        </div>
                        <h3 className="text-text-light dark:text-text-dark tracking-tight text-xl font-bold leading-tight px-4 text-center pb-2 pt-2">謝謝您的愛心 💚</h3>
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal pb-6 pt-1 px-4 text-center">您的發票已成功綁定此公益池，將於七天內自動上鏈。</p>
                        <div className="flex w-full px-2 py-2 justify-center">
                            <button 
                                onClick={handleViewWallet}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-text-light dark:text-black text-base font-bold leading-normal tracking-[0.015em] shadow-[0_4px_14px_0_rgba(38,169,92,0.25)]"
                            >
                                <span className="truncate">檢視我的錢包</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BindPool;