"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task, TaskStatus } from "@/types/task";
import TaskCard from "./TaskCard";

interface ColumnProps {
  status: TaskStatus;
  title: string;
  tasks: Task[];
  accentColor: string;
}

export default function Column({
  status,
  title,
  tasks,
  accentColor,
}: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[400px] flex-1 flex-col rounded-xl border bg-gray-50 transition-colors dark:bg-gray-900 ${
        isOver
          ? "border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/30"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <div className={`h-3 w-3 rounded-full ${accentColor}`} />
        <h2 className="font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <span className="ml-auto rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          {tasks.length}
        </span>
      </div>
      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-1 flex-col gap-3 p-4">
          {tasks.length === 0 ? (
            <p className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
              No tasks yet
            </p>
          ) : (
            tasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </div>
      </SortableContext>
    </div>
  );
}
