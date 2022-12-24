import React from "react";
import Colorbox from "./components/box/Colorbox";
import "./App.css";

function App() {
  return (
    <section>
      <Colorbox color='red' height='100px' />
      <Colorbox color='blue' height='200px' />
      <Colorbox color='green' height='300px' />
    </section>
  );
}

export default App;
