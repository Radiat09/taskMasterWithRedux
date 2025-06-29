import type { RootState } from "@/app/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "awrinwak",
      title: "Initialize frontend",
      description: "Create Homepage,and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "awrinwadarak",
      title: "Create github repo",
      description: "Create github repo and stage",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selecttasks = (state: RootState) => {
  return state.todo.tasks;
};

export default todoSlice.reducer;
