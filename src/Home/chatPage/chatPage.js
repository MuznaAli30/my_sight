import React, { useState } from "react";
import { MdOutlineSelfImprovement } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";
import ChatHeader from "../../Components/chatHeader"; // Corrected import

export default function ChatPage() {
  const [Message, setMessage] = useState(""); // To store the input message

  // Handle sending a message
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
        { Message } // Ensure you're sending the correct message format
      );

      // Handling response based on the status
      if (newMessage.status === 201) {
        toast.success("msg sent successfully");
        setMessage(""); // Clear the input field
        console.log(newMessage);
      } else {
        // Handle unexpected status codes (anything other than 201 or 400)
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      toast.error("Something went wrong while sending msg");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e); // Call the sendMessage function on Enter key press
    }
  };

  return (
    <>
      <ChatHeader /> 
      <div className="bg-[#ffffff]">
        {/* Header Section */}
        <div className="flex justify-center font-serif mb-5 font-extrabold items-center flex-row max-sm:flex-col mt-16">
          <MdOutlineSelfImprovement className="text-8xl text-[#bfaeae]" />
          <div className="text-4xl max-sm:text-xl max-sm:justify-center max-sm:flex">
            I am here to listen and support you
            <br />
            let’s start whenever you’re ready.
          </div>
        </div>

        {/* Input Section */}
        <div className="flex p-4 flex-row max-lg:flex-col border-t bg-[#d5c5c5] w-[90%] m-auto justify-center ">
          <input
            type="text"
            value={Message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
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
      {/* <Toaster/> */}
    </>
  );
}
