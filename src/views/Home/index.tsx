import { useStore } from "@/store";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
      <h1>Home</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Home;
