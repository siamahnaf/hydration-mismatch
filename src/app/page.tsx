import { db } from "@/db/drizzle";
import TodoRoot from "@/components/TodoRoot";

const Page = async () => {
  const data = await db.query.todo.findMany();

  return (
    <div className="px-20 py-10">
      <TodoRoot data={data} />
    </div>
  );
};

export default Page;