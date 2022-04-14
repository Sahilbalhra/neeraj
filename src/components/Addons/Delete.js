import React, { useState }  from 'react'

const Delete = ({delClick}) => {
    const [del, setDel] = useState(false);
    const handleClick=()=>{
      setDel(!del);
      delClick(del);
    }
  return (
    <div className="p-2 container m-auto">
    <div className="text-xl text-white">Delete Record</div>
    <div className=" text-white">Are You Sure you wants to delete this Record's ?</div>
    <div className="p-2 container m-auto">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
             onClick={handleClick}
        >
          Cancel
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        
        >
         Delete
        </button>
      </div>
    </div>
  )
}

export default Delete