import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Phonics', route: '/phonics' },
  { name: 'Reading', route: '/reading' },
  { name: 'Games', route: '/games' },
  { name: 'Art', route: '/art' },
];

function Landing() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  });
  return (
    <div>
      {menuItems.map((item) => (
        <Link to={item.route} key={item.name}>
          <button className="btn block w-32 my-3 mx-auto">{item.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default Landing;
