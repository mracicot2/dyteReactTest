
import React, { useState,Component } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Network from "./pages/network";
import {RemoteSupport,RemoteSupportOverlay} from "./pages/remoteSupport"
import './index.css'

export default function App(){
  const [remoteSupportVisible,setRemoteSupportVisible] = useState(false);
  const [connected,setConnected] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="network" element={<Network />} />
            <Route path="remoteSupport" element={<RemoteSupport setConnected={()=>setConnected(true)} setRemoteSupportVisible={setRemoteSupportVisible}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <RemoteSupportOverlay remoteSupportVisible={remoteSupportVisible} connected={connected}/>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);