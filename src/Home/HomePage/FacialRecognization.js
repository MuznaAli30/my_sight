import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

export default function FacialRecognization() {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState("");

  // Capture photo
  const capturePhoto = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    setStatus(""); // Clear any previous status messages
  }, [webcamRef]);

  // Send image to backend
  const sendToBackend = async () => {
    if (!url) {
      setStatus("No image captured to send!");
      console.log("No image captured to send!");
      return;
    }

    try {
      console.log("Sending image to backend...");
      console.log("Captured Image URL:", url);

      // Sending the POST request
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { image: url }
      );

      console.log("Response received:", response);

      // Handling response status
      if (response.status === 201 || response.status === 200) {
        setStatus("Image successfully sent to backend!");
        console.log("Image successfully sent to backend!");
      } else {
        setStatus("Unexpected response from server.");
        console.log("Unexpected response from server. Status:", response.status);
      }
    } catch (error) {
      // Handling errors
      setStatus("An error occurred while sending the image.");
      console.error("Error occurred while sending the image:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          mirrored={true}
        />
        <div className="flex flex-col items-center justify-center">
          <button
            className="p-2 bg-blue-100 mb-2 w-24"
            onClick={capturePhoto}
          >
            Capture
          </button>
          <button
            className="p-2 bg-blue-100 mb-2 w-24"
            onClick={() => setUrl(null)}
          >
            Refresh
          </button>
          <button
            className={`p-2 mb-2 w-24 ${
              url ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={sendToBackend}
            disabled={!url} // Disable if no image is captured
          >
            Send
          </button>
        </div>

        {status && <p>{status}</p>}

        {url && (
          <div>
            <img src={url} alt="Captured screenshot" />
          </div>
        )}
      </div>
    </>
  );
}
