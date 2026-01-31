"use client"
import { useState } from "react";
import { useSetAtom, useAtom } from "jotai";
import { loadingAtom, todoAtom } from "@/jotai/todo.atom";
import { saveTodo } from "@/action/saveTodo";

const CreateTodo = () => {
    //State
    const [value, setValue] = useState<string>("");

    const setTodo = useSetAtom(todoAtom);
    const [loading, setLoading] = useAtom(loadingAtom);

    const onSave = async () => {
        setLoading(true);
        const data = { id: crypto.randomUUID(), name: value }
        setTodo(prev => [...prev, data]);
        await saveTodo(data);
        setValue("");
        setLoading(false);
    }

    return (
        <div className="space-x-3">
            <input
                className="border rounded-lg border-gray-300 py-2 focus:outline-none px-2" placeholder="Type todo name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={onSave} className="bg-amber-600 text-white py-2 px-2 rounded-xl cursor-pointer">Save Now</button>
            <span>{loading ? "Saving..." : ""}</span>
        </div>
    );
};

export default CreateTodo;