import {useState, FormEventHandler} from  'react'
import {FiEdit, FiTrash2} from 'react-icons/fi'
import Modal from "./Modal";
import { deleteTodo, editTodo } from '@/lib/api';
import {useRouter} from 'next/navigation'
interface TaskProps{
  task:Task;
}
const Task:React.FC<TaskProps> = ({task}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editTaskValue, setEditTaskValue] = useState<string>(task.text);
  const router = useRouter();
  const handleSubmitEditTodo:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id:task.id,
      text:editTaskValue
    })
    setEditModalOpen(false);
    router.refresh();
  }
  const handleSubmitDeleteTodo:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("delete the task",task.text)
    await deleteTodo({
      id:task.id,
      text:task.text
    })
    setDeleteModalOpen(false);
    router.refresh();
  }
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td className="flex gap-x-4">
        <FiEdit onClick={()=>setEditModalOpen(true)} className="text-blue-500 cursor-pointer" size={25}/>
        <Modal modalOpen={editModalOpen} setModalOpen={setEditModalOpen}>
          <form 
          // onSubmit={()=>{}}
          onSubmit={handleSubmitEditTodo}
          method='dialog' className='modal-box'>
          <button onClick={()=>setEditModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> 
            <h3 className='font-bold text-lg'>Edit Task</h3>
            <div className='modal-action'>
              <input 
                type="text"
                value={editTaskValue}
                onChange={(e)=>setEditTaskValue(e.target.value)}  
                className="input input-bordered input-info w-full" 
              />
              <button type='submit' className='btn bg-slate-300 text-black hover:text-white'>Submit</button>
            </div>
          </form>
      </Modal>
      <FiTrash2  onClick={()=>setDeleteModalOpen(true)} className="text-red-500 cursor-pointer" size={25} />
      <Modal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen}>
          <form 
          // onSubmit={()=>{}}
          onSubmit={handleSubmitDeleteTodo}
          method='dialog' className='modal-box'>
          <button onClick={()=>setDeleteModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> 
            <h3 className='font-bold text-lg'>Delete Task</h3>
            <p className='mt-4'>Are yor sure to delete this task?</p>
            <div className='modal-action'>
              <button type='submit' className='btn bg-slate-300 text-black hover:text-white'>Submit</button>
            </div>
          </form>
      </Modal>

      </td>
    </tr>
  )
}

export default Task