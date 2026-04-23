"use client";

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Task, TaskStatus } from "@/types/task";
import { getTasksByStatus } from "@/lib/taskStore";
import { useTaskContext } from "@/context/TaskContext";
import Column from "./Column";
import TaskCard from "./TaskCard";
import CreateTaskModal from "./CreateTaskModal";
import DarkModeToggle from "./DarkModeToggle";

const COLUMNS: { status: TaskStatus; title: string; accentColor: string }[] = [
  { status: "todo", title: "To Do", accentColor: "bg-blue-500" },
  { status: "in-progress", title: "In Progress", accentColor: "bg-yellow-500" },
  { status: "done", title: "Done", accentColor: "bg-green-500" },
];

export default function Board() {
  const { tasks, changeTaskStatus } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const task = event.active.data.current?.task as Task | undefined;
    if (task) setActiveTask(task);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeTask = active.data.current?.task as Task | undefined;
    if (!activeTask) return;

    const overId = over.id as string;
    const isColumn = COLUMNS.some((col) => col.status === overId);
    const newStatus = isColumn
      ? (overId as TaskStatus)
      : (tasks.find((t) => t.id === overId)?.status ?? activeTask.status);

    if (activeTask.status !== newStatus) {
      changeTaskStatus(activeTask.id, newStatus);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeTask = active.data.current?.task as Task | undefined;
    if (!activeTask) return;

    const overId = over.id as string;
    const isColumn = COLUMNS.some((col) => col.status === overId);
    const newStatus = isColumn
      ? (overId as TaskStatus)
      : (tasks.find((t) => t.id === overId)?.status ?? activeTask.status);

    if (activeTask.status !== newStatus) {
      changeTaskStatus(activeTask.id, newStatus);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <header className="border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Task Manager
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Drag tasks between columns to update their status
            </p>
          </div>
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              + New Task
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 gap-6 p-6">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          {COLUMNS.map((col) => (
            <Column
              key={col.status}
              status={col.status}
              title={col.title}
              tasks={getTasksByStatus(tasks, col.status)}
              accentColor={col.accentColor}
            />
          ))}
          <DragOverlay>
            {activeTask ? <TaskCard task={activeTask} /> : null}
          </DragOverlay>
        </DndContext>
      </main>

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
