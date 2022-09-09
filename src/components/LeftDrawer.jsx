import React from 'react'
import dashboard from '../assets/monitor.png';
import evaluationIcon from '../assets/check-list.png';
import { Link } from 'react-router-dom';

function LeftDrawer() {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-base-content">
        <h2 className="text-white font-bold text-xl mb-5">Teacher's Portal</h2>
        <li>
          <Link className="text-white" to="evaluation">
            <img src={evaluationIcon} alt="" className="w-6" />
            Evaluation
          </Link>
        </li>
        <li>
          <Link className="text-white" to="dashboard">
            <img src={dashboard} alt="" className="w-6" />
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftDrawer