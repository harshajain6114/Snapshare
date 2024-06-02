import React, { useState } from 'react';
import UploadPhoto from './components/UploadPhoto';
import DisplayUploadedPhotos from './components/DisplayUploadedPhotos';
import './App.css'; // Ensure you have this file and it's correctly linked

function App() {
  const [uploadedUrl, setUploadedUrl] = useState('');

  return (
    <div className="App">
      <h1>File Upload Example</h1>
      <UploadPhoto setUploadedUrl={setUploadedUrl} />
      <DisplayUploadedPhotos uploadedUrl={uploadedUrl} />
    </div>
  );
}

export default App;



