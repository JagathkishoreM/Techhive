import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTask,removeTaskFromList, deleteTaskFromServer } from "../slices/tasksSlice";
import { getTasksFromServer } from './../slices/tasksSlice';

const TasksList = () => {
  const {tasksList} = useSelector((state) => state.tasks)
  const dispatch = useDispatch()
  
  const [modalShow,setModalShow] = useState(false)

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };
 

  useEffect(() => {
    dispatch(getTasksFromServer())
  },[dispatch])

  const deleteTask = (task) => {
    console.log("delete task");
    dispatch(deleteTaskFromServer(task))
    .unwrap()
    .then(() => {
      dispatch(removeTaskFromList(task))
    })
  };

  return (
    <>
    <div className="table-auto w-full border-collapse">
<table className="table-auto w-full border-collapse">
  <thead>
    <tr >
      <th className="px-4 py-2 bg-gray-800 text-white">Name</th>
      <th className="px-4 py-2 bg-gray-800 text-white">Email</th>
      <th className="px-4 py-2 bg-gray-800 text-white">Actions</th>


    </tr>
  </thead> 
  </table>
  </div>
        <table className="table-auto w-full border-collapse">
            {
                tasksList && tasksList.map((task) => {
            return(
            <tbody>
                <tr className="border-b">
                <td className="text-left p-4 px-2">{task.title}</td>
                <td className="text-center p-4 px-2">{task.description}</td>
                <td> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={() => updateTask(task)}>
            Update
            </button></td>
            <td><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit" onClick={() => deleteTask(task)}>
                Delete
</button></td>
                </tr>
            </tbody>
             )
            }
            )}
                 
               
                
            
        </table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
           

</>
  )

};

export default TasksList;
