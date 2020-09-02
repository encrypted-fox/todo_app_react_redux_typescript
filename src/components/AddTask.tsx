import React from "react";

import { TaskFormInterface, TaskInterface } from "./interfaces";

const TaskForm = (props: TaskFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [formState, setFormState] = React.useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      const newTodo: TaskInterface = {
        id: "1",
        text: formState,
        isCompleted: false
      };
      props.handleTaskCreate(newTodo);
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <div className="task-form">
      <input
        ref={inputRef}
        type="text"
        placeholder='Name new task'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  );
};

export default TaskForm;