import './App.css';
import React from 'react';
import BookingPage from './pages/booking';
import MainPage from './pages/main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

