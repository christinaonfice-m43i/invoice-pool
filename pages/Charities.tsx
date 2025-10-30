
import React from 'react';
import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';

const Charities: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex items-center bg-component-bg-light/80 dark:bg-component-bg-dark/80 backdrop-blur-sm p-4 pb-3 justify-center shadow-sm">
        <h1 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">公益池 🌊</h1>
      </header>
      <main className="flex-1 pb-24 pt-4">
        <div className="flex flex-col gap-4 px-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-component-bg-light dark:bg-component-bg-dark overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDShupgAh7XjDBHBBaInV6BY9Czlg-HR2oTKN6tCY9ezXNuzAhsqew8bi1BVwfC5QynBza9BbUljzgBUQf3RSxkZrQEyR6gsv5yc9CXMulim6Z7LINHFoZNz-l2tquUBXsPwaw11SfClPfdH4Z1TxeiWojYU8aek66m8fBgQTbw9K0NHDCddC1R7jg8uby2nW1B0H5UBwbSxRQ7DKfVwlwoO8AlfqUYyADPQaZX2KTX15Rs9PFP78VvoMNr-TUZzE3dFQ0G9Q17ezZi")',
              }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-primary dark:text-primary/90 text-sm font-bold leading-normal">進行中</p>
              <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                財團法人陽光社會福利基金會
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
                    已募集 USDT 1,667 • 350 位支持者
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    下次開獎: 2024/09/25
                  </p>
                </div>
                <Link
                  to="/bind-pool"
                  className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-text-light dark:text-black text-base font-bold leading-normal mt-2 sm:mt-0 self-end sm:self-auto"
                >
                  <span className="truncate">我要支持</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-component-bg-light dark:bg-component-bg-dark overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS3vjwi3kNzPd4ZKUHYzM1HBOl9gUYW21IzQKlfGRdjcyXjP5vrpb5IuKpkeZhc06VlsjfHblmndK3VldaJKgopPfI3Du_6662MFaWiGjNO5Q4U2MF-T39rXHx2GZ6Fi8LqSeLac3NfALeIuIeYFfyBu-wdKcnvNqewjGWkWAAW1RMMRvn9BM3i4fnqUDunT81WFIUVD6zI3y2Yq99b8MTyv-8e7v1AhsB0U2qLbExzRftyFhuyHirHIqhLm6az8XbmQASU8znJgd6")',
              }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary dark:text-primary/90 text-xl material-symbols-filled">
                  check_circle
                </span>
                <p className="text-primary dark:text-primary/90 text-sm font-bold leading-normal">已參與</p>
              </div>
              <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                臺灣流浪動物保護協會
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
                    已募集 USDT 4,010 • 890 位支持者
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    下次開獎: 2024/09/25
                  </p>
                </div>
                <Link
                  to="/bind-pool"
                  className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary/90 text-base font-bold leading-normal mt-2 sm:mt-0 self-end sm:self-auto"
                >
                  <span className="truncate">查看詳情</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-component-bg-light dark:bg-component-bg-dark overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARihyA10MEVr00uvBuM1QkMUBfNuo7MCOgpoaaxjfto6FG7N645sdLLocA_WfyEtf6Yrh45eTy-VqonmMETuV485PSzzXjqpBxjgF3aNpWIuc6FT8NTbJtK94xgp8VA9fBB2X-7yJyVW1sy0pjiyHAUu99M4SKtqleycdit-KhdH3tgTs0iFe_31eEZ04ShwuWr4Y9vrICQTAJGQls0HKm18_HEGRALnjSModYMT5XAJX2JbodVFcwb7z-g4AE4ZNxO3OpN_J_G1FC")',
              }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-primary dark:text-primary/90 text-sm font-bold leading-normal">進行中</p>
              <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                罕見疾病基金會
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
                    已募集 USDT 2,667 • 620 位支持者
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    下次開獎: 2024/11/25
                  </p>
                </div>
                <Link
                  to="/bind-pool"
                  className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-text-light dark:text-black text-base font-bold leading-normal mt-2 sm:mt-0 self-end sm:self-auto"
                >
                  <span className="truncate">我要支持</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-component-bg-light dark:bg-component-bg-dark overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdhOi7XAmhFe8OlqSow9e1twmlxXQcx_e9KyNXRBDdM-oLF_CPs6ZwYcK1O_FbfeRqzjvpFJfj-JTdR6F1IY2s82H-jphPAz_NfAporfVOcB5A1p_hnvGzMmaaFRAzAfX14LE_LgOSe6r3sNRMz6jexL3ubshm_h5hXzsYgeIW7z6bTIu3TkVW6LQA0EvHHjUDS9lUvLK3eZVd3XbU5oWQPwUQwUe0dmrULPzQhQ4LUe6wJNL2iaWwCt76daugLxvgcLE9E5RAl_fX")',
              }}
            ></div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4">
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-bold leading-normal">已結束</p>
              <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                兒童福利聯盟文教基金會
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between pt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
                    已募集 USDT 8,333 • 1,500 位支持者
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    已於 2024/07/25 截止
                  </p>
                </div>
                <button
                  disabled
                  className="flex min-w-[120px] max-w-[480px] cursor-not-allowed items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-gray-200 dark:bg-border-dark text-subtle-light dark:text-subtle-dark text-base font-bold leading-normal mt-2 sm:mt-0 self-end sm:self-auto"
                >
                  <span className="truncate">已結束</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Charities;
