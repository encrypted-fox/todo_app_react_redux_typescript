import React from "react";

import TaskList from "./TaskList";

import { TaskListSliderInterface } from "./interfaces";

const TaskListSlider = (props: TaskListSliderInterface) => {
  return (
    <div className="task-slider">
      {props.taskLists.map((taskList) => (
        <TaskList
          handleTaskUpdate={props.handleTaskUpdate}
          handleTaskRemove={props.handleTaskRemove}
          handleTaskComplete={props.handleTaskComplete}
          handleTaskBlur={props.handleTaskBlur}
          tasks={taskList.tasks}
          id={taskList.id}
          title={taskList.title}
          key={taskList.id}
        />
      ))}
    </div>
  );
};

export default TaskListSlider;