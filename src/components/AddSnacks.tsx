import React from "react";
import StarRating from "./StartRating";

const AddSnacks: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
        Snack Name:


<label
  htmlFor="SnackName"
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    id="SnackName"
    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="SnackName"
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    SnackName
  </span>
</label>

        </div>
      <div>
        <label
          htmlFor="HeadlineAct"
          className="block text-sm font-medium text-gray-900"
        >
          {" "}
          Add Category:{" "}
        </label>

        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="">Please select</option>
          <option value="JM">Savory</option>
          <option value="SRV">Salty</option>
          <option value="SRV">Sweet</option>
        </select>
      </div>
      <div>

      Rating: <StarRating />
      </div>
      <div>
        <label
          htmlFor="OrderNotes"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Comments:{" "}
        </label>

        <textarea
          id="OrderNotes"
          className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
          rows={4}
          placeholder="Enter any additional order notes..."
        ></textarea>
      </div>
      {/* Base */}

<a
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  Save
</a>

    </div>
  );
};

export default AddSnacks;
