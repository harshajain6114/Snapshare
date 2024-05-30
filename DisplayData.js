import React, { useState } from 'react';
import './DisplayData.css';
import Lightbox from './Lightbox';

function DisplayData({ data, deleteData }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="display-data">
      <div className="image-gallery">
        {data.map((item, index) => (
          <div key={index} className="image-item">
            <img src={item} alt={`Upload ${index}`} onClick={() => openLightbox(item)} />
            <button onClick={() => deleteData(index)}>Delete</button>
          </div>
        ))}
      </div>
      {lightboxImage && <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />}
    </div>
  );
}

export default DisplayData;



