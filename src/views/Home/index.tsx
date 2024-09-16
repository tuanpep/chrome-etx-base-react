import { Button } from "@/components/ui/button";
import { useStore } from "@/store";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <Button onClick={increment}>Increment</Button>
      </div>
      <h1>Home</h1>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Home;
