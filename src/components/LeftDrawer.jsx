import React from 'react';
import dashboard from '../assets/monitor.png';
import evaluationIcon from '../assets/check-list.png';
import home from '../assets/home.png';
import { Link } from 'react-router-dom';

const routes = [
  { name: 'Home', link: '/', icon: home },
  { name: 'Evaluation', link: '/evaluation', icon: evaluationIcon },
  { name: 'Dashboard', link: '/dashboard', icon: dashboard },
  { name: 'Report', link: '/report', icon: evaluationIcon },
];

function LeftDrawer() {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-base-content">
        <h2 className="text-white font-bold text-xl mb-5">Teacher's Portal</h2>
        {routes.map((route) => (
          <li key={route.name}>
            <Link className="text-white" to={route.link}>
              <img src={route.icon} alt="" className="w-6" />
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftDrawer;
