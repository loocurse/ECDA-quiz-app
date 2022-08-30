import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dispatch } from '../store';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const submitHandler = () => {
    dispatch.user.login();
    navigate('/');
  };
  return (
    <div className="card bg-base-100 shadow-xl mx-5 mt-10">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn mt-3" onClick={submitHandler}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
