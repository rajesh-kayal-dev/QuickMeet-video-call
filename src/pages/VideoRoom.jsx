import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const VideoRoom = () => {
    // https://www.zegocloud.com/docs/uikit/callkit-web/quick-start/using-npm-package-manager
    const {roomId} = useParams();

    let myMeeting = async (element) =>{
        const appID = 384660371;
        const serverSecret = "16fa7fbbb9f0a3ad3fa5d92decc6c112";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(),`${roomId}`);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Personal link',
                url:`http://localhost:5173/room/${roomId}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, 
            },
          });
    }
  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom
