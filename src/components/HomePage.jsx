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
              ADEBOLA MII 🤍`,
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
