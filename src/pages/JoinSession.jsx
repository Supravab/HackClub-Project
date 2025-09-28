import { useEffect, useRef } from "react";

function JoinSession({ userName }) {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    const storedLink = localStorage.getItem("meetingLink");
    if (!storedLink) return;

    const urlParts = storedLink.split("/");
    const roomName = urlParts[urlParts.length - 1];
    const domain = "meet.jit.si";

    const displayName = userName || "Anonymous User"; // default name

    const api = new window.JitsiMeetExternalAPI(domain, {
      roomName,
      parentNode: jitsiContainerRef.current,
      width: "100%",
      height: "100%",
      userInfo: {
        displayName
      },
      configOverwrite: { 
        startAudioOnly: true,      // mic-only by default
        startWithVideoMuted: true,
      },
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: ["microphone", "hangup", "chat"], // minimal toolbar
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_BRAND_WATERMARK: false,
        SHOW_POWERED_BY: false
      },
    });

    return () => api.dispose();
  }, [userName]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div ref={jitsiContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default JoinSession;
