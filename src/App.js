import "./App.css";
import Button from "./components/Buton";
import Navbar from "./components/Navbar";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  let varialt = "HELLO CSCC";
  const [text, setText] = React.useState("Hello World");
  const [array, setArray] = React.useState([1, 2, 3, 4, 5]);

  return (
    <div className="App">
      <Navbar />
      <h1>{varialt}</h1>
      <h1>{text}</h1>
      <Button />
      <button
        onClick={() => {
          varialt = "HELLO WORLD";
          setText(text + "Hello");
          console.log(varialt);
          setArray(array.concat(array.length + 1));
        }}
      >
        change
      </button>

      <button
        onClick={() => {
          setText("Hello World");
        }}
      >
        reset
      </button>
      {array.map((item, i) => (
        <h1 key={i}>{item}</h1>
      ))}
    </div>
  );
}

export default App;
