import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './Home/chatPage/chatPage'; 
import Home from './Home/HomePage/home' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} /> 
        <Route path="/chatPage" element={<ChatPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
