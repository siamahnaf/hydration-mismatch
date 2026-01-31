"use client"
import { useHydrateAtoms } from "jotai/utils";
import { todoAtom } from "@/jotai/todo.atom";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

//Interface
interface Props {
    data: { id: string, name: string }[]
}

const TodoRoot = ({ data }: Props) => {
    useHydrateAtoms([[todoAtom, data]]);
    return (
        <div>
            <CreateTodo />
            <TodoList />
        </div>
    );
};

export default TodoRoot;