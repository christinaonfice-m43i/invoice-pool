
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { nfts } from '../lib/nfts';

// Read barcode from localStorage once when the module is loaded.
const initialBarcode = localStorage.getItem('userBarcode') || '/ABC123DE';

const Wallet: React.FC = () => {
    const [barcode, setBarcode] = useState(initialBarcode);
    const navigate = useNavigate();


    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-40">
            <div className="sticky top-0 z-10 flex items-center bg-component-bg-light dark:bg-component-bg-dark p-4 pb-3 justify-between shadow-sm">
                <div className="flex size-8 shrink-0 items-center justify-center"></div>
                <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">我的錢包 👛</h1>
                <div className="flex size-8 shrink-0 items-center justify-center"></div>
            </div>
            <div className="p-4 space-y-4">
                <div className="flex flex-col items-center justify-start rounded-xl bg-component-bg-light dark:bg-component-bg-dark p-4 shadow-sm">
                    <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal mb-2 self-start">我的手機載具</p>
                    <img 
                        className="w-full max-w-sm" 
                        alt="Carrier Barcode" 
                        src={`https://barcode.tec-it.com/barcode.ashx?data=${barcode}&code=Code128&translate-esc=on`}
                    />
                    <p className="text-text-light dark:text-text-dark text-xl font-mono font-medium leading-tight mt-2 tracking-widest">{barcode}</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-base">cached</span>
                        <span>更換手機載具</span>
                    </button>
                </div>

                <div className="flex flex-col items-stretch justify-start rounded-xl bg-component-bg-light dark:bg-component-bg-dark p-4 shadow-sm">
                    <div className="flex w-full items-start gap-3">
                        <img className="h-8 w-auto" alt="imToken logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcnQRwRmvXXigXYp-14vq4CZ4nB0k-r1ZlwK8OojlN1CkTks0zs7w8S9HG8otCPjuATDgFopFw7jx1M7gcdFKzNx665MAjTLy0xMyL5ng6sbOVP72cKOOfyz3ww28NWqNVJ7qA13A7gdOC7-PMPChTmgAim10nL9v5aMjJHOpv5hI0t9BDR9UHwr5SAb4gPYtI7yrHszBYHXayiQ699vzKE6_TE78jmUJZCKNITioaOQFd1qJwXK_5LCdsL_ndwxhNX59e5JOUzYlq" />
                        <div className="flex w-full min-w-0 grow flex-col items-stretch justify-center gap-1">
                            <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">錢包地址</p>
                            <div className="flex items-center gap-2">
                                <p className="text-text-light dark:text-text-dark text-base font-medium leading-tight truncate">0x1234...abcd</p>
                                <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark cursor-pointer text-xl">content_copy</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-3">
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">由 imToken 安全託管</p>
                        <a className="text-primary text-sm font-medium leading-normal underline" href="#">在區塊鏈瀏覽器查看</a>
                    </div>
                </div>
                <div className="flex flex-col items-stretch justify-start rounded-xl bg-component-bg-light dark:bg-component-bg-dark p-4 shadow-sm">
                    <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">目前綁定的公益池</p>
                    <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="h-10 w-10 rounded-full object-cover" alt="Animal Rescue Foundation Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr4WBFBKdB_vxXLRu_TGvYv5FT4uF8zZ3X6GHisTA29f3sWAV8kHD9kSBwqwAxD5kNaqVW4tdmx_PkohZXmONdYk6KFlau2m0hdZ2gQmkc3DG4IPKj8lflPpQN6PkslazNFA7kbJmcPoUCbnQelkTOn4Ye0S_hBi7wF07ep95VNK4utizj-kniy-lOtlMrYy7jCKkY7YRcb0ky8R_CiuDuUyWen-__ljcvMAdWRG7Wk_U9MWjP04X9r_SJdFRJf2P4NlXpDQHHCM8J" />
                            <p className="text-text-light dark:text-text-dark text-base font-semibold leading-tight">動物救援基金會</p>
                        </div>
                        <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-green-700 dark:text-primary">生效中</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border-light dark:border-border-dark">
                        <p className="text-subtle-light dark:text-subtle-dark text-sm">目前已捐贈5張發票</p>
                    </div>
                </div>
                <div className="flex flex-col items-stretch justify-start rounded-xl bg-component-bg-light dark:bg-component-bg-dark p-4 shadow-sm">
                    <div className="flex w-full grow flex-col items-stretch justify-center gap-1">
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">目前餘額</p>
                        <p className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight tracking-[-0.015em]">30.000 USDT ≈ NT$ 960,000</p>
                        <div className="flex items-end gap-3 justify-between mt-2">
                            <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">此金額將於開獎後自動入帳.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-1 pb-2 pt-4">我的公益憑證 🌱</h3>
                    <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
                        {nfts.map((nft, index) => (
                            <React.Fragment key={nft.id}>
                                <div className="bg-component-bg-light dark:bg-component-bg-dark">
                                    <div className="flex gap-4 p-4 justify-between items-center">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12 shrink-0" style={{ backgroundImage: `url("${nft.image}")` }}></div>
                                            <div className="flex flex-1 flex-col justify-center gap-0.5 min-w-0">
                                                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal truncate">InvoicePool NFT #{nft.id}</p>
                                                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">{nft.name}・捐出 {nft.donationRatio}%</p>
                                                <p className="text-subtle-light dark:text-subtle-dark text-xs font-normal leading-normal">{nft.issueDate.replace(/\//g, ' / ')}</p>
                                                <div className="mt-1 inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-primary self-start">{nft.status}</div>
                                            </div>
                                        </div>
                                        <div className="shrink-0 flex flex-col gap-2 items-center">
                                            <Link to={`/certificate/${nft.id}`} className="text-sm font-medium leading-normal text-text-light dark:text-text-dark bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md">查看</Link>
                                            <Link to={`/transfer-nft/${nft.id}`} className="text-sm font-medium leading-normal text-text-light dark:text-text-dark bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md">轉移</Link>
                                        </div>
                                    </div>
                                </div>
                                {index < nfts.length - 1 && <hr className="border-t border-border-light dark:border-border-dark/50 mx-4" />}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h4 className="text-text-light dark:text-text-dark text-base font-bold leading-tight px-1 pb-2">未生成NFT的發票</h4>
                        <div className="flex flex-col rounded-xl bg-component-bg-light dark:bg-component-bg-dark shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-border-light dark:border-border-dark/50">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <p className="text-text-light dark:text-text-dark font-medium">發票號碼 AB-12345678</p>
                                        <p className="text-subtle-light dark:text-subtle-dark text-sm mt-0.5">2025 / 12 / 10</p>
                                    </div>
                                    <div className="inline-flex items-center rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200">待生成</div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <p className="text-text-light dark:text-text-dark font-medium">發票號碼 CD-87654321</p>
                                        <p className="text-subtle-light dark:text-subtle-dark text-sm mt-0.5">2025 / 12 / 08</p>
                                    </div>
                                    <div className="inline-flex items-center rounded-full bg-gray-200 dark:bg-gray-600 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200">待生成</div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-1 pb-2 pt-4">交易紀錄 📜</h3>
                        <div className="flex flex-col rounded-xl bg-component-bg-light dark:bg-component-bg-dark shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-border-light dark:border-border-dark/50">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20">
                                            <span className="material-symbols-outlined text-red-600 dark:text-red-400">arrow_upward</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium text-text-light dark:text-text-dark">公益捐贈</p>
                                            <p className="text-sm text-subtle-light dark:text-subtle-dark mt-0.5">2025 / 11 / 25</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-red-600 dark:text-red-400">- 20.000 USDT</p>
                                        <p className="text-sm text-subtle-light dark:text-subtle-dark mt-0.5">已完成</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-border-light dark:border-border-dark/50">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20">
                                            <span className="material-symbols-outlined text-green-600 dark:text-green-400">arrow_downward</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium text-text-light dark:text-text-dark">獎金入帳</p>
                                            <p className="text-sm text-subtle-light dark:text-subtle-dark mt-0.5">2025 / 11 / 25</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-green-600 dark:text-green-400">+ 20.000 USDT</p>
                                        <p className="text-sm text-subtle-light dark:text-subtle-dark mt-0.5">已完成</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20">
                                            <span className="material-symbols-outlined text-red-600 dark:text-red-400">arrow_upward</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium text-text-light dark:text-text-dark">公益捐贈</p>
                                            <p className="text-sm text-subtle-light dark:text-subtle-dark mt-0.5">2025 / 09 / 25</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-red-600 dark:text-red-400">- 10.000 USDT</p>
                                        <p className="text-sm text-subtle-light dark:text-subtle-dark mt-0.5">已完成</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-16 left-0 w-full px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="flex flex-col gap-2">
                    <Link className="w-full text-center text-primary dark:text-primary font-bold py-3 px-4 rounded-xl text-base leading-normal bg-component-bg-light dark:bg-component-bg-dark shadow-sm" to="/winning-result">查看本期中獎結果</Link>
                    <button className="w-full text-white bg-primary dark:bg-primary hover:bg-green-500 dark:hover:bg-green-500 font-bold py-3 px-4 rounded-xl text-base leading-normal">刷新錢包</button>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 z-10 w-full bg-component-bg-light dark:bg-component-bg-dark border-t border-border-light dark:border-border-dark">
                <div className="grid h-16 max-w-lg grid-cols-4 mx-auto font-medium">
                    <Link className="inline-flex flex-col items-center justify-center px-5 text-subtle-light dark:text-subtle-dark hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/dashboard">
                        <span className="material-symbols-outlined text-2xl mb-1">home</span>
                        <span className="text-xs">Home</span>
                    </Link>
                    <Link className="inline-flex flex-col items-center justify-center px-5 text-subtle-light dark:text-subtle-dark hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/dashboard">
                        <span className="material-symbols-outlined text-2xl mb-1">favorite</span>
                        <span className="text-xs">Pools</span>
                    </Link>
                    <Link className="inline-flex flex-col items-center justify-center px-5 text-primary hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/wallet">
                        <span className="material-symbols-outlined material-symbols-filled text-2xl mb-1">account_balance_wallet</span>
                        <span className="text-xs font-bold">Wallet</span>
                    </Link>
                    <Link className="inline-flex flex-col items-center justify-center px-5 text-subtle-light dark:text-subtle-dark hover:bg-gray-50 dark:hover:bg-gray-800 group" to="/dashboard">
                        <span className="material-symbols-outlined text-2xl mb-1">person</span>
                        <span className="text-xs">Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Wallet;
