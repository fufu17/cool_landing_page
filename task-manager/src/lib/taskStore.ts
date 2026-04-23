import { Task, TaskStatus } from "@/types/task";

export function createTask(
  tasks: Task[],
  title: string,
  description: string
): Task[] {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
  };
  return [...tasks, newTask];
}

export function deleteTask(tasks: Task[], taskId: string): Task[] {
  return tasks.filter((task) => task.id !== taskId);
}

export function moveTask(
  tasks: Task[],
  taskId: string,
  newStatus: TaskStatus
): Task[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, status: newStatus } : task
  );
}

export function getTasksByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}
