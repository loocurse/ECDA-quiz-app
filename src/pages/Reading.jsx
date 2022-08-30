import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Reading() {
  const location = useLocation();

  return (
    <div>
      {location.pathname.endsWith('reading') && (
        <>
          <Link to="/reading/gecko">
            <button className="btn w-32 mx-3 my-10">Gecko</button>
          </Link>
          <Link to="/reading/ant">
            <button className="btn w-32 mx-3 my-10">Ant</button>
          </Link>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Reading;
