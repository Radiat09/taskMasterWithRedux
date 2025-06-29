import { selecttasks } from "@/app/features/todo/todoSlice";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { useSelector } from "react-redux";

export default function Tasks() {
  const tasks = useSelector(selecttasks);
  console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex items-center justify-between">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task, i) => (
          <TaskCard task={task} key={task.id || i} />
        ))}
      </div>
    </div>
  );
}
