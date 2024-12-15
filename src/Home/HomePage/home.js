import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../Components/homeHeader";
import Welcome from "./Welcome";
import hero from "../../../src/Assests/hero.webp";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div>
        <img src={hero} />
      </div>
      <div className="bg-white w-[30%]  p-10 text-black absolute bottom-[10%] opacity-50 left-96 flex flex-col items-center justify-center">
        <div className="font-caveat text-5xl mb-5">Learn grow heal</div>
        <div className="text-2xl">
          Discover personalized activities and advice tailored to your mood and
          needs. Take a step towards better mental health and well-being with
          just a few clicks.
        </div>
        <div>
            <button className="font-mono h-16 mt-5 text-black border-black w-96 p-4 opacity-100  bg-white hover:duration-300 hover:text-black border-2 hover:border-black">
              LEARN MORE
            </button>
          </div>  
      </div>
      <Welcome />
      <div></div>
    </>
  );
}
