import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="text-black">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Login;
