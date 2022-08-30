import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dispatch } from '../store';
import { userTypes } from '../configs/user.config';

const roles = [
  {
    title: 'Teacher',
    code: userTypes.TEACHER,
  },
  {
    title: 'Child',
    code: userTypes.CHILD,
  },
  {
    title: 'Parent',
    code: userTypes.PARENT,
  },
];

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    userType: '',
  });

  const navigate = useNavigate();
  const submitHandler = () => {
    dispatch.user.login(credentials);
    navigate('/');
  };

  if (!credentials.userType) {
    return (
      <div className="flex flex-col w-1/2 mx-auto text-center mt-9 ">
        <h1>Logging in as</h1>
        {roles.map((role) => (
          <button
            key={role.code}
            className="btn mt-5"
            onClick={() =>
              setCredentials({ ...credentials, userType: role.code })
            }
          >
            {role.title}
          </button>
        ))}
      </div>
    );
  }

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
