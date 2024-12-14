import React from "react";

export default function Welcome() {
  return (
    <>
      <div className="flex flex-row justify-evenly mt-16 max-lg:flex-col">
        <div className="flex flex-col items-center">
          <div className="mb-5 font-caveat text-6xl">WELCOME</div>
         <div>content</div>
          <div>btn</div>
        </div>
        <div className="flex justify-center">
          <img src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg" />
        </div>
      </div>
    </>
  );
}
