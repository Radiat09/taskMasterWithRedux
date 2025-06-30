import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "Medium" | "High" | "Low" | "All";
}

const initialState: InitialState = {
  tasks: [
    // {
    //   id: "awrinwak",
    //   title: "Initialize frontend",
    //   description: "Create Homepage,and routing",
    //   dueDate: "2025-11",
    //   isCompleted: false,
    //   priority: "High",
    // },
    // {
    //   id: "awrinwadarak",
    //   title: "Create github repo",
    //   description: "Create github repo and stage",
    //   dueDate: "2025-11",
    //   isCompleted: false,
    //   priority: "Medium",
    // },
  ],
  filter: "All",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const newTask = createTask(action.payload);
      state.tasks.push(newTask);
    },
    toggleCompleteTask: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"Medium" | "High" | "Low" | "All">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selecttasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  }
  if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  }
  return state.todo.tasks;
};

export const { addTask, toggleCompleteTask, deleteTask, updateFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
