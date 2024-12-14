import React, { useState, useEffect } from "react";
import {
  MdOutlineSelfImprovement,
} from "react-icons/md";
import { FaUserCircle, FaRobot } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import ChatHeader from "../../Components/chatHeader";

export default function ChatPage() {
  const [Message, setMessage] = useState(""); // To store the input message
  const [userMsg, setUserMsg] = useState([]);
  const [boatMsg, setBoatMsgs] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      if (!Message.trim()) {
        toast.error("Message cannot be empty!");
        return;
      }
      // Sending the POST request
      const newMessage = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        { Message }
      );

      if (newMessage.status === 201) {
        toast.success("msg sent successfully");
        setMessage(""); // Clear the input field
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      toast.error("Something went wrong while sending msg");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  useEffect(() => {
    const fetchUserMsgs = async () => {
      try {
        const userMsgs = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setUserMsg(userMsgs.data);
      } catch (error) {
        console.log("fetching error ", error);
      }
    };
    fetchUserMsgs();
  }, []);

  useEffect(() => {
    const fetchBoatMsgs = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setBoatMsgs(response.data);
      } catch (error) {
        console.log("Fetching error", error);
      }
    };

    fetchBoatMsgs();
  }, []);

  return (
    <>
      <ChatHeader />
      <div className="bg-[#ffffff] flex flex-col h-screen">
        {/* Header Section */}
        <div className="flex justify-center font-serif mb-5 font-extrabold items-center flex-row max-sm:flex-col mt-16">
          <MdOutlineSelfImprovement className="text-8xl text-[#bfaeae]" />
          <div className="text-4xl max-sm:text-xl max-sm:justify-center max-sm:flex">
            I am here to listen and support you
            <br />
            let’s start whenever you’re ready.
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col items-center flex-1 overflow-y-auto py-4 space-y-4 px-4">
          {/* User Messages */}
          {userMsg.map((comment, index) => (
            <div
              key={index}
              className={`flex items-center w-full max-w-2xl ${
                comment.userId ? "justify-end" : "justify-start"
              }`}
            >
              {!comment.userId && <FaUserCircle className="text-3xl mr-2" />}
              {comment.body && (
                <p
                  className={`${
                    comment.body ? "bg-[#d5c5c5] text-lg px-4 py-2" : "p-0"
                  } rounded-lg w-fit max-w-[75%]`}
                >
                  {comment.body}
                </p>
              )}
              {comment.userId && (
                <FaUserCircle className="text-2xl text-gray-400 ml-2" />
              )}
            </div>
          ))}

          {/* Bot Messages */}
          {boatMsg.map((comment, index) => (
            <div
              key={index}
              className={`flex items-center w-full max-w-2xl ${
                comment.userId ? "justify-start" : "justify-end"
              }`}
            >
              {comment.userId && (
                <FaRobot className="text-2xl text-gray-400 mr-2" />
              )}
              {comment.body && (
                <p
                  className={`${
                    comment.body ? "bg-[#d5c5c5] text-lg px-4 py-2" : "p-0"
                  } rounded-lg w-fit max-w-[75%]`}
                >
                  {comment.title}
                </p>
              )}
              {!comment.userId && <FaRobot className="text-3xl ml-2" />}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="flex p-4 flex-row max-lg:flex-col border-t bg-[#d5c5c5] max-sm:w-[95%] rounded-lg w-[90%] m-auto justify-center">
          <input
            type="text"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 bg-[#dfd1d1] text-black font-serif rounded-lg hover:bg-[#eee6e6] duration-300 text-xl"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
