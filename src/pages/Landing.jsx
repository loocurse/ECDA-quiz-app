import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [{ name: 'Evaluation', route: '/evaluation' }];

function Landing() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  });
  const name = useSelector((state) => state.user.username);
  return (
    <div>
      <h1 className="text-2xl ml-2 mt-5">Welcome, {name}</h1>
      {menuItems.map((item) => (
        <Link to={item.route} key={item.name}>
          <button className="btn block w-32 my-3 mx-auto">{item.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default Landing;
