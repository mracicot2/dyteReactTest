import React, { useEffect, useState } from 'react';
import { useDyteClient, DyteClient, DyteProvider, useDyteSelector, useDyteMeeting } from '@dytesdk/react-web-core';
import {
  DyteCameraToggle,
  DyteLeaveButton,
  DyteAudioVisualizer,
  DyteLogo,
  DyteMicToggle,
  DyteParticipantsAudio,
  DyteDialogManager,
  DyteSetupScreen,
  DyteChat,
  DyteGrid,
  DyteMeeting,
  DyteChatToggle,
  provideDyteDesignSystem,
} from '@dytesdk/react-ui-kit';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function MyMeeting() {
  const { meeting } = useDyteMeeting();

  provideDyteDesignSystem(document.body, {
    // sets light background colors
    theme: 'light',
    colors: {
      danger: '#ffac00',
      brand: {
        300: '#00FFE1',
        400: '#00FFFF',
        500: '#00E1D4',
        600: '#007B74',
        700: '#00655F',
      },
      text: '#071428',
      'text-on-brand': '#ffffff',
      'video-bg': '#E5E7EB',
    },
    borderRadius: 'extra-rounded',
  });

  return (
    <div>
      <div style={{ height: '50px', width: '100%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
        This is the pendant v3 remote support page
      </div>
      <div style={{ height: '100%', width: '80%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
        <DyteMeeting mode="fill" meeting={meeting} style={{ height: '480px', padding: '10px', display: 'flex', flexDirection: 'column' }} />
      </div>
    </div>
  );
}

const RemoteSupportOverlay = (props) => {
  const [meeting, initMeeting] = useDyteClient();

  // console.log('RemoteSupportOverlay:remoteSupportVisible=', props.remoteSupportVisible)
  console.log(props.connected)
  useEffect(() => {
    if (props.connected)
    {
      console.log("RemoteSupport.useEffect()")
      if (!meeting) {
        console.log("RemoteSupport.useEffect -> !meeting")
        initMeeting({
          authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDI3MjEyLWUyZjAtNDEyMi1hNDQzLTUyMGNiOTAxOTdhOSIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2Njk3NDc3NDYsImV4cCI6MTY3ODM4Nzc0Nn0.tst_DpdjzB6KtsspYsGJ_hPy3BHeWode653G1qnj6WCJqU6XvfmYj1ekJYP-ko_HQLL67Bggc7XCXQcin4ucfbqwIi8FSnSEtt9BCRNMCdHZKfk_0vm_0N3th3LDX542dqB6ZljpIucI7QmX9JjAo1UfVAarq18WqHbPy4l5fuBC2jpDaDrEfJhMgRGeMHBnqxjShTYSd-VGEFmYchtrojQP7KdYZsQBuTVNhy1YI567RIArVsh8__50WuvVOqxmn1FlZJf69w-jl7xDbRjlig2UoyozZkNFzv-aghhBD2lrWc2TzIyeVxfW_vhFq_agQDj8aA2_UhgGHkra8rKMKg',
          roomName: 'mlwzun-ytauij',
          defaults: {
            audio: false,
            video: false,
          },
        });
      }
    }
  }, [props.connected]);
  return (
    <div id="allo" style={{ visibility: (props.remoteSupportVisible) ? 'visible' : 'hidden', position: 'absolute', width: '50%', height: '100%', top: '100px' }}>
      <DyteProvider value={meeting}>
        <p>Allo this is abc</p>
        <MyMeeting />
      </DyteProvider>
    </div>
  );

  // return  (
  //   <div id="allo" style={{visibility:'visible', position:'absolute', width:'50%', height: '100%', top:'100px'}}>
  //     <DyteProvider value={meeting}>
  //       <MyMeeting />
  //     </DyteProvider>
  //   </div>
  // );
}


const RemoteSupport = (props) => {
  useEffect(() => {
    if (props.setRemoteSupportVisible) {
      props.setRemoteSupportVisible(true);
      props.setConnected();
    }
    return () => {
      // Anything in here is fired on component unmount.
      props.setRemoteSupportVisible(false);
    }
  }, [])

}

export {
  RemoteSupport,
  RemoteSupportOverlay
}
