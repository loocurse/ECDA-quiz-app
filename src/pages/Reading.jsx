import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Gecko from '../assets/reading/gecko/Gecko.gif';
import Ant from '../assets/reading/ants/Ant.gif';

function Reading() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col align-center justify-center">
      {location.pathname.endsWith('reading') && (
        <>
          <button
            className="btn mx-auto mt-5 w-32"
            onClick={() => navigate('/')}
          >
            Go Back
          </button>
          <Link to="/reading/gecko">
            <img
              src={Gecko}
              alt="gecko"
              className="border w-48 my-5 mx-auto rounded"
            />
          </Link>
          <Link to="/reading/ant">
            <img
              src={Ant}
              alt="ant"
              className="border w-48 my-5 mx-auto rounded"
            />
          </Link>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Reading;
