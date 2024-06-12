import React from 'react';
import StarRating from './StartRating';

interface SingleSnackCardProps {
  toggleModal: () => void;
}

const SingleSnackCard: React.FC<SingleSnackCardProps> = ({ toggleModal }) => {
  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <button
        onClick={toggleModal}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Snack Name
          </h5>
        <img
          className="p-8 rounded-t-lg"
          src="https://soireelove.com/cdn/shop/products/pizza.png?v=1611610411&width=1800"
          alt="Snack image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          
          <div className="flex justify-center my-2">
            <StarRating />
          </div>
          <h6>Comment: </h6>
          <h6>Category: </h6>
        </a>
      </div>
    </div>
  );
};

export default SingleSnackCard;


