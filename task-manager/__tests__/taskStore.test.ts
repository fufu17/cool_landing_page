import { createTask, deleteTask, moveTask, getTasksByStatus } from "@/lib/taskStore";
import { Task } from "@/types/task";

describe("createTask", () => {
  it("should add a new task to an empty array", () => {
    const result = createTask([], "Test Task", "Test Description");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Test Task");
    expect(result[0].description).toBe("Test Description");
    expect(result[0].status).toBe("todo");
    expect(result[0].id).toBeDefined();
    expect(result[0].createdAt).toBeDefined();
  });

  it("should append a task to existing tasks", () => {
    const existing: Task[] = [
      {
        id: "existing-1",
        title: "Existing",
        description: "Already here",
        status: "todo",
        createdAt: new Date().toISOString(),
      },
    ];
    const result = createTask(existing, "New Task", "New Desc");
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe("existing-1");
    expect(result[1].title).toBe("New Task");
  });

  it("should create a task with an empty description", () => {
    const result = createTask([], "Title Only", "");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Title Only");
    expect(result[0].description).toBe("");
  });

  it("should assign unique IDs to each task", () => {
    let tasks = createTask([], "Task 1", "Desc 1");
    tasks = createTask(tasks, "Task 2", "Desc 2");
    expect(tasks[0].id).not.toBe(tasks[1].id);
  });

  it("should not mutate the original array", () => {
    const original: Task[] = [];
    const result = createTask(original, "Task", "Desc");
    expect(original).toHaveLength(0);
    expect(result).toHaveLength(1);
  });
});

describe("deleteTask", () => {
  const tasks: Task[] = [
    {
      id: "task-1",
      title: "Task 1",
      description: "Desc 1",
      status: "todo",
      createdAt: new Date().toISOString(),
    },
    {
      id: "task-2",
      title: "Task 2",
      description: "Desc 2",
      status: "in-progress",
      createdAt: new Date().toISOString(),
    },
    {
      id: "task-3",
      title: "Task 3",
      description: "Desc 3",
      status: "done",
      createdAt: new Date().toISOString(),
    },
  ];

  it("should remove a task by ID", () => {
    const result = deleteTask(tasks, "task-2");
    expect(result).toHaveLength(2);
    expect(result.find((t) => t.id === "task-2")).toBeUndefined();
  });

  it("should return all tasks when ID does not exist", () => {
    const result = deleteTask(tasks, "nonexistent");
    expect(result).toHaveLength(3);
  });

  it("should not mutate the original array", () => {
    const original = [...tasks];
    deleteTask(original, "task-1");
    expect(original).toHaveLength(3);
  });

  it("should handle deleting from a single-item array", () => {
    const single: Task[] = [tasks[0]];
    const result = deleteTask(single, "task-1");
    expect(result).toHaveLength(0);
  });

  it("should handle deleting from an empty array", () => {
    const result = deleteTask([], "task-1");
    expect(result).toHaveLength(0);
  });
});

describe("moveTask", () => {
  it("should update the status of a task", () => {
    const tasks: Task[] = [
      {
        id: "task-1",
        title: "Task 1",
        description: "Desc",
        status: "todo",
        createdAt: new Date().toISOString(),
      },
    ];
    const result = moveTask(tasks, "task-1", "in-progress");
    expect(result[0].status).toBe("in-progress");
  });
});

describe("getTasksByStatus", () => {
  const tasks: Task[] = [
    { id: "1", title: "A", description: "", status: "todo", createdAt: "" },
    { id: "2", title: "B", description: "", status: "in-progress", createdAt: "" },
    { id: "3", title: "C", description: "", status: "done", createdAt: "" },
    { id: "4", title: "D", description: "", status: "todo", createdAt: "" },
  ];

  it("should filter tasks by status", () => {
    expect(getTasksByStatus(tasks, "todo")).toHaveLength(2);
    expect(getTasksByStatus(tasks, "in-progress")).toHaveLength(1);
    expect(getTasksByStatus(tasks, "done")).toHaveLength(1);
  });
});
