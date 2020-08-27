import React from "react";
import "../scss/index.scss";
import "../scss/Main.scss";
import Atom from "../assets/svg/atom-solid.svg";

function Main() {
  return (
    <div className={"container"}>
      <Atom/>
      <div className={"title"}>
        <hr/>
        <h1 className={"title__h1"}> Список <span className={"title__h1_thin"}> задач </span></h1>
      </div>
      <div className={"container__add-icon"}>
        <div className={"container__add-icon__plus"}/>
      </div>
      <div className={"tasks-slider"}>
        <div className={"task"}>
          <hr className={"task__title-decorator"}/>
          <h2 className={"task__title"}> Задача 1 </h2>
          <ul className={"task__list"}>
            <li className={"task__list-elem"}>
              <input id={"task-1"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-1"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-2"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-2"}> Hello name <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-3"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-3"}> Hello <hr/></label>
            </li>
          </ul>
        </div>
        <div className={"task"}>
          <hr className={"task__title-decorator"}/>
          <h2 className={"task__title"}> Задача 1 </h2>
          <ul className={"task__list"}>
            <li className={"task__list-elem"}>
              <input id={"task-1"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-1"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-2"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-2"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-3"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-3"}> Hello <hr/></label>
            </li>
          </ul>
        </div>
        <div className={"task"}>
          <hr className={"task__title-decorator"}/>
          <h2 className={"task__title"}> Задача 1 </h2>
          <ul className={"task__list"}>
            <li className={"task__list-elem"}>
              <input id={"task-1"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-1"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-2"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-2"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-3"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-3"}> Hello <hr/></label>
            </li>
          </ul>
        </div>
        <div className={"task"}>
          <hr className={"task__title-decorator"}/>
          <h2 className={"task__title"}> Задача 1 </h2>
          <ul className={"task__list"}>
            <li className={"task__list-elem"}>
              <input id={"task-1"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-1"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-2"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-2"}> Hello <hr/></label>
            </li>
            <li className={"task__list-elem"}>
              <input id={"task-3"} type={"checkbox"} className={"task__list-elem-input"}/><label
              htmlFor={"task-3"}> Hello <hr/></label>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Main;
