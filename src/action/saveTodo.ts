"use server"
import { db } from "@/db/drizzle"
import { todo } from "@/db/schema"
import { eq } from "drizzle-orm"

export const saveTodo = async (item: { id: string, name: string }) => {
    await db.insert(todo).values(item)
}

export const dropTodo = async (item: string) => {
    await db.delete(todo).where(eq(todo.id, item))
}