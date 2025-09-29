import { useEffect, useRef } from "react";

function JoinSession({ userName }) {
  const jitsiContainerRef = useRef(null);

useEffect(() => {
  const storedLink = localStorage.getItem("meetingLink");
  const defaultRoom = "Uf7C6WwiVAXUWvI"; // fallback room name
  const roomName = storedLink
    ? storedLink.split("/").pop()
    : defaultRoom;

  const domain = "meet.jit.si";
  const displayName = userName || "Anonymous User";

  const api = new window.JitsiMeetExternalAPI(domain, {
    roomName,
    parentNode: jitsiContainerRef.current,
    width: "100%",
    height: "100%",
    userInfo: { displayName },
    configOverwrite: { 
      startAudioOnly: true,
      startWithVideoMuted: true,
    },
    interfaceConfigOverwrite: {
      TOOLBAR_BUTTONS: ["microphone", "hangup", "chat"],
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
