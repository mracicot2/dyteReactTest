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

function MyMeeting() 
{
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
          <div style={{ height: '50px', width: '100%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignContent: 'center', alignItems: 'center' }}>
              This is the pendant v3 remote support page
          </div>
          <div style={{ height: '100%', width: '80%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignContent: 'center', alignItems: 'center' }}>
              <DyteMeeting mode="fill" meeting={meeting} style={{ height: '480px', padding: '10px', display: 'flex', flexDirection: 'column' }} />
          </div>
      </div>
    );
}

const RemoteSupport = (props) => {
    console.log("RemoteSupport()")
    const [isOnline, setIsOnline] = useState(null); 
    const [meeting, initMeeting] = useDyteClient();
    useEffect(() => {
      console.log("RemoteSupport.useEffect()")
      if (!meeting)
      { 
        console.log("RemoteSupport.useEffect -> !meeting")
        initMeeting({
          authToken: 'token',
          roomName: 'roomname',
          defaults: {
            audio: false,
            video: false,
          },
        });
      } 
    },[meeting]);

    return (
        <DyteProvider value={meeting}>
          <MyMeeting />
        </DyteProvider>
      );
}

export default RemoteSupport;
