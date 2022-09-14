import React from 'react';

function CommentsTable() {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/2">
        <div className="m-5">
          <p className="font-bold">Commendable Areas observed</p>
          <p>
            MaryAnn has increased in her confidence in reading in front of her
            classmates.... She is a delightful and animated reader. MaryAnn won
            the interclass spelling bee competition!
          </p>
        </div>
        <div className="m-5">
          <p className="font-bold">Potential areas</p>
          <p>
            MaryAnn loves to create. If she creates her own materials, this
            would boost her confidence in this area even more
          </p>
        </div>
      </div>
      <div className="">
        <div className="m-5">
          <p className="font-bold">
            Suggested areas for parents to positively encourage at home:
          </p>
          <p>
            1. To read books aloud to siblings to boost her confidence <br />
            2. Mini projects - create a short story book <br />
            3. Mini competitions to have more difficult words to challenge her spelling
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentsTable;
