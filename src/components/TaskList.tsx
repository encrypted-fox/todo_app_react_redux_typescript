import React from "react";

import TaskItem from "./TaskItem";

import { TaskListInterface } from "./interfaces";

const TaskList = (props: TaskListInterface) => {
  return (
    <div className={"task-list"}>
      <hr className={"task-list__title-decorator"}/>
      <h2 className={"task-list__title"}> {props.title} </h2>
      <ul className={"task-list__list"}>
        {props.tasks.map((task) => (
          <TaskItem
            handleTaskUpdate={props.handleTaskUpdate}
            handleTaskRemove={props.handleTaskRemove}
            handleTaskComplete={props.handleTaskComplete}
            handleTaskBlur={props.handleTaskBlur}
            task={task}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;