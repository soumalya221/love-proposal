import { useState } from "react";

import "./App.css";

import Hero from "./components/Hero";
import FloatingHearts from "./components/FloatingHearts";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Proposal from "./components/Proposal";
import MusicPlayer from "./components/MusicPlayer";
import RosePetals from "./components/RosePetals";
import Stars from "./components/Stars";
function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="container">
      {/* Background Floating Hearts */}
      <FloatingHearts />

      {/* Page 1 - Welcome */}
      {page === 0 && (
        <Hero onStart={() => setPage(1)} />
      )}

      {/* Page 2 - Love Letter */}
      {page === 1 && (
        <LoveLetter onNext={() => setPage(2)} />
      )}

      {/* Page 3 - Gallery */}
      {page === 2 && (
        <Gallery onNext={() => setPage(3)} />
      )}

      {/* Page 4 - Timeline */}
      {page === 3 && (
        <Timeline onNext={() => setPage(4)} />
      )}
      {page === 4 && (
    <Proposal />
)}
<div className="container">

    <Stars />

    <FloatingHearts />

    <RosePetals />

    <MusicPlayer />

    {/* Pages */}

</div>
<div className="container">

    <FloatingHearts />

    <MusicPlayer />

    {/* Remaining Pages */}
<div className="container">

    <FloatingHearts />
    <RosePetals />
    <MusicPlayer />

    {/* Pages */}

</div>
</div>
      {/* Temporary Last Page */}
      {page === 4 && (
        <div className="timeline-page">
          <h1>❤️ Almost There ❤️</h1>

          <p
            style={{
              color: "white",
              fontSize: "24px",
              marginTop: "20px",
            }}
          >
            Next comes the most important question...
          </p>

          <button
            className="next-btn"
            onClick={() => alert("Proposal Page Coming Next ❤️")}
          >
            Continue 💖
          </button>
        </div>
      )}
    </div>
  );
}

export default App;