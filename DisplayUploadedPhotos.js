import React, { useState } from 'react';
import { create as IPFS } from 'ipfs-http-client';
import './UploadPhoto.css';

const UploadPhoto = ({ setUploadedUrl }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const ipfs = IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    setUploading(true);
    const fileBuffer = await file.arrayBuffer();
    const fileData = new Uint8Array(fileBuffer);

    try {
      const result = await ipfs.add(fileData);
      console.log('IPFS result:', result);
      const imageUrl = `https://ipfs.infura.io/ipfs/${result.path}`;
      setUploadedUrl(imageUrl);
    } catch (error) {
      console.error('IPFS error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadPhoto;
