import React, { useState }  from "react";

const AnalyticsView = ({avClick}) => {
    const [av, setAv] = useState(false);
    const handleClick=()=>{
      setAv(!av);
      avClick(av);
    }
  return (
    <div className="p-2 container m-auto">
      <div className="text-xl text-white">Analytics View</div>
      <form className="m-10">
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div>
            <label className="text-xl text-white mx-3">First name:</label>
            <input type="date" />
          </div>
          <div>
            <label className="text-xl text-white mx-3">First name:</label>
            <input type="date" />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div>
            <label className="text-xl text-white mx-3">First name:</label>
            <input type="date" />
          </div>
          <div>
            <label className="text-xl text-white mx-3">First name:</label>
            <input type="date" />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div>
            <label className="text-xl text-white mx-3">First name:</label>
            <input type="date" />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div>
            <label className="text-xl text-white mx-3">First name:</label>
            <input type="date" />
          </div>
          </div>
      </form>
      <div  className="p-2 container m-auto">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          
        >
          Submit
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleClick}
 
        >
          Cancel
        </button>
        </div>
    </div>
  );
};

export default AnalyticsView;
