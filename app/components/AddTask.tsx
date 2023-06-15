'use client'
import {useState, FormEventHandler} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal'
import { addTodo } from '@/lib/api';
import {v4 as uuidv4} from 'uuid';
import { useRouter } from 'next/navigation';

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('this is your task');
  const router = useRouter();
  const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(newTaskValue)
    await addTodo({
      id:uuidv4(),
      text:newTaskValue
    })
   setNewTaskValue('');
   setModalOpen(false);
   router.refresh();
  }
  return (
    <div>
        <button onClick={()=>setModalOpen(true)} className="btn btn-primary w-fullS">
            Add New Task <AiOutlinePlus className='ml-2' size={18}/>
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
       
          <form onSubmit={handleSubmitNewTodo} method='dialog' className='modal-box'>
          <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> 
            <h3 className='font-bold text-lg'>Add New Task</h3>
            <div className='modal-action'>
              <input 
                type="text"
                value={newTaskValue}
                onChange={(e)=>setNewTaskValue(e.target.value)} 
                placeholder="Type here" 
                className="input input-bordered input-info w-full w-full" 
              />
              <button type='submit' className='btn bg-slate-300 text-black hover:text-white'>Submit</button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask