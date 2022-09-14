import React from 'react';
import ReactStars from 'react-rating-stars-component';
import ratings from '../../configs/ratings.json'

function RatingsTable() {
  return (
    <div className="w-1/2 m-5 mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating) => (
              <tr>
                <th>{rating.name}</th>
                <td>
                  <ReactStars
                    count={5}
                    size={24}
                    value={rating.kindeg1}
                    activeColor="#ffd700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RatingsTable;
