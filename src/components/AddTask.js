import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToServer } from "../slices/tasksSlice";
import {useDispatch} from 'react-redux'

const AddTask = () => {

    const dispatch = useDispatch()

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const addTask = (e) => {

        console.log({title,description})
        dispatch(addTaskToServer({title,description}))
        setTitle('')
        setDescription('')
    }
    return (
      <>
         <div className="w-full max-w-xs">

<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

<form>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Username
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
</div>
</form>

<form>
<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Email
  </label>
  <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Task Title" value={description} onChange={(e) => setDescription(e.target.value)}></input>
</div>
</form>

<div className="flex items-center justify-between">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={() => addTask()}>
    Sign In
  </button>
</div>
</form>
</div>
</>

    )
};

export default AddTask;
