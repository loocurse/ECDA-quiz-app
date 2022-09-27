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
    dispatch.user.login(credentials);
    navigate('/');
  };

  return (
    <div className="bg-[url('/login-background.png')] h-full">
      <div className="w-1/2 mx-auto">
        <p className="text-center pt-9 text-3xl italic">
          "Children are human beings to whom respect is due, superior to us by
          reason of their innocence and of the greater possibilities of their
          future."
        </p>
        <p className='text-center text-lg mt-5'>Maria Montessori, education Philosopher and Physician.</p>
      </div>

      <div className="card bg-base-100 opacity-90 shadow-xl w-1/2 mx-auto mt-5">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="form-control w-full">
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
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
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
              className="input input-bordered w-full"
            />
          </div>
          <button
            className="btn mt-3 bg-primary border-0 hover:bg-primary-focus"
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
