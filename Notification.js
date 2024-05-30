import React from 'react';
import './Notification.css';

function Notification({ message }) {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
}

export default Notification;

