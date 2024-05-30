import React from 'react';
import './Lightbox.css';

function Lightbox({ image, closeLightbox }) {
  return (
    <div className="lightbox" onClick={closeLightbox}>
      <img src={image} alt="Large view" />
    </div>
  );
}

export default Lightbox;

