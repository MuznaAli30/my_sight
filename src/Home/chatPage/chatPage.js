import React, { useState, useEffect } from "react";
import { FaUserCircle, FaRobot } from "react-icons/fa";
import axios from "axios";
import { MdOutlineSelfImprovement } from "react-icons/md";


export default function ChatPage() {
  const [messages, setMessages] = useState([]); // Chat messages state
  const [input, setInput] = useState(""); // Input field state
  const Api = "your-api-endpoint"; // Replace with your API endpoint

  // Fetch messages from the API when the component loads
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${Api}/chat/getMessages`);
        setMessages(response.data);
      } catch (error) {
        console.log("Error fetching messages: ", error);
      }
    };
    fetchMessages();
  }, []); // Empty dependency array to fetch messages on page load

  // Handle sending a message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // Prevent empty messages

    try {
      // Send user message to API
      await axios.post(`${Api}/chat/sendMessage`, { Message: input });

      // Update the UI with new message
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm here to help!", sender: "bot" },
        ]);
      }, 1000);
    } catch (error) {
      console.log("Error sending message: ", error);
    }
  };

  // Handle pressing the Enter key to send the message
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="flex justify-center text-4xl font-serif mb-5 mt-5 font-extrabold items-center">
        <MdOutlineSelfImprovement className="text-8xl text-[#bfaeae]" />
        <div className="">
          I am here to listen and support you
          <br />
          let’s start whenever you’re ready.
        </div>
      </div>
      <div className="flex flex-col w-[65%] max-lg:w-[90%] mx-auto justify-center">
        {/* Chat Box */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 flex items-center ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Icon for Bot */}
              {message.sender === "bot" && (
                <FaRobot className="mr-2 text-2xl text-black" />
              )}

              {/* Message Bubble */}
              <div
                className={`p-3 rounded-3xl max-w-full break-words ${
                  message.sender === "user"
                    ? "bg-[#f9f0f0] text-black font-serif text-xl"
                    : "bg-[#f9f0f0] text-black font-serif text-xl"
                }`}
                style={{ maxWidth: "75%", wordWrap: "break-word" }}
              >
                {message.text}
              </div>

              {/* Icon for User */}
              {message.sender === "user" && (
                <FaUserCircle className="ml-2 text-2xl text-black" />
              )}
            </div>
          ))}
        </div>

 
        {/* Input Section */}
        <div className="flex p-4 flex-row max-lg:flex-col border-t bg-[#fffcfc]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Handle Enter key press
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
    </div>
  );
}



// import React, { useState } from "react";
// import { FaUserCircle, FaRobot } from "react-icons/fa"; // Import the icons
// import { MdOutlineSelfImprovement } from "react-icons/md";
// import axios from "axios";

// export default function ChatPage() {
//   const [messages, setMessages] = useState([]); // Chat messages state
//   const [input, setInput] = useState(""); // Input field state

//   // Handle sending a message
//   const sendMessage = () => {
//     if (input.trim() === "") return; // Prevent empty messages
//     setMessages([...messages, { text: input, sender: "user" }]);
//     setInput("");

//     // Simulate bot response
//     setTimeout(() => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: "I'm here to help!", sender: "bot" },
//       ]);
//     }, 1000);
//   };

//   // Handle pressing the Enter key to send the message
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   return (
//     <div className="bg-[#ffffff]">
      // <div className="flex justify-center text-4xl font-serif mb-5 mt-5 font-extrabold items-center">
      //   <MdOutlineSelfImprovement className="text-8xl text-[#bfaeae]" />
      //   <div className="">
      //     I am here to listen and support you
      //     <br />
      //     let’s start whenever you’re ready.
      //   </div>
      // </div>
//       <div className="flex flex-col w-[65%] max-lg:w-[90%] mx-auto justify-center">
//         {/* Chat Box */}
//         <div className="flex-1 overflow-y-auto p-4">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={mb-2 flex items-center ${
//                 message.sender === "user" ? "justify-end" : "justify-start"
//               }}
//             >
//               {/* Icon for Bot */}
//               {message.sender === "bot" && (
//                 <FaRobot className="mr-2 text-2xl text-black" />
//               )}

//               {/* Message Bubble */}
//               <div
//                 className={p-3 rounded-3xl max-w-full break-words ${
//                   message.sender === "user"
//                     ? "bg-[#f9f0f0] text-black font-serif text-xl"
//                     : "bg-[#f9f0f0] text-black font-serif text-xl"
//                 }}
//                 style={{ maxWidth: "75%", wordWrap: "break-word" }}
//               >
//                 {message.text}
//               </div>

//               {/* Icon for User */}
//               {message.sender === "user" && (
//                 <FaUserCircle className="ml-2 text-2xl text-black" />
//               )}
//             </div>
//           ))}
//         </div>

        // {/* Input Section */}
        // <div className="flex p-4 flex-row max-lg:flex-col border-t bg-[#fffcfc]">
        //   <input
        //     type="text"
        //     value={input}
        //     onChange={(e) => setInput(e.target.value)}
        //     onKeyDown={handleKeyDown} // Handle Enter key press
        //     placeholder="Type your message..."
        //     className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        //   />
        //   <button
        //     onClick={sendMessage}
        //     className="ml-2 px-4 py-2 max-lg:ml-0 max-lg:mt-5 bg-[#dfd1d1] text-black font-serif rounded-lg hover:bg-[#eee6e6] duration-300 text-xl"
        //   >
        //     Send
        //   </button>
//         </div>
//       </div>
//     </div>
//   );
// }