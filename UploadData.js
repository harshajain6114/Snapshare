import React, { useState } from 'react';
import './UploadData.css';

function UploadData({ addData }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      addData(reader.result);
      setFile(null);
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Only image files are accepted');
    }
  };

  return (
    <div className="upload-data">
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput">Choose File</label>
        {file && <div className="file-name">{file.name}</div>}
        <button type="submit">Upload</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UploadData;





