import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './Home/chatPage/chatPage'; 
import Home from './Home/HomePage/home' 
import FacialRecognization from './Home/HomePage/FacialRecognization';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} /> 
        <Route path="/chatPage" element={<ChatPage />} /> 
        <Route path="/camera" element={<FacialRecognization />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
