
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import BindPool from './pages/BindPool';
import Wallet from './pages/Wallet';
import Certificate from './pages/Certificate';
import WinningResult from './pages/WinningResult';
import TransactionDetails from './pages/TransactionDetails';
import TransferNft from './pages/TransferNft';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Onboarding /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="/bind-pool" element={<PageWrapper><BindPool /></PageWrapper>} />
        <Route path="/wallet" element={<PageWrapper><Wallet /></PageWrapper>} />
        <Route path="/certificate/:nftId" element={<PageWrapper><Certificate /></PageWrapper>} />
        <Route path="/winning-result" element={<PageWrapper><WinningResult /></PageWrapper>} />
        <Route path="/transaction-details" element={<PageWrapper><TransactionDetails /></PageWrapper>} />
        <Route path="/transfer-nft/:nftId" element={<PageWrapper><TransferNft /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default App;
