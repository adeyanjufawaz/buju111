import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const data = [
  {
    texts:
      "You are my priority. Your happiness, your comfort, your dreams—I’ll always work to protect and support them because you mean the world to me.",
  },

  {
    texts: `Every time I think of you, I can’t help but smile. You’re the best part of my life, and I’m so lucky to have you.`,
  },

  {
    texts: `Every time I see you, it feels like the first time all over again. My heart skips a beat because I’m so in love with you.

`,
  },

  {
    texts:
      "You are so much stronger than you think. Even in moments of doubt, know that I see your potential and believe in your ability to overcome anything.",
  },

  {
    texts:
      "You deserve to feel loved, safe, and valued every day. I promise to always do my best to give you all that and more.",
  },

  {
    texts: `With every “I love you,” I mean it more than the last. My love for you grows endlessly`,
  },
];

export default function Slider() {
  const [cur, setCur] = useState(0);
  const increment = () => {
    if (cur < data.length - 1) {
      setCur((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (cur > 0) {
      setCur((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-black text-center flex flex-col justify-center items-center min-h-[100vh]">
      <div
        className={`flex flex-col p-4 text-white font-bold text-2xl justify-center items-center w-full h-20 img-${cur} `}
      >
        <Typewriter
          options={{
            strings: [data[cur].texts],
            autoStart: true,
          }}
        />
        <div className="flex justify-center items-center text-black gap-10 mt-10">
          <button
            className={`${
              cur < 1 ? "bg-grey-500 opacity-15 scale-50" : ""
            } p-2 flex justify-center items-center bg-gray-50 rounded-full h-14 w-14`}
            onClick={decrement}
          >
            {cur > 0 ? "<" : ""}
          </button>

          <button
            className={`${
              cur == 5 ? "bg-grey-500 opacity-15 scale-50" : ""
            } p-2 flex justify-center items-center bg-gray-50 rounded-full h-14 w-14`}
            onClick={increment}
          >
            {cur !== 5 ? ">" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
