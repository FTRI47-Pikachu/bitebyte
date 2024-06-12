import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import UploadImg from "./UploadImg";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Configure your AWS S3 Client
const s3Client = new S3Client({
  region: 'us-east-1', // Replace with your S3 bucket region
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID, // Ensure these are correctly configured in your environment
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  }
});

const AddSnack: React.FC = ( { userId, setRefreshKey }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const uploadToAWS = async (file: File) => {
    const params = {
      Bucket: 'bitebyte-ftri47', // Replace with your bucket name
      Key: file.name,
      Body: file,
      ContentType: file.type,
    };

    try {
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
      return `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`; // Return the URL of the uploaded file
    } catch (error) {
      console.error('AWS S3 upload error:', error);
      throw new Error('Failed to upload file to S3');
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;
  
    setUploading(true);
  
    try {
      // First upload the file to AWS S3 and get the URL
      const fileUrl = await uploadToAWS(selectedFile);
  
      // Now send the file URL with the snack name, comment, and user_id to your server
      const formData = new FormData();
      formData.append("fileUrl", fileUrl);
      formData.append("text", text);
      formData.append("textarea", textarea);
      formData.append("user_id", userId); // Hardcoded user_id
  
      const response = await fetch("/api/snacks", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("Data posted successfully");
        setRefreshKey((prevKey) => prevKey + 1);
      } else {
        console.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error handling the save process:", error);
    } finally {
      setUploading(false);
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
        disabled={uploading}
      >
        {uploading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
};

export default AddSnack;
