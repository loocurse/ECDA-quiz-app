import React from 'react';
import { useSelector } from 'react-redux';

function NavBar() {

  const username = useSelector(state => state.user.username)
  return (
    <div className="navbar bg-gray-50 shadow">
      <div className="navbar-start">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-54 ml-5"
          />
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost font-bold normal-case text-xl">SHINE A-PRAISE</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </button>
        <p className="font-bold mx-3 text-sm">{username}</p>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
