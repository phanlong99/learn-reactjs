import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const todoList = [
    {
      id: "1",
      title: "Eat",
    },
    {
      id: "2",
      title: "Code",
    },
    {
      id: "3",
      title: "Sleep",
    },
  ];
  return (
    <div>
      Todo Features
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeatures;
