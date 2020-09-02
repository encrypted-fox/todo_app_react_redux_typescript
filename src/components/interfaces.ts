import React from "react";

export interface TaskInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TaskFormInterface {
  tasks: TaskInterface[];
  handleTaskCreate: (task: TaskInterface) => void;
}

export interface TaskListSliderInterface {
  handleTaskUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTaskRemove: (id: string) => void;
  handleTaskComplete: (id: string) => void;
  handleTaskBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  taskLists: TaskListInterface[];
}

export interface TaskListInterface {
  id: string;
  title: string;
  handleTaskUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTaskRemove: (id: string) => void;
  handleTaskComplete: (id: string) => void;
  handleTaskBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tasks: TaskInterface[];
}

export interface TaskItemInterface {
  task: TaskInterface;
  handleTaskUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTaskRemove: (id: string) => void;
  handleTaskComplete: (id: string) => void;
  handleTaskBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}