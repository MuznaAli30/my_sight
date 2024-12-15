import React from "react";
import { FaLightbulb } from "react-icons/fa"; // Personalized Advice Icon
import { MdOutlineSportsHandball } from "react-icons/md"; // Activity-Based Solutions Icon
import { GiMeditation } from "react-icons/gi"; // Holistic Well-Being Icon
import EmotionsBg from "./EmotionsBg";

export default function Emotions() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center mb-10">
        <div className="text-4xl mb-10 max-lg:w-[90%] font-caveat">
          Discover personalized advice, engaging activities,<br></br> & holistic care
          to nurture your mind, body, & soul.
        </div>
        <div className="font-mono text-xl mb-10">Discover Inner Harmony and Peace</div>

        <div className="flex flex-row w-[60%] items-center justify-center max-lg:gap-y-10 gap-10 max-lg:flex-col max-lg:w-[90%] mb-16">
          {/* Card 1 */}
          <div className="bg-[#f8f1f1] rounded-3xl p-6 flex flex-col items-center shadow-lg w-1/3 max-lg:w-[70%] ">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <FaLightbulb className="text-4xl" /> {/* Replace with icon */}
            </div>
            <h3 className="font-serif text-lg mb-4">Personalized Advice</h3>
            <p className="text-sm text-center text-gray-600">
              Based on your emotional input, we provide targeted suggestions to
              improve your mood and overall well-being. Our advice includes
              mindfulness practices, self-care activities, and techniques to
              manage stress, helping you regain balance and peace.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f1f1] rounded-3xl p-6 flex flex-col items-center shadow-lg w-1/3 max-lg:w-[70%]">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <MdOutlineSportsHandball className="fa-solid fa-spa text-4xl" />{" "}
              {/* Replace with icon */}
            </div>
            <h3 className="font-serif text-lg mb-4">
              Activity-Based Solutions
            </h3>
            <p className="text-sm text-center text-gray-600">
              Engage in handpicked activities designed to match your current
              emotional state. From light physical exercises to creative
              hobbies, these activities boost focus, reduce anxiety, and
              encourage a healthier mental outlook.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f1f1] rounded-3xl p-6 flex flex-col items-center shadow-lg w-1/3 max-lg:w-[70%]">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <GiMeditation className="text-4xl" /> {/* Replace with icon */}
            </div>
            <h3 className="font-serif text-lg mb-4">Holistic Well-Being</h3>
            <p className="text-sm text-center text-gray-600">
              Our approach focuses on mind, body, and soul. We offer suggestions
              that nurture self-awareness and promote emotional healing,
              ensuring you achieve greater self-compassion, inner peace, and
              overall positivity.
            </p>
          </div>
        </div>
        <div>
          <button className="font-mono h-16 mt-5 text-black border-black w-96 p-4  bg-[#f8f1f1] hover:bg-[#ddcccc] hover:duration-300 hover:text-black border-2 hover:border-black">
            View Classes And Services
          </button>
        </div>
      </div>
      <EmotionsBg/>
    </>
  );
}
