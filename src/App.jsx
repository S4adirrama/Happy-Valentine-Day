import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import heartImg from "./assets/heart.png"; 

const names = [
  "Aikhan", "Altair", "Arystan", "Akniet", "Aruzhan", "Azhar", "Aisultan", "Nurzhan", "Nursultan"
];


function App() {
  const [selectedName, setSelectedName] = useState(names[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const launchConfetti = () => {
    let duration = 3 * 1000;
    let end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: Math.random() * 50 + 50,
        spread: Math.random() * 180,
        startVelocity: 30,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() * 0.5 }
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="valentine-container">
      <div className="hearts hearts-left">
        {[...Array(10)].map((_, i) => (
          <img key={i} src={heartImg} alt="heart" className={`heart heart-${i}`} />
        ))}
      </div>

      <div className="card-wrapper">
        <div className={`card ${animate ? "special-animation" : ""}`}>
          <h1 style={{ fontFamily: "Comic Sans MS, cursive", color: "black" }}>
            Happy Valentine's Day, {selectedName}! 💖
          </h1>
          <div className="tenor-gif-embed" data-postid="15731672189433759952" data-share-method="host" data-aspect-ratio="1" data-width="100%">
            <a href="https://tenor.com/view/emoji-valentines-valentines-day-kulfy-telugu-%E0%B0%8E%E0%B0%AE%E0%B1%8B%E0%B0%9C%E0%B0%BF-%E0%B0%B5%E0%B0%BE%E0%B0%B2%E0%B1%86%E0%B0%82%E0%B0%9F%E0%B1%88%E0%B0%A8%E0%B1%8D%E0%B0%B8%E0%B1%8D-gif-15731672189433759952">Emoji Valentines.Gif GIF</a>
          </div>

          <select className="name-dropdown" onChange={(e) => setSelectedName(e.target.value)}>
            {names.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>

          <button className="special-btn" onClick={() => setAnimate(!animate)}>
            I am glad to have you !!!
          </button>

          <button className="confetti-btn" onClick={launchConfetti}>
            🎉 Confettishki! Confettishki! Confettishki! 🎉
          </button>
        </div>
      </div>

      <div className="hearts hearts-right">
        {[...Array(10)].map((_, i) => (
          <img key={i} src={heartImg} alt="heart" className={`heart heart-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
