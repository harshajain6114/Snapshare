import React, { useState, useEffect } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import UploadData from './UploadData';
import Notification from './Notification';
import SearchBar from './SearchBar';

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [notification, setNotification] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const addData = (newData) => {
    setData([...data, newData]);
    setNotification('Image uploaded successfully!');
    setTimeout(() => setNotification(''), 3000);
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setNotification('Image deleted successfully!');
    setTimeout(() => setNotification(''), 3000);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className="container">
        <h1>SnapShare: Your Ultimate Image Gallery</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UploadData addData={addData} />
        <DisplayData data={filteredData} deleteData={deleteData} />
      </div>
      {notification && <Notification message={notification} />}
    </div>
  );
}

export default App;







