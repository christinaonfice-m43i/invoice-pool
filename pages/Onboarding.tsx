import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'manual'>('upload');
  const [image, setImage] = useState<File | null>(null);
  const [manualBarcode, setManualBarcode] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const simulatedBarcode = '/DMSL94Z';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    fileInputRef.current?.click();
  };
  
  const handleManualBarcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    if (sanitizedValue.length <= 7) {
        setManualBarcode(sanitizedValue);
    }
  };

  const isManualInputValid = manualBarcode.trim().length === 7;
  const isUploadValid = image !== null;
  const canStart = (activeTab === 'upload' && isUploadValid) || (activeTab === 'manual' && isManualInputValid);

  const handleStart = () => {
    if (!canStart) return;

    let barcodeToStore = '';
    if (activeTab === 'upload') {
        barcodeToStore = simulatedBarcode;
    } else { // activeTab === 'manual'
        barcodeToStore = `/${manualBarcode.trim()}`;
    }
    
    localStorage.setItem('userBarcode', barcodeToStore);
    navigate('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-grow px-4 pb-8 pt-6">
        <div className="w-full max-w-md mx-auto flex flex-col">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">savings</span>
            </div>
            <span className="text-xl font-bold">Invoice Pool</span>
          </div>
          <h1 className="text-text-light dark:text-text-dark tracking-tight text-[28px] font-bold leading-tight text-center pb-2">
            綁定手機載具，開始你的公益旅程 🌱
          </h1>
          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal pb-6 text-center">
            上傳載具截圖或輸入條碼，系統將自動建立你的公益錢包。
          </p>
          <div className="pb-3">
            <div className="flex border-b border-border-light dark:border-border-dark justify-between">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
                  activeTab === 'upload'
                    ? 'border-b-primary text-primary'
                    : 'border-b-transparent text-subtle-light dark:text-subtle-dark'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">上傳載具截圖</p>
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
                  activeTab === 'manual'
                    ? 'border-b-primary text-primary'
                    : 'border-b-transparent text-subtle-light dark:text-subtle-dark'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">輸入手機條碼</p>
              </button>
            </div>
          </div>

          {activeTab === 'upload' && (
            <div className="flex flex-col py-4">
              <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                  accept="image/*"
                />
              {image ? (
                <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-border-light dark:border-border-dark p-6 bg-component-bg-light dark:bg-component-bg-dark">
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal self-start">您上傳的圖片</p>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded screenshot"
                    className="w-full max-w-xs rounded-lg object-contain border border-border-light dark:border-border-dark"
                  />
                  <hr className="w-full border-t border-border-light dark:border-border-dark my-2" />
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal self-start">掃描到的手機載具</p>
                  <img 
                      className="w-full max-w-xs" 
                      alt="Carrier Barcode" 
                      src={`https://barcode.tec-it.com/barcode.ashx?data=${simulatedBarcode}&code=Code128&translate-esc=on`}
                  />
                  <p className="text-text-light dark:text-text-dark text-xl font-mono font-medium leading-tight mt-2 tracking-widest">{simulatedBarcode}</p>
                  <button
                      type="button"
                      onClick={triggerFileUpload}
                      className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                      <span className="truncate">重新上傳</span>
                  </button>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-border-light dark:border-border-dark px-6 py-10 bg-component-bg-light dark:bg-component-bg-dark cursor-pointer"
                  onClick={triggerFileUpload}
                >
                  <span className="material-symbols-outlined text-4xl text-subtle-light dark:text-subtle-dark">
                    photo_camera
                  </span>
                  <div className="flex max-w-[480px] flex-col items-center gap-1">
                    <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] text-center">
                      點擊此處上傳
                    </p>
                    <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal text-center">
                      請上傳您的載具條碼截圖
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">選擇圖片</span>
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'manual' && (
             <div className="flex flex-col py-4">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-subtle-light dark:text-subtle-dark text-lg font-medium">/</span>
                    <input
                        type="text"
                        value={manualBarcode}
                        onChange={handleManualBarcodeChange}
                        placeholder="ABC123D"
                        maxLength={7}
                        className="w-full h-14 pl-8 pr-4 rounded-xl border-2 border-border-light dark:border-border-dark bg-component-bg-light dark:bg-component-bg-dark focus:ring-primary focus:border-primary text-lg font-mono tracking-widest"
                        aria-label="Carrier Barcode Input"
                    />
                </div>
                <p className="text-subtle-light dark:text-subtle-dark text-xs mt-2 px-2">請輸入斜線後方的7位英數字元。</p>
             </div>
          )}

          <div className="flex flex-col gap-3 p-4 bg-component-bg-light dark:bg-component-bg-dark rounded-xl mt-4">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
              系統將自動建立你的公益錢包
            </p>
            <div className="rounded-full bg-border-light dark:bg-border-dark">
              <div className="h-2 rounded-full bg-primary" style={{ width: '100%' }}></div>
            </div>
            <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
              由 imToken 安全託管
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 pt-6 pb-2">
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full ring-2 ring-primary bg-component-bg-light dark:bg-component-bg-dark">
                <img
                  alt="imToken logo"
                  className="h-8 w-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-Wiu6TKyppKxRLOSbOIOzY2ax1PGa2Dp_pFeZbwUKg3Uyz1OaLAsz8ylwloDeqrUAdGddrhBdj5iEyylC6hBGqkvt70Ys8WDX13D6e5m2Yer10aG8MKPtLvb5nXob-imOKzmKpHgVjoRDJvxZY-0fwG5AFaXa1kCKzftmSbTe89gZJLRwcemGsV6BL5qa9LBqUKQyf6aOrksOiweW5w7WrRK00U0dGfIRjlJml2VpnFqoXgyxVFstBe0HAE8iolQmUop6AgZi1qS"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-component-bg-light dark:bg-component-bg-dark opacity-50">
                <img
                  alt="MetaMask logo"
                  className="h-6 w-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdi23bGvlMfJ1EuQFd3mRnY2QMEn9mABXEXoSYkrfevTP7Pvtft3fAYoQLVym1aJBrbnGfgwf6gmx_kZHaVNQidXLZuvO-_87FbDUBNidWNNucuMAzr-GO0dLpMJhYsgihNWczisjksCF-HfsDCfUezfms5ls4Dhs37U6k2h7EozJrKLK4VZAr4YdorHUWZ2oP_74CBUmgxVPb7ceUlXe8S85M8IfwvdvklPLCmbM6dAZm9OF6Qx4wU_SApIXvYifJbXDqdpVJEQD7"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-component-bg-light dark:bg-component-bg-dark opacity-50">
                <img
                  alt="Trust Wallet logo"
                  className="h-6 w-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnVSCy0Zc40XEYYHaTJFaW2HYSfdhWzffbbBa5GxpSzplX8FOVwGlY8XCinbtSokgsrS-AJRUxxcDX56ku-X2Pm82Y3dH5Q0Eavm04OlOi6px4EWlsDPkn4ZS9b6wb-XdHTe-C7cMMG65sOlxBkgEq58HxPWwhZrCHxvpyVsjM1yzBkjXt61uF0vNip_EscuY5_fFQN7y6DmjccC3172hP0YFAUu6y6nuZQzlRtUGemv4HNzICO0VOH1bACGzqtH11RGr_Op69bvD_"
                />
              </div>
            </div>
            <p className="text-subtle-light dark:text-subtle-dark text-sm font-medium">綁定已有錢包</p>
          </div>
        </div>
      </main>
      <footer className="sticky bottom-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm pt-4 pb-6 px-4">
        <div className="w-full max-w-md mx-auto flex flex-col items-center gap-3">
          <button
            onClick={handleStart}
            disabled={!canStart}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="truncate">開始使用 Invoice Pool 🌱</span>
          </button>
          <p className="text-subtle-light dark:text-subtle-dark text-xs font-normal leading-normal">
            上鏈手續費由平台吸收
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;