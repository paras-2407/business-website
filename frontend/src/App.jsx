import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DholeraPage from './pages/DholeraPage';
import LothalPage from './pages/LothalPage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import GalleryPage from './pages/GalleryPage';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

export default function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dholera" element={<DholeraPage />} />
          <Route path="/lothal" element={<LothalPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
