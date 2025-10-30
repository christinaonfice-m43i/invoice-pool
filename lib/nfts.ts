export interface Nft {
  id: string;
  name: string;
  donationRatio: number;
  invoiceCount: number;
  issueDate: string;
  image: string;
  status: string;
  transferable: boolean;
}

export const nfts: Nft[] = [
  {
    id: '02345',
    name: '陽光基金會',
    donationRatio: 80,
    invoiceCount: 15,
    issueDate: '2024/09/25',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUXppAg52SvdYFotKY4H8GuMnb-m0BmONi5G9X2Ln3EDFek7e-TmGcijPVejHeHlgOqg505LYxCAjfRv4ZiBDl6MrGiTiRgt6kj_q0GBFQm_HqTMCj3JcSzFfxg9lreMfxhNpggDYPaTesRFuZ4pitFHAVqxE7K-LVfp-uz1o73Cdouk1ap5XjIO27oAVoSHwLJn8BuU3pZbPAJwTYQcqnHlu31CE1Xg6ONBmRU_5xhjy6P37fBVm4V8j41waW9l1sTFD81KEwcmkf',
    status: '已上鏈 ✅',
    transferable: true,
  },
  {
    id: '00452',
    name: '動物救援基金會',
    donationRatio: 50,
    invoiceCount: 5,
    issueDate: '2025/11/25',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdGjuWDV1dl6ZGNHPkXQ45b4aSrxpNcRpuy_eFMWImbNm85HGN-fTIS1-cLVTlRIZVuDKx4n73Qi-eW2gMv011Yu7c-oVmqN6MuH8bYeKxzhx1L_vdOb_KdKg0GGtD5uiiYikwmzVHVSQMmHBJkG3QgWIAARriBQdwroTXlKHCqYZX_Ncy3N0Woszzgq4Hi-cksBToIUK4xpeKafCEhx4HSREXoN8Rabh3PEMWAs2vPSwJoTQ9RzI9-w7ApWR3pbhARYPByW9F3Ebw',
    status: '已中獎並捐出',
    transferable: false,
  },
  {
    id: '00319',
    name: '偏鄉教育基金會',
    donationRatio: 25,
    invoiceCount: 10,
    issueDate: '2025/09/25',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdhOi7XAmhFe8OlqSow9e1twmlxXQcx_e9KyNXRBDdM-oLF_CPs6ZwYcK1O_FbfeRqzjvpFJfj-JTdR6F1IY2s82H-jphPAz_NfAporfVOcB5A1p_hnvGzMmaaFRAzAfX14LE_LgOSe6r3sNRMz6jexL3ubshm_h5hXzsYgeIW7z6bTIu3TkVW6LQA0EvHHjUDS9lUvLK3eZVd3XbU5oWQPwUQwUe0dmrULPzQhQ4LUe6wJNL2iaWwCt76daugLxvgcLE9E5RAl_fX',
    status: '已上鏈 ✅',
    transferable: true,
  },
];