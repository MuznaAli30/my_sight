import React from "react";
import { RiPsychotherapyFill } from "react-icons/ri";
import { MdEmojiEmotions } from "react-icons/md";

export default function Emotions() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="font-serif text-xl mb-10 max-lg:w-[90%]">
          Learn how recognizing your feelings can create a more balanced,
          peaceful life.<br></br>Discover how identifying your feelings can
          guide you towards better mental health.
        </div>
        <div className="font-serif text-xl mb-10">these are .............</div>

        <div className="flex flex-row w-[60%] items-center justify-center max-lg:gap-y-10 gap-10 max-lg:flex-col max-lg:w-[90%]">
          {/* Card 1 */}
          <div className="bg-[#f8f1f1] rounded-3xl p-6 flex flex-col items-center shadow-lg w-1/3 max-lg:w-[70%] ">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <RiPsychotherapyFill className="text-4xl"/> {/* Replace with icon */}
            </div>
            <h3 className="font-serif text-lg mb-4">Holistic</h3>
            <p className="text-sm text-center text-gray-600">
              Involving an understanding of how the mind, body, and life spirit
              of a person are inseparable. These programs promote intentionality
              to our self-care...
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f1f1] rounded-3xl p-6 flex flex-col items-center shadow-lg w-1/3 max-lg:w-[70%]">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <i className="fa-solid fa-spa text-4xl"></i> {/* Replace with icon */}
            </div>
            <h3 className="font-serif text-lg mb-4">Holistic</h3>
            <p className="text-sm text-center text-gray-600">
              Involving an understanding of how the mind, body, and life spirit
              of a person are inseparable. These programs promote intentionality
              to our self-care...
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f1f1] rounded-3xl p-6 flex flex-col items-center shadow-lg w-1/3 max-lg:w-[70%]">
            <div className="bg-[#ffedec] rounded-full p-5 mb-4">
              {/* Icon or Image here */}
              <MdEmojiEmotions className="text-4xl"/> {/* Replace with icon */}
            </div>
            <h3 className="font-serif text-lg mb-4">Holistic</h3>
            <p className="text-sm text-center text-gray-600">
              Involving an understanding of how the mind, body, and life spirit
              of a person are inseparable. These programs promote intentionality
              to our self-care...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
