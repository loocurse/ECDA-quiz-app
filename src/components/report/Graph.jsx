import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import ratings from '../../configs/ratings.json'

function Graph() {
  return (
    <BarChart width={900} height={250} data={ratings}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="nursery1" fill="#8884d8" />
      <Bar dataKey="nursery2" fill="#82fa9d" />
      <Bar dataKey="kindeg1" fill="#82ca9d" />
    </BarChart>
  );
}

export default Graph;
