import React from 'react';
import { Advocate } from './page';
import TableRow from './tableRow';

interface TableBodyProps {
  searchTerm?: string;
  advocates: Array<Advocate>
}

const TableBody = ({searchTerm, advocates}: TableBodyProps) => {
  const filteredAdvocates = searchTerm ? advocates.filter((advocate: Advocate) => {
    const specialtiesWithTerm = advocate.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm));
    return (
      advocate.firstName.toLowerCase().includes(searchTerm) ||
      advocate.lastName.toLowerCase().includes(searchTerm) ||
      advocate.city.toLowerCase().includes(searchTerm) ||
      advocate.degree.toLowerCase().includes(searchTerm) ||
      advocate.specialties.includes(searchTerm) ||
      specialtiesWithTerm
    );
  }) : advocates;

  return (
    <tbody>
      {filteredAdvocates.map((advocate: Advocate) => {
        return (
          <TableRow advocate={advocate} />
        );
      })}
    </tbody>
  )
}

export default TableBody;