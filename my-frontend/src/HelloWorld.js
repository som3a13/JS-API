// src/HelloWorld.js
import React, { useState } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await axios.get('https://js-api-production.up.railway.app/');
      setMessage(response.data);
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Hello World App</h1>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>Message: {message}</p>
    </div>
  );
}

export default HelloWorld;
