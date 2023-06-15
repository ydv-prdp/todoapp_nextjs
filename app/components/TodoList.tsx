'use client'
import { getAllTodos } from "@/lib/api";
import { FormEventHandler, useEffect, useState } from "react";


import Task from "./Task";

interface TodoListProps{
  tasks:Task[]
}
const TodoList: React.FC<TodoListProps> =  ({tasks}) => {
 
 
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task)=>(
        <Task key={task.id} task={task}/>  
    ))}
      
      {/* row 2 */}
    </tbody>
  </table>
</div>
  )
}

export default TodoList