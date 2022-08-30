import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Gecko from '../assets/reading/gecko/Gecko.gif';
import Ant from '../assets/reading/ants/Ant.gif';

function Reading() {
  const location = useLocation();

  return (
    <div>
      {location.pathname.endsWith('reading') && (
        <>
          <Link to="/reading/gecko">
            <img src={Gecko} alt="gecko" className="border w-48 my-5 mx-auto" />
          </Link>
          <Link to="/reading/ant">
            <img src={Ant} alt="ant" className="border w-48 my-5 mx-auto" />
          </Link>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Reading;
