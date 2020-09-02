import React from "react";

import "../scss/index.scss";
import "../scss/Main.scss";

import Atom from "../assets/svg/atom-solid.svg";
import Icon from "../assets/svg/icon-add.svg";

import { TaskListInterface } from "./interfaces";


import TaskListSlider from "./TaskListSlider";

const Main = () => {
  const [tasks, setTasks] = React.useState<TaskListInterface[]>([
    {
      tasks: [
        { id: "1", text: "Task1", isCompleted: false },
        { id: "2", text: "Task2", isCompleted: true },
        { id: "3", text: "Task3", isCompleted: false },
        { id: "4", text: "Task4", isCompleted: false }
      ], id: "id", title: "title",
      handleTaskBlur: () => false,
      handleTaskComplete: handleTaskComplete,
      handleTaskRemove: () => false,
      handleTaskUpdate: () => false
    },
    {
      tasks: [
        { id: "5", text: "Task1", isCompleted: false },
        { id: "6", text: "Task2", isCompleted: true },
        { id: "7", text: "Task3", isCompleted: false },
        { id: "8", text: "Task4", isCompleted: false }
      ], id: "id1", title: "title",
      handleTaskBlur: () => false,
      handleTaskComplete: handleTaskComplete,
      handleTaskRemove: () => false,
      handleTaskUpdate: () => false
    },
    {
      tasks: [
        { id: "9", text: "Task1", isCompleted: false },
        { id: "10", text: "Task2", isCompleted: true },
        { id: "11", text: "Task3", isCompleted: false },
        { id: "12", text: "Task4", isCompleted: false }
      ], id: "id2", title: "title",
      handleTaskBlur: () => false,
      handleTaskComplete: handleTaskComplete,
      handleTaskRemove: () => false,
      handleTaskUpdate: () => false
    }
  ]);

  function handleTaskComplete(id: string) {
    const newTasksState: TaskListInterface[] = [...tasks];
    const newTask = newTasksState.find((taskList) => taskList.tasks.find((task) => task.id === id))!.tasks.find((task) => task.id === id);
    newTask!.isCompleted = !newTask!.isCompleted;
    setTasks(newTasksState);
  }

  return (
    <div className={"container"}>
      <div className={"container__logo-icon"}>
        <Atom/>
      </div>
      <div className={"title"}>
        <hr/>
        <h1 className={"title__text"}> Список <span className={"title__text_thin"}> задач </span></h1>
        <div className={"container__add-icon"}>
          <Icon/>
        </div>
        <p className={"title__text title__text_light"}> Добавить список </p>
      </div>
      <TaskListSlider
        handleTaskBlur={() => false}
        handleTaskComplete={handleTaskComplete}
        handleTaskRemove={() => false}
        handleTaskUpdate={() => false}
        taskLists={tasks}
      />
    </div>
  );
};

export default Main;
//TODO: remove implementation