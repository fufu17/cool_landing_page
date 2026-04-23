"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Task, TaskStatus } from "@/types/task";
import {
  createTask as createTaskFn,
  deleteTask as deleteTaskFn,
  moveTask as moveTaskFn,
} from "@/lib/taskStore";

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  removeTask: (taskId: string) => void;
  changeTaskStatus: (taskId: string, newStatus: TaskStatus) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((title: string, description: string) => {
    setTasks((prev) => createTaskFn(prev, title, description));
  }, []);

  const removeTask = useCallback((taskId: string) => {
    setTasks((prev) => deleteTaskFn(prev, taskId));
  }, []);

  const changeTaskStatus = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      setTasks((prev) => moveTaskFn(prev, taskId, newStatus));
    },
    []
  );

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, changeTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext(): TaskContextType {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}
