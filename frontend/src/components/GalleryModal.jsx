import React, { useEffect } from 'react';
import { X, ShieldCheck, ExternalLink, ZoomIn } from 'lucide-react';

export default function GalleryModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close image">
          <X size={22} />
        </button>

        <div className="gallery-modal-img-wrap">
          <img src={item.image} alt={item.title} className="gallery-modal-img" />
        </div>

        <div className="gallery-modal-info">
          <div className="gallery-modal-header">
            <span className="badge-pill">{item.category.toUpperCase()}</span>
            <h3>{item.title}</h3>
            <p className="gallery-sub">{item.subtitle}</p>
          </div>

          <p className="gallery-modal-desc">{item.description}</p>

          <div className="gallery-source-tag">
            <ShieldCheck size={16} />
            <span>Verified Source / Attribution: <strong>{item.source}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
