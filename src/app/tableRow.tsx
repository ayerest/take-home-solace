import React from 'react';
import { Advocate } from './page';

interface TableRowProps {
  advocate: Advocate
}

const TableRow = ({ advocate }: TableRowProps) => {
  return (
    // TODO: use id from db for key
    <tr className="border-2 border-solid p-3" key={advocate.phoneNumber}>
      <td className="border-2 border-solid p-3">{advocate.firstName}</td>
      <td className="border-2 border-solid p-3">{advocate.lastName}</td>
      <td className="border-2 border-solid p-3">{advocate.city}</td>
      <td className="border-2 border-solid p-3">{advocate.degree}</td>
      <td className="border-2 border-solid p-3">
        <ul className="list-inside list-disc">
          {advocate.specialties.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </td>
      <td className="border-2 border-solid p-3">{advocate.yearsOfExperience}</td>
      <td className="border-2 border-solid p-3">{advocate.phoneNumber}</td>
    </tr>
  )
}

export default TableRow;