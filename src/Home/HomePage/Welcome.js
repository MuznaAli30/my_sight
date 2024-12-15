import React from "react";
import Emotions from "./Emotions";
import wlcm from "../../../src/Assests/welcome.webp"

export default function Welcome() {
  return (
    <>
      <div className=" text-white flex flex-row gap-16 items-center justify-center my-44 max-lg:flex-col max-sm:justify-center  max-sm:overflow-x-hidden">
        <div className="w-[45%] max-sm:w-[90%]">
          <div className="mt-5 text-black text-8xl font-caveat">welcome</div>
          <div className="font-mono mt-5 text-black">
            In today’s fast-paced world, we often overlook the power of our
            emotions. Whether it’s stress, happiness, anxiety, or excitement,
            our moods play a significant role in shaping our daily experiences.
            At MoodMaster, we believe in the power of self-awareness. By
            recognizing and understanding our moods, we can take control of our
            emotions and foster better mental and emotional health.
          </div>
          <div className="font-mono mt-5 text-black">
            In today’s fast-paced world, we often overlook the power of our
            emotions. Whether it’s stress, happiness, anxiety, or excitement,
            our moods play a significant role in shaping our daily experiences.
            At MoodMaster, we believe in the power of self-awareness. By
            recognizing and understanding our moods, we can take control of our
            emotions and foster better mental and emotional health.
          </div>  
          <div>
            <button className="font-mono h-16 mt-5 text-black border-black w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center max-sm:w-[90%]">
          <div className="flex flex-col font-mono">
            <div>
              <img
                className="h-96 "
                src={wlcm}
              />
            </div>
          </div>
        </div>
      </div>
      <Emotions/>
    </>
  );
}
