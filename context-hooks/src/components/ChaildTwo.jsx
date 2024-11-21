import React, { useContext } from 'react';
import { data, data1 } from '../App';

function ChildTwo() {
  const put = useContext(data);
  const put1 = useContext(data1);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">I'm {put}</h1>
      <div className="mt-2 text-lg text-gray-700">My surname is {put1}</div>
    </div>
  );
}

export default ChildTwo;
