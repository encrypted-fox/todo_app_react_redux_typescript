import React from "react";
import "../scss/index.scss";
import "../scss/Main.scss";
import Atom from "../assets/svg/atom-solid.svg";
import Icon from "../assets/svg/icon-add.svg";

function Main() {
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
