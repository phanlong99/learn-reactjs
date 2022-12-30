import React from "react";
import { Link, NavLink, Route, Routes, Redirect } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeatures from "./features/Todo";

function App() {
  return (
    <div className='App'>
      header
      <p>
        <NavLink to='/todo'>Todo</NavLink>
      </p>
      <p>
        <NavLink to='/album'>Album</NavLink>
      </p>
      <Routes>
        <Route path='/todo' element={<TodoFeatures />} />
        <Route path='/album' element={<AlbumFeature />} />
      </Routes>
      footer
    </div>
  );
}

export default App;
