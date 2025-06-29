import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            title={task.isCompleted ? "Task Completed" : task.priority}
            className={cn("size-3 rounded-full cursor-pointer", {
              "bg-green-500": task.isCompleted === true,
              "bg-red-500": task.priority === "High",
              "bg-yellow-600": task.priority === "Medium",
              "bg-yellow-300": task.priority === "Low",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500 cursor-pointer">
            <Trash2 />
          </Button>
          <Checkbox className="cursor-pointer" />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
