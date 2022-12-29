import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: "1",
      title: "Eat",
      status: "new",
    },
    {
      id: "2",
      title: "Code",
      status: "completed",
    },
    {
      id: "3",
      title: "Sleep",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleTodoClick = (todo, idx) => {
    //clone current array to new one

    const newTodoList = [...todoList];

    //toggle state

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status == "new" ? "completed" : "new",
    };

    //update state

    setTodoList(newTodoList);
  };

  return (
    <div>
      Todo List
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeatures;
