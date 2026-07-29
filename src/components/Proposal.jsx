import { useState } from "react";
import Confetti from "canvas-confetti";
import Celebration from "./Celebration";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);

  const [position, setPosition] = useState({
    top: "0px",
    left: "0px",
  });

  const [message, setMessage] = useState("");

  const messages = [
    "😂 Nice Try!",
    "😜 You almost got me!",
    "❤️ Think Again!",
    "🥺 Please don't...",
    "🤣 Nope!",
    "💖 Maybe YES?"
  ];

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    setPosition({
      left: `${x}px`,
      top: `${y}px`,
    });

    setMessage(
      messages[Math.floor(Math.random() * messages.length)]
    );
  };

  const handleYes = () => {
    Confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.6 },
    });

    setAccepted(true);
  };

  if (accepted) {
    return <Celebration />;
  }

  return (
    <div className="proposal-page">
      <h1>Will You Be Mine Forever? ❤️</h1>

      <p className="proposal-text">
        You make every day brighter. Will you make my life complete?
      </p>

      <div className="button-area">
        <button
          className="yes-btn"
          onClick={handleYes}
        >
          YES ❤️
        </button>

        <button
          className="no-btn"
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          onClick={moveButton}
          style={{
            position: "absolute",
            left: position.left,
            top: position.top,
          }}
        >
          NO 😅
        </button>
      </div>

      <h2 className="funny-message">
        {message}
      </h2>
    </div>
  );
}