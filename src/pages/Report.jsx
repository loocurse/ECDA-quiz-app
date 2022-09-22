import React from 'react';
import { useSelector } from 'react-redux';

import childPhoto from '../assets/child_photo.webp';
import CommentsTable from '../components/report/CommentsTable';
import Graph from '../components/report/Graph';
import RatingsTable from '../components/report/RatingsTable';
import StudentSelection from '../components/StudentSelection';

function Report() {
  const student = useSelector((state) => state.report.student);

  if (!student) {
    return <StudentSelection type={'report'} />;
  }

  return (
    <div className="mx-9">
      <div className="flex flex-row m-9 justify-center">
        <img src={childPhoto} alt="" className="w-48" />
        <div className="ml-3">
          <p className="font-bold text-xl">{student}</p>
          <p className="">Centre: Yishun Little Seeds </p>
          <p className="">Class: K2, Class Grace </p>
          <p className="">Date of birth: 1 Jan 2017</p>
          <p className="">Joined APS: 1 Jan 2022</p>
        </div>
        <div className="ml-3">
          <p className="">
            Residential Address: Blk 331 Clementi Ave 2 #08-08 S77331
          </p>
          <p className="">No. Of siblings: 2</p>
          <p className="">Favorite foods: Chicken rice, Soyabean milk</p>
          <p className="">Allergy: Gluten intolerant, Peanuts</p>
        </div>
      </div>
      <Graph />
      <RatingsTable />
      <CommentsTable />
    </div>
  );
}

export default Report;
