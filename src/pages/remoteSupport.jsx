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
          authToken: process.env.REACT_APP_AUTHTOKEN,
          roomName: process.env.REACT_APP_ROOMNAME,
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
