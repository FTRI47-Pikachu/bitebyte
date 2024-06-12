import React, { useEffect, useCallback } from 'react';
import 'tailwindcss/tailwind.css';

interface DeleteAlertProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  handleDelete: () => void;
}

const DeleteAlert: React.FC<DeleteAlertProps> = ({ isModalOpen, toggleModal, handleDelete }) => {
  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (isModalOpen) {
        toggleModal();
      }
    }
  }, [isModalOpen, toggleModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      {isModalOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center opacity-100 pointer-events-auto">
          <div
            className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
            onClick={toggleModal}
          ></div>

          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div
              className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
              onClick={toggleModal}
            >
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.59 2.59L12 5.17 9.41 2.59 8 4l2.59 2.59L8 9.17l1.41 1.41L12 7.41l2.59 2.59L16 9.17l-2.59-2.59L16 4l-1.41-1.41z" />
              </svg>
              <span className="text-sm">(Esc)</span>
            </div>

            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Are you sure to delete this snack?</p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={toggleModal}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.59 2.59L12 5.17 9.41 2.59 8 4l2.59 2.59L8 9.17l1.41 1.41L12 7.41l2.59 2.59L16 9.17l-2.59-2.59L16 4l-1.41-1.41z" />
                  </svg>
                </div>
              </div>

              <p>If you delete it, please click the "Delete" button, it will disappear forever</p>

              <div className="flex justify-end pt-2">
                <button
                  className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAlert;
