import { useState } from "react";
import { motion } from "motion/react";

const NEW_DOMAIN = "mspbasketball.com";
const NEW_DOMAIN_URL = `https://${NEW_DOMAIN}`;

function TrollFace() {
  return (
    <svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 38 C265 38,338 72,355 158 C368 222,362 282,344 332 C320 390,284 428,200 436 C116 428,80 390,56 332 C38 282,32 222,45 158 C62 72,135 38,200 38Z" fill="#f2f2f2" stroke="#111" strokeWidth="6"/>
      <path d="M148 100 Q200 88 252 100" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M118 148 Q148 132 180 143" stroke="#111" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <path d="M220 136 Q255 118 285 133" stroke="#111" strokeWidth="9" fill="none" strokeLinecap="round"/>
      <ellipse cx="150" cy="175" rx="27" ry="23" fill="white" stroke="#111" strokeWidth="5"/>
      <ellipse cx="156" cy="175" rx="16" ry="15" fill="#111"/>
      <circle cx="162" cy="170" r="5" fill="white"/>
      <ellipse cx="250" cy="173" rx="27" ry="23" fill="white" stroke="#111" strokeWidth="5"/>
      <ellipse cx="244" cy="173" rx="16" ry="15" fill="#111"/>
      <circle cx="239" cy="168" r="5" fill="white"/>
      <path d="M190 218 C183 244,172 263,175 278 C178 295,222 295,225 278 C228 263,217 244,210 218" fill="#ebebeb" stroke="#111" strokeWidth="5"/>
      <ellipse cx="183" cy="283" rx="15" ry="11" fill="#999" stroke="#111" strokeWidth="3"/>
      <ellipse cx="217" cy="283" rx="15" ry="11" fill="#999" stroke="#111" strokeWidth="3"/>
      <path d="M75 318 Q200 430 325 318 L325 352 Q200 465 75 352 Z" fill="white" stroke="#111" strokeWidth="6"/>
      <path d="M75 318 Q200 372 325 318" stroke="#111" strokeWidth="5" fill="none"/>
      {[105,138,169,200,231,262,293].map((x, i) => (
        <line key={i} x1={x} y1={322} x2={x - 1} y2={348} stroke="#111" strokeWidth="4"/>
      ))}
      <path d="M158 408 Q200 424 242 408" stroke="#111" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M62 258 C72 274,76 290,73 302" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M338 258 C328 274,324 290,327 302" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export default function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="size-full flex items-center justify-center bg-white relative overflow-hidden"
      style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive" }}
    >
      {/* Troll face background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vmin] h-[80vmin] max-w-[600px] opacity-[0.06]">
          <TrollFace />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-8 max-w-md"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Main message */}
        <p
          className="text-xl md:text-2xl font-bold text-black mb-6 leading-relaxed"
        >
          Hi gezz, kata pak ketu website pindah sini yak
        </p>

        {/* Domain link */}
        <a
          href={NEW_DOMAIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ textDecoration: "none" }}
        >
          <motion.div
            animate={hovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block px-6 py-3 mb-6"
            style={{
              fontFamily: "'Bangers', 'Impact', sans-serif",
              fontSize: "clamp(1.8rem, 7vw, 3rem)",
              letterSpacing: "0.04em",
              color: hovered ? "white" : "black",
              background: hovered ? "#111" : "white",
              border: "4px solid #111",
              boxShadow: hovered ? "3px 3px 0 #555" : "5px 5px 0 #111",
              transition: "color 0.15s, background 0.15s, box-shadow 0.15s",
            }}
          >
            {NEW_DOMAIN}
          </motion.div>
        </a>

        {/* Reassurance */}
        <p className="text-sm text-gray-500 font-bold">
          ✓ ini asli bukan phising
        </p>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@700&display=swap');
      `}</style>
    </div>
  );
}
