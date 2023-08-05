import React from "react";
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {tasksList,error} = useSelector((state) => state.tasks)

  return (
    <>
    
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
      <h1 className="font-semibold text-xl tracking-tight">Project Intern</h1>
    </div>
    </nav>
      </>
  )
};

export default Navbar;
