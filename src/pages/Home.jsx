import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const menuItems = [{ name: 'Evaluation', route: '/evaluation' }];

const eventItems = [
  {
    name: "Teacher's day celebration",
    time: '3 days time',
    POC: 'Mr Samuel Tan',
    position: 'HOD (Math)',
    location: '02-10',
  },
  {
    name: 'Team huddle',
    time: '3 days time',
    POC: 'Mrs Linda Tan',
    position: 'HOD (English)',
    location: 'Integrity Room',
  },
  {
    name: 'Birthday',
    time: '3 days time',
    POC: 'Ashley Lim',
    position: 'Kindergarten 1A',
    location: '02-20',
  },
  {
    name: 'Story telling workshop',
    time: '1 week time',
    POC: 'Mdm Wong Tat Na',
    position: 'External Trainer',
    location: '01-10',
  },
];

function Home() {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  });
  const name = useSelector((state) => state.user.username);
  return (
    <div className="text-center w-4/5 mx-auto">
      <h1 className="text-2xl ml-2 my-5">Welcome, {name}</h1>
      {/* <div className=" bg-center bg-[url('/landing-image.webp')] w-3/4 h-80 mx-auto hero-overlay"></div> */}
      <div className="stats shadow mx-auto">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path> */}
            </svg>
          </div>
          <div className="stat-title">Evaluation Progress</div>
          <div className="stat-value text-primary">76.2%</div>
          <div className="stat-desc">children have completed their evaluation</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg> */}
          </div>
          <div className="stat-title">Attention</div>
          <div className="stat-value text-red-600">4</div>
          <div className="stat-desc">children who failed the last evaluation</div>
        </div>

        <div className="stat">
          <div className="stat-title">Absentees</div>
          <div className="stat-value text-secondary">7</div>
          <div className="stat-desc">12% more than last month</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-1/2 mx-auto mt-5">
          <thead className=''>
            <tr>
              <th>Upcoming Events</th>
              <th>Date / Time</th>
              <th>POC</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {eventItems.map((event) => (
              <tr>
                <td>{event.name}</td>
                <td>{event.time}</td>
                <td>
                  {event.POC}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {event.position}
                  </span>
                </td>
                <td>{event.location}</td>
                <td><button className='btn btn-accent '>RSVP</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
