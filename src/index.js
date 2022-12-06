
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Network from "./pages/network";
import RemoteSupport from "./pages/remoteSupport"
import './index.css'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="network" element={<Network />} />
          <Route path="remoteSupport" element={<RemoteSupport zozo={1234}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);