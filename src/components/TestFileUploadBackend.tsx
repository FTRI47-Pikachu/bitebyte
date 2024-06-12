import React, { useState } from 'react';
import axios from 'axios';

const TestFileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [otherInfo, setOtherInfo] = useState(''); // Additional information to send

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('otherInfo', otherInfo); // Add other information to the form data

    try {
      console.log('Starting upload...');
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload response:', response.data);
      alert('File uploaded successfully!');
    } catch (err) {
      console.error('Error uploading file:', err);
      alert('There was an error uploading your file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        value={otherInfo}
        onChange={(e) => setOtherInfo(e.target.value)}
        placeholder="Enter other information"
      />
      <button
        onClick={handleUploadClick}
        disabled={uploading}
        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
          uploading
            ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default TestFileUpload;