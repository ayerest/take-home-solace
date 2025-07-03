import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr className="bg-black text-white border-2 border-solid text-left">
        <th className="border-2 border-solid p-3">First Name</th>
        <th className="border-2 border-solid p-3">Last Name</th>
        <th className="border-2 border-solid p-3">City</th>
        <th className="border-2 border-solid p-3">Degree</th>
        <th className="border-2 border-solid p-3">Specialties</th>
        <th className="border-2 border-solid p-3">Years of Experience</th>
        <th className="border-2 border-solid p-3">Phone Number</th>
      </tr>
    </thead>
  )
}

export default TableHeader;