import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/love.mp3" type="audio/mpeg" />
      </audio>

      <button
        className="music-btn"
        onClick={() => setPlaying(!playing)}
      >
        {playing ? "⏸ Pause Music" : "🎵 Play Music"}
      </button>
    </>
  );
}