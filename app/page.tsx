import { getAllTodos } from "@/lib/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export const revalidate = 0;

export default async function Home() {
  const todos = await getAllTodos();
  console.log(todos); 
  return (
    <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo List App</h1>
          <AddTask/>
        </div>
        <TodoList tasks={todos}/>
     
    </main>
  )
}
