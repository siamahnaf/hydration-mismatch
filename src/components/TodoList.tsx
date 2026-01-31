"use client"
import { useAtom, useSetAtom } from "jotai";
import { todoAtom, loadingAtom } from "@/jotai/todo.atom";
import { dropTodo } from "@/action/saveTodo";

const TodoList = () => {
    const [todo, setTodo] = useAtom(todoAtom);
    const setLoading = useSetAtom(loadingAtom);

    //Handler
    const dropsTodo = async (id: string) => {
        setLoading(true);
        setTodo(prev => prev.filter(a => a.id !== id));
        await dropTodo(id);
        setLoading(false);
    }

    return (
        <div className="space-y-2 mt-4 w-1/2">
            {todo.map((item) => (
                <div key={item.id} className="bg-green-500 py-2 px-2 rounded-lg text-white flex gap-x-4">
                    <span className="flex-1">{item.name}</span>
                    <button onClick={() => dropsTodo(item.id)} className="cursor-pointer">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;