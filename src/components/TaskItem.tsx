import * as React from "react";

import { TaskItemInterface } from "./interfaces";

const TaskItem = (props: TaskItemInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [inputState, setInputState] = React.useState(props.task.isCompleted);

  function handleInputChange() {
    props.handleTaskComplete(inputRef.current!.id);
    setInputState((prevState) => !prevState);
  }

  return (
    <li
      key={props.task.id}
      className={"task-list__list-elem"}
    >
      <input id={`${props.task.id}`}
             name={`task-${props.task.id}`}
             className={"task-list__list-elem-input"}
             type={"checkbox"}
             checked={inputState}
             onChange={handleInputChange}
             ref={inputRef}
      />
      <label htmlFor={`task-${props.task.id}`}>
        {props.task.text}
        <hr/>
      </label>
    </li>
  );
};
export default TaskItem;