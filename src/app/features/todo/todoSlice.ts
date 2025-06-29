import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
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
  },
});

export const selecttasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
