import React from "react";
import img1 from "../../../src/Assests/mindImg1.webp";
import img2 from "../../../src/Assests/mindImg2.webp";
import img3 from "../../../src/Assests/mindImg3.webp";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function MindFullness() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>h1</div>
        <div className="font-caveat">h2</div>
        <div>h3</div>

        <div className="flex flex-row items-center justify-center mt-16 gap-14 max-lg:flex-col max-lg:w-full">
          <div className="flex flex-col items-center justify-center ">
            <img className="w-56 h-40 rounded-md" src={img1} />
            <div className="font-mono mt-5">Stress Relief for Teens</div>
            <div className="mt-5">
              <Link>LEARN MORE</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-56 rounded-md h-40" src={img2} />
            <div className="font-mono mt-5">Mindfulness for Adults</div>
            <div className="mt-5">
              <Link>LEARN MORE</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-56 rounded-md h-40" src={img3} />
            <div className="font-mono mt-5">Support for Students </div>
            <div className="mt-5">
              <Link>LEARN MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
