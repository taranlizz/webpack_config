import { useState } from "react";
import classes from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { About } from "@/pages/about";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <About></About>
      <Outlet />
    </div>
  );
};
