import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility (optional if you need a toggle effect)
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigate = useNavigate()

  const navigateToChatPage = (e) => {
    e.preventDefault()
    console.log("chatPage")
    navigate('/chatPage')
  }

  return (
    <>
      <div className="flex flex-row justify-around items-center p-4 bg-[#d5c5c5] max-lg:hidden">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
            <div className="font-caveat font-semibold text-3xl">MY</div>
            <img
              src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg"
              alt="Logo"
              className="size-10 rounded-full"
            />
            <div className="font-caveat font-semibold text-3xl">SIGHT</div>
          </div>
        </Link>
        <div className="flex items-center justify-center flex-row space-x-7 font-mono text-xl">
          <Link to={"/"} className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin">
            HOME
          </Link>
          <Link className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin">
            ABOUT
          </Link>
          <Link className="cursor-pointer hover:scale-x-125 duration-500 hover:font-thin">
            CONTACT
          </Link>
        </div>
        <div>
          <button onClick={navigateToChatPage} className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 bg-[#fdf5f5] text-black font-serif rounded-lg hover:bg-[#eee6e6] duration-300 text-xl">
            CHAT
          </button>
        </div>
      </div>

      {/* Small page header */}
      <div className="max-lg:visible lg:hidden flex flex-row justify-between items-center m-auto p-4 bg-[#d5c5c5]">
        <Link to={"/"}>
          <div className="flex flex-row items-center space-x-2">
            <div className="font-caveat font-semibold text-3xl">MY</div>
            <img
              src="https://i.pinimg.com/236x/2d/1b/df/2d1bdf1cb9fe7ebbd65a1bebdf418616.jpg"
              alt="Logo"
              className="size-10 rounded-full"
            />
            <div className="font-caveat font-semibold text-3xl">SIGHT</div>
          </div>
        </Link>

        <div className="group relative">
          {/* Options Button */}
          <button
            onClick={toggleDropdown}
            className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 bg-[#fdf5f5] text-black font-serif rounded-lg hover:bg-[#eee6e6] duration-300 text-xl"
          >
            Options
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-1 mr-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <Link to={"/"} className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer">
              HOME
            </Link>
            <Link className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer">
              ABOUT
            </Link>
            <Link className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer">
              CONTACT
            </Link>
            <Link to={"/chatPage"} className="block px-4 py-2 hover:bg-[#d5c5c5] cursor-pointer">
              CHAT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
