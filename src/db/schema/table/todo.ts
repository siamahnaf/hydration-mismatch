import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
})