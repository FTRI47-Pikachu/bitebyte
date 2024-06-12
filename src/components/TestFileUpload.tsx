import React, { useState } from 'react';
import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';

const REGION = 'us-east-1'; // Replace with your S3 bucket region

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  },
});

const TestFileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

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

    const params = {
      Bucket: 'bitebyte-ftri47', // Replace with your S3 bucket name
      Key: file.name,
      Body: file,
      ContentType: file.type,
    };

    try {
      console.log('Starting upload...');
      console.log('AWS Region:', REGION);

      // Check if the client can list objects in the bucket
      const listParams = {
        Bucket: 'bitebyte-ftri47',
      };
      const listCommand = new ListObjectsV2Command(listParams);
      const listResponse = await s3Client.send(listCommand);
      console.log('S3 Bucket Contents:', listResponse);

      const command = new PutObjectCommand(params);
      await s3Client.send(command);
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
