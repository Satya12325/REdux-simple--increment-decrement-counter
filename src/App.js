import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";
import React from "react";
import Counter from "./Count/Counter";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <Counter />
    </div>
  );
}
