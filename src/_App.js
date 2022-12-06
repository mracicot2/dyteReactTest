import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDyteClient } from '@dytesdk/react-web-core';

// function App() {

class App extends Component {
  render() {
    console.log('App component')
    const [client, initClient] = useDyteClient();

    console.log('App render()')

    React.useEffect(() => {
      console.log('React.useEffect')
      const load = async () => {
        initClient({
          authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI3MjEyLWUyZjAtNDEyMi1hNDQzLTUyMGNiOTAxOTdhOSIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2Njk3NDc3NDYsImV4cCI6MTY3ODM4Nzc0Nn0.tst_DpdjzB6KtsspYsGJ_hPy3BHeWode653G1qnj6WCJqU6XvfmYj1ekJYP-ko_HQLL67Bggc7XCXQcin4ucfbqwIi8FSnSEtt9BCRNMCdHZKfk_0vm_0N3th3LDX542dqB6ZljpIucI7QmX9JjAo1UfVAarq18WqHbPy4l5fuBC2jpDaDrEfJhMgRGeMHBnqxjShTYSd-VGEFmYchtrojQP7KdYZsQBuTVNhy1YI567RIArVsh8__50WuvVOqxmn1FlZJf69w-jl7xDbRjlig2UoyozZkNFzv-aghhBD2lrWc2TzIyeVxfW_vhFq_agQDj8aA2_UhgGHkra8rKMKg',
          roomName: 'mlwzun-ytauij',
          defaults: {
            audio: false,
            video: false,
          },
        });
      };
      console.log('calling load()')
      load();
      console.log('back from load()')
    }, []);    
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 2kkkasdasdsad <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
