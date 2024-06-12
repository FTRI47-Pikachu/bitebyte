import React, { useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

interface UploadImgProps {
  onFileChange: (file: File) => void;
  onFileRemove: () => void;
}

const UploadImg: React.FC<UploadImgProps> = ({ onFileChange, onFileRemove }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onFileChange(file);
    }
  };

  const handleFileRemove = () => {
    setPreview(null);
    onFileRemove();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full aspect-w-16 aspect-h-9 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer rounded-lg"
        onClick={handleCardClick}
      >
        {preview ? (
          <img src={preview} alt="Selected file" className="object-cover" />
        ) : (
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      {preview && (
        <button
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleFileRemove}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default UploadImg;
