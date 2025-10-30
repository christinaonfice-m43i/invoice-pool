
import React from 'react';
import { Link } from 'react-router-dom';

const WinningResult: React.FC = () => {
    return (
        <div className="relative flex h-screen w-full flex-col bg-[#f8f8f5] dark:bg-[#221e10] group/design-root overflow-hidden">
            {/* Main Content */}
            <div className="flex flex-1 flex-col z-10">
                {/* Top App Bar */}
                <div className="flex items-center bg-transparent p-4 pb-2 justify-between">
                    <div className="flex size-12 shrink-0 items-center justify-center"></div>
                    <h1 className="text-[#181611] dark:text-[#f8f8f5] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">🎉 恭喜！你本期中獎</h1>
                    <div className="flex size-12 shrink-0 items-center justify-center"></div>
                </div>
                <div className="flex-grow px-4 flex flex-col items-center justify-center">
                    {/* Donation Card */}
                    <div className="relative w-full max-w-md">
                        <div className="relative flex flex-col items-stretch justify-start rounded-xl shadow-lg dark:shadow-none bg-white/80 dark:bg-black/30 backdrop-blur-sm border border-black/5 dark:border-white/10 p-6 @container">
                            <div className="flex w-full grow flex-col items-center justify-center gap-2 text-center">
                                <p className="text-[#8a8060] dark:text-[#a9a289] text-sm font-medium leading-normal">已全數捐出至 兒童教育基金會</p>
                                <p className="text-4xl font-bold leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-[#b38b20]">20.000 USDT</p>
                                <p className="text-[#8a8060] dark:text-[#a9a289] text-base font-normal leading-normal">約 NT$ 600,000</p>
                                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/50 px-3 py-1 text-xs font-semibold text-green-800 dark:text-green-300">
                                    <span className="material-symbols-outlined !text-sm">verified</span>
                                    <span>已上鏈</span>
                                </div>
                                <Link to="/transaction-details" className="mt-4 flex w-full max-w-[280px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f2b90d] text-[#181611] text-sm font-bold leading-normal transition-transform hover:scale-105 active:scale-95">
                                    <span className="truncate">查看捐贈交易 (Tx)</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#8a8060] dark:text-[#a9a289] text-xs font-normal leading-normal mt-4 max-w-md text-center px-4">你的中獎金已全數由智能合約轉入公益地址，交易可在鏈上查證。</p>
                </div>
                {/* Button Group */}
                <div className="flex justify-center pb-4">
                    <div className="flex flex-1 gap-3 max-w-md flex-col items-stretch px-4 py-3">
                        <Link to="/certificate" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#f2b90d] text-[#181611] text-base font-bold leading-normal tracking-[0.015em] w-full transition-transform hover:scale-105 active:scale-95">
                            <span className="truncate">查看我的憑證</span>
                        </Link>
                        <Link to="/dashboard" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-white/80 dark:bg-white/10 text-[#181611] dark:text-[#f8f8f5] text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors hover:bg-white dark:hover:bg-white/20">
                            <span className="truncate">返回首頁</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Bottom Navigation Bar is omitted as the primary actions are on-screen buttons */}
        </div>
    );
};
export default WinningResult;
