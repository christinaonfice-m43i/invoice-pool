export interface Charity {
  id: string;
  name: string;
  englishName: string;
  loveCode: string;
  image: string;
  status: '進行中' | '已結束';
  raised: number;
  supporters: number;
  nextDraw: string;
  industry: '動物救援' | '社會福利' | '醫療援助' | '兒童福利';
}

export const charities: Charity[] = [
  {
    id: 'sunshine',
    name: '財團法人陽光社會福利基金會',
    englishName: 'Sunshine Social Welfare Foundation',
    loveCode: '520',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDShupgAh7XjDBHBBaInV6BY9Czlg-HR2oTKN6tCY9ezXNuzAhsqew8bi1BVwfC5QynBza9BbUljzgBUQf3RSxkZrQEyR6gsv5yc9CXMulim6Z7LINHFoZNz-l2tquUBXsPwaw11SfClPfdH4Z1TxeiWojYU8aek66m8fBgQTbw9K0NHDCddC1R7jg8uby2nW1B0H5UBwbSxRQ7DKfVwlwoO8AlfqUYyADPQaZX2KTX15Rs9PFP78VvoMNr-TUZzE3dFQ0G9Q17ezZi',
    status: '進行中',
    raised: 1667,
    supporters: 350,
    nextDraw: '2024/09/25',
    industry: '社會福利',
  },
  {
    id: 'stray-animal',
    name: '臺灣流浪動物保護協會',
    englishName: 'Taiwan Stray Animal Protection Association',
    loveCode: '9527',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS3vjwi3kNzPd4ZKUHYzM1HBOl9gUYW21IzQKlfGRdjcyXjP5vrpb5IuKpkeZhc06VlsjfHblmndK3VldaJKgopPfI3Du_6662MFaWiGjNO5Q4U2MF-T39rXHx2GZ6Fi8LqSeLac3NfALeIuIeYFfyBu-wdKcnvNqewjGWkWAAW1RMMRvn9BM3i4fnqUDunT81WFIUVD6zI3y2Yq99b8MTyv-8e7v1AhsB0U2qLbExzRftyFhuyHirHIqhLm6az8XbmQASU8znJgd6',
    status: '進行中',
    raised: 4010,
    supporters: 890,
    nextDraw: '2024/09/25',
    industry: '動物救援',
  },
  {
    id: 'rare-disorders',
    name: '罕見疾病基金會',
    englishName: 'Taiwan Foundation for Rare Disorders',
    loveCode: '999',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARihyA10MEVr00uvBuM1QkMUBfNuo7MCOgpoaaxjfto6FG7N645sdLLocA_WfyEtf6Yrh45eTy-VqonmMETuV485PSzzXjqpBxjgF3aNpWIuc6FT8NTbJtK94xgp8VA9fBB2X-7yJyVW1sy0pjiyHAUu99M4SKtqleycdit-KhdH3tgTs0iFe_31eEZ04ShwuWr4Y9vrICQTAJGQls0HKm18_HEGRALnjSModYMT5XAJX2JbodVFcwb7z-g4AE4ZNxO3OpN_J_G1FC',
    status: '進行中',
    raised: 2667,
    supporters: 620,
    nextDraw: '2024/11/25',
    industry: '醫療援助',
  },
  {
    id: 'child-welfare',
    name: '兒童福利聯盟文教基金會',
    englishName: 'Child Welfare League Foundation',
    loveCode: '168',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdhOi7XAmhFe8OlqSow9e1twmlxXQcx_e9KyNXRBDdM-oLF_CPs6ZwYcK1O_FbfeRqzjvpFJfj-JTdR6F1IY2s82H-jphPAz_NfAporfVOcB5A1p_hnvGzMmaaFRAzAfX14LE_LgOSe6r3sNRMz6jexL3ubshm_h5hXzsYgeIW7z6bTIu3TkVW6LQA0EvHHjUDS9lUvLK3eZVd3XbU5oWQPwUQwUe0dmrULPzQhQ4LUe6wJNL2iaWwCt76daugLxvgcLE9E5RAl_fX',
    status: '已結束',
    raised: 8333,
    supporters: 1500,
    nextDraw: '已於 2024/07/25 截止',
    industry: '兒童福利',
  },
];