import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { nfts } from '../lib/nfts';

const TransferNft: React.FC = () => {
    const navigate = useNavigate();
    const { nftId } = useParams<{ nftId: string }>();
    const [recipientAddress, setRecipientAddress] = useState('');
    const [isAddressTouched, setIsAddressTouched] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    
    const nft = nfts.find(n => n.id === nftId);

    const isValidEthereumAddress = (address: string): boolean => {
        return /^0x[a-fA-F0-9]{40}$/.test(address);
    };
    
    const isAddressValid = isValidEthereumAddress(recipientAddress);
    const showError = isAddressTouched && !isAddressValid && recipientAddress.length > 0;

    const handleAddressChange = (value: string) => {
        setRecipientAddress(value);
        if (!isAddressTouched) {
            setIsAddressTouched(true);
        }
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            handleAddressChange(text.trim());
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
            // You could show a small toast or alert to the user here
        }
    };

    const handleTransfer = () => {
        if (!isAddressValid) return;
        setShowSuccessModal(true);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/wallet');
    };

    if (!nft) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-text-light dark:text-text-dark">
                <h2 className="text-2xl font-bold mb-4">找不到憑證</h2>
                <p className="text-subtle-light dark:text-subtle-dark mb-6">您要轉移的公益憑證不存在。</p>
                <Link to="/wallet" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-text-light dark:text-black text-base font-bold leading-normal tracking-[0.015em] w-48 transition-transform active:scale-95">
                    返回錢包
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
                    轉移公益憑證
                </h2>
                <div className="size-10 shrink-0"></div>
            </header>

            <main className="flex-1 p-4 pb-32">
                <div className="flex flex-col gap-4">
                    {/* NFT Info Card */}
                    <div className="bg-component-bg-light dark:bg-component-bg-dark rounded-xl p-4 shadow-sm">
                        <p className="text-subtle-light dark:text-subtle-dark text-sm mb-2">您正在轉移的憑證</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12 shrink-0" style={{ backgroundImage: `url("${nft.image}")` }}></div>
                            <div className="flex flex-1 flex-col justify-center min-w-0">
                                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal truncate">InvoicePool NFT #{nft.id}</p>
                                <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">{nft.status}</p>
                            </div>
                        </div>
                    </div>

                    {/* Recipient Address Input */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="recipient-address" className="text-text-light dark:text-text-dark font-medium px-1">收款人錢包地址</label>
                        <div className="relative">
                            <input
                                id="recipient-address"
                                type="text"
                                value={recipientAddress}
                                onChange={(e) => handleAddressChange(e.target.value)}
                                onBlur={() => setIsAddressTouched(true)}
                                placeholder="輸入或貼上收件者錢包地址"
                                className={`w-full h-14 pl-4 pr-28 rounded-xl border-2 bg-component-bg-light dark:bg-component-bg-dark focus:ring-primary focus:border-primary text-base font-mono transition-colors
                                ${showError ? 'border-red-500 dark:border-red-500' : 'border-border-light dark:border-border-dark'}
                                ${isAddressValid ? 'border-primary dark:border-primary' : ''}
                                `}
                                aria-label="Recipient Wallet Address"
                                aria-invalid={showError}
                                aria-describedby={showError ? "address-error" : undefined}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
                               {isAddressTouched && (
                                   <>
                                   {isAddressValid && <span className="material-symbols-outlined text-primary">check_circle</span>}
                                   {showError && <span className="material-symbols-outlined text-red-500">error</span>}
                                   </>
                               )}
                                <button
                                    type="button"
                                    onClick={handlePaste}
                                    className="text-primary text-sm font-bold hover:opacity-80"
                                >
                                    貼上
                                </button>
                            </div>
                        </div>
                        {showError && (
                             <p id="address-error" className="text-red-500 text-xs mt-1 px-1 flex items-center gap-1">
                                <span className="material-symbols-outlined !text-sm">error</span>
                                錢包地址格式錯誤，請重新確認
                            </p>
                        )}
                    </div>
                    
                     {/* Gas Fee Info */}
                    <div className="flex items-start gap-3 rounded-xl bg-green-50 dark:bg-green-500/10 p-4 border border-green-200 dark:border-green-500/20">
                        <span className="material-symbols-outlined text-primary mt-1">local_gas_station</span>
                        <div className="flex-1">
                            <p className="text-text-light dark:text-text-dark font-medium">Gas 費用 (Fee)</p>
                            <p className="text-subtle-light dark:text-subtle-dark text-sm mt-0.5">轉移的區塊鏈手續費將由平台吸收，您無需支付任何費用。</p>
                        </div>
                    </div>
                    
                    {/* Warning */}
                    <div className="flex items-start gap-3 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 p-4 border border-yellow-200 dark:border-yellow-500/20">
                        <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400 mt-1">warning</span>
                        <div className="flex-1">
                            <p className="text-text-light dark:text-text-dark font-medium">請仔細確認地址</p>
                            <p className="text-subtle-light dark:text-subtle-dark text-sm mt-0.5">區塊鏈交易無法撤銷。轉移前請務必確認收款地址是否正確。</p>
                        </div>
                    </div>

                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark bg-opacity-80 backdrop-blur-sm border-t border-border-light dark:border-border-dark">
                 <button
                    onClick={handleTransfer}
                    disabled={!isAddressValid}
                    className="w-full h-14 text-center rounded-xl bg-primary text-white text-base font-bold shadow-[0_4px_14px_rgba(38,169,92,0.4)] hover:bg-opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    確認轉移
                </button>
            </footer>

            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="relative mx-auto flex w-[90%] max-w-sm flex-col items-center rounded-xl bg-component-bg-light dark:bg-component-bg-dark p-6 text-center shadow-2xl">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <span className="material-symbols-outlined text-4xl text-white">task_alt</span>
                        </div>
                        <h3 className="text-text-light dark:text-text-dark tracking-tight text-xl font-bold leading-tight px-4 text-center pb-2 pt-2">轉移成功！</h3>
                        <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal pb-6 pt-1 px-4 text-center">您的公益憑證 NFT 已成功送出，交易正在區塊鏈上確認中。</p>
                        <div className="flex w-full px-2 py-2 justify-center">
                            <button 
                                onClick={handleCloseModal}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-text-light text-base font-bold leading-normal tracking-[0.015em] shadow-[0_4px_14px_0_rgba(38,169,92,0.25)]"
                            >
                                <span className="truncate">完成</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransferNft;