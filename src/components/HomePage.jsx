import React from "react";
import Typewriter from "typewriter-effect";

export default function HomePage({ click }) {
  return (
    <div className="homepage flex flex-col gap-10 p-6 justify-center items-center">
      <div className="text-white text-xl font-bold">
        <Typewriter
          options={{
            strings: [
              `Happy Birthday, my love! Every moment with you is a cherished memory, and today, I celebrate the incredible person you are. Your kindness, beauty, and unwavering support make my world brighter. I am so grateful to have you by my side. May this year bring you as much happiness as you bring into my life. Here's to many more birthdays together, creating memories that will last a lifetime.
              I love you endlessly.
              ADUNNI MII 🤍`,
                
              `I hope this year brings you as much happiness as you’ve brought into my life—because if anyone deserves endless joy, it’s you. I promise to stand by your side through every high and low, to support your dreams, and to love you with all that I am, today and always.`,
            ],
            autoStart: true,
          }}
        />
      </div>
      <div>
        <button
          className="py-3 px-7 bg-blue-950 text-white min-w-48 mb-20 md:mb-8  rounded-full"
          onClick={click}
        >
          Open
        </button>
      </div>
    </div>
  );
}
