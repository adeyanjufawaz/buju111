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
    texts:
      "You’re my first thought when I wake up, my last thought before I sleep, and every perfect moment in between.",
  },
  {
    texts:
      "Never feel like you have to hide your feelings from me. Your emotions matter, and I’ll always be here to listen and understand, no matter what.",
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
    texts: `You’re my home, my safe space, and the greatest love I’ve ever known. Life with you is my favorite adventure.`,
  },
  {
    texts:
      "You deserve to feel loved, safe, and valued every day. I promise to always do my best to give you all that and more.",
  },
  {
    texts: `With every “I love you,” I mean it more than the last. My love for you grows endlessly`,
  },
  {
    texts:
      "No matter how many obstacles come our way, my commitment to you will never waver. Together, we can handle anything life throws at us.",
  },
  {
    texts: `They say love makes people glow, and you must be a walking star because you’re the brightest light in my life.`,
  },
  {
    texts: `Your laughter is music to my ears, and your love is the melody my heart dances to every day.

`,
  },
  {
    texts: `When you’re tired or unsure, remember that it’s okay to rest. I’ll be here to encourage you, love you, and remind you that you’re never alone in this journey.

`,
  },
  {
    texts: `You’re my sunshine on cloudy days, my calm in the storm, and the reason my heart beats a little faster every time I see you.

`,
  },
  {
    texts:
      "No words could ever capture how much you mean to me, but I’ll spend my entire life showing you.",
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
            className="p-2 flex justify-center items-center bg-gray-50 rounded-full h-14 w-14"
            onClick={decrement}
          >
            {"<"}
          </button>
          <button
            className="p-2 flex justify-center items-center bg-gray-50 rounded-full h-14 w-14"
            onClick={increment}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
