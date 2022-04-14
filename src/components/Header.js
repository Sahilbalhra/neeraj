import React, { useState } from "react";
const Header = ({addClick,editClick,delClick,adClick,avClick}) => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const [ad, setAd] = useState(false);
  const [av, setAv] = useState(false);
  const handleAv=()=>{
    setAv(!av);
    avClick(av);
  }
    const handleAd=()=>{
      setAd(!ad);
      adClick(ad);
    }
    const handleDel=()=>{
      setDel(!del);
      delClick(del);
    }
  const handleAdd=()=>{
    setAdd(!add);
    addClick(add);
  }
  const handleEdit=()=>{
    setEdit(!edit);
    editClick(edit);
  }

  return (
    <div className="container flex justify-center w-full m-auto my-8">
      <div className=" bg-slate-800 rounded-md mx-2 p-2 w-1/3 flex justify-evenly sm:block">
        <button className=" hover:bg-sky-500 text-white p-2 rounded-md">PREDICT</button>
        <button className=" hover:bg-sky-500 text-white p-2 rounded-md"onClick={handleAv}>ANALYTICS VIEW</button>
        <button className=" hover:bg-sky-500 text-white p-2 rounded-md "onClick={handleAd}>ADVANCE SEARCH</button>
      </div>
      <div className=" bg-slate-800 rounded-md mx-2 p-2 w-1/3 flex justify-evenly">
       <button className="text-xl mx-2 bg-sky-500 rounded-md "><i className="fa-solid fa-arrow-rotate-right p-2 "></i></button>
      <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search " type="text" name="search"/>
      </div>
      <div className=" bg-slate-800 rounded-md mx-3 p-2 w-1/3 flex justify-evenly">
        <button className=" hover:bg-sky-500 text-white p-2 rounded-md" onClick={handleAdd}>ADD</button>
        <button className=" hover:bg-sky-500 text-white p-2 rounded-md" onClick={handleEdit}>EDIT</button>
        <button className=" hover:bg-sky-500 text-white p-2 rounded-md" onClick={handleDel}>DELETE</button>
      </div>
    </div>
  );
};

export default Header;
