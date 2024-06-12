// import React from "react";

// const SavedSnacks: React.FC = () => {
//   return (
//     <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//       <header>
//         <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
//           My Saved Snacks
//         </h2>
//       </header>

//       <div>
//         <fieldset>
//           <legend className="text-lg font-medium text-gray-900">
//             Lorem ipsum dolor sit
//           </legend>

//           <p className="mt-1 text-pretty text-sm text-gray-700">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
//             culpa.
//           </p>

//         </fieldset>
//       </div>

//       <div className="relative">
//         <label htmlFor="Search" className="sr-only">
//           {" "}
//           Search{" "}
//         </label>

//         <input
//           type="text"
//           id="Search"
//           placeholder="Search for..."
//           className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
//         />

//         <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
//           <button type="button" className="text-gray-600 hover:text-gray-700">
//             <span className="sr-only">Search</span>

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-4 w-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//               />
//             </svg>
//           </button>
//         </span>
//       </div>

//       <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         <li>
//           <a
//             href="#"
//             className="group block overflow-hidden border border-gray-200 rounded-lg shadow"
//           >
//             <img
//               src="https://www.foodandwine.com/thmb/GL29b4DPGNNAf4tTz4lNCjmUceU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/10-Minute-Snacks-Buttered-Crackers-FT-BLOG0923-2c4c7ea3f14d42ed8d409a3191cc6d52.jpg"
//               alt=""
//               className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
//             />

//             <div className="relative bg-white pt-3">
//               <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
//                 Snack 1
//               </h3>
//             </div>
//           </a>
//         </li>

//         <li>
//           <a
//             href="#"
//             className="group block overflow-hidden border border-gray-200 rounded-lg shadow"
//           >
//             <img
//               src="https://cdn.loveandlemons.com/wp-content/uploads/2020/05/health-snacks.jpg"
//               alt=""
//               className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
//             />

//             <div className="relative bg-white pt-3">
//               <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
//                 Snack 2
//               </h3>
//             </div>
//           </a>
//         </li>

//         <li>
//           <a
//             href="#"
//             className="group block overflow-hidden border border-gray-200 rounded-lg shadow"
//           >
//             <img
//               src="https://www.thespruceeats.com/thmb/Jscmogxrt_bx-niFZXnLW09rH1o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Doritos-CrustedBabybels-TheSpruce_MaxwellCozzi-4572aa18348548d99a0650b65305c08b.jpg"
//               alt=""
//               className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
//             />

//             <div className="relative bg-white pt-3">
//               <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
//                 Snack 3
//               </h3>
//             </div>
//           </a>
//         </li>

//         <li>
//           <a
//             href="#"
//             className="group block overflow-hidden border border-gray-200 rounded-lg shadow"
//           >
//             <img
//               src="https://www.eatingwell.com/thmb/whY7k1ZN9FfEReccb6PLbq3BhuA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45471921-15d807cae05e49eb9f4232654fb34c13.jpg"
//               alt=""
//               className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
//             />

//             <div className="relative bg-white pt-3">
//               <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
//                 Snack 4
//               </h3>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SavedSnacks;

import React, { useState, useEffect } from "react";

const SavedSnacks = ({ userId }) => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/snacks`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setSnacks(data.snacks);
      } catch (error) {
        console.error("Error fetching snacks:", error);
      }
    };

    if (userId) {
      fetchSnacks();
    }
  }, [userId]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          My Saved Snacks
        </h2>
      </header>

      <div>
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">
          
          </legend>
          <p className="mt-1 text-pretty text-sm text-gray-700">
         
          </p>
        </fieldset>
      </div>

      <div className="relative">
        <label htmlFor="Search" className="sr-only">Search</label>
        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {snacks.map(snack => (
          <li key={snack.id}>
            <a
              href="#"
              className="group block overflow-hidden border border-gray-200 rounded-lg shadow"
            >
              <img
                src={snack.photo_url}
                alt={snack.name}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {snack.name}
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedSnacks;
