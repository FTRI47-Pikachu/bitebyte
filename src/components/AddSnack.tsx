import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import UploadImg from "./UploadImg";

const AddSnack: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleSave = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("text", text);
    formData.append("textarea", textarea);

    try {
      const response = await fetch("YOUR_SERVER_UPLOAD_URL", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4 space-y-4">
      <input
        type="text"
        id="SnackName"
        placeholder="SnackName"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        placeholder="Enter your comment"
        className="w-full p-2 border border-gray-300 rounded-md"
        rows={4}
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      />
      <UploadImg onFileChange={handleFileChange} onFileRemove={handleFileRemove} />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default AddSnack;
