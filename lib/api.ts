

const baseUrl = 'http://localhost:3001'

export const getAllTodos = async () =>{
    const res = await fetch(`${baseUrl}/tasks`);
    if(res.status === 404) console.log("error fectching")
    const todos:Task[] = await res.json();
    return todos; 
}


export const addTodo = async (todo: Task):Promise<Task[]> => {
    const res = await fetch(`${baseUrl}/tasks`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}
export const editTodo = async (todo: Task):Promise<Task> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
    })
    const editedTodo = await res.json();
    return editedTodo;
}
export const deleteTodo = async (todo:Task):Promise<Task> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`,{
        method:'DELETE'
    })
    const deletedTodo = await res.json();
    return deletedTodo;
}