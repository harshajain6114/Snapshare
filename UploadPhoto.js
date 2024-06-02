

// src/components/UploadPhoto.js
import React, { useState } from 'react';
import './UploadPhoto.css';

const UploadPhoto = ({ setUploadedUrl }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;

    const uploadedUrl = URL.createObjectURL(file);
    setUploadedUrl(uploadedUrl);
  };

  return (
    <div className="upload-container">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPhoto;
