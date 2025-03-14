import React, { useState } from "react";
import { Link } from "react-router-dom";
import userLogin from "../../hooks/userLogin";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = userLogin();

  const handeSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      {/* <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 
      bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'> */}

      {/* <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"> */}
      <div className="w-full p-6 rounded-lg shadow-md glass-effect">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-200">Cascades</span>
        </h1>

        <form onSubmit={handeSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            You Don't have an account you say?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
