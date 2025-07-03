import React from 'react';
import { Advocate } from './page';

interface SearchProps {
  // advocates: Array<Advocate>
  // setFilteredAdvocates: (advocatesFiltered: Array<Advocate>) => void
  setSearchTerm: (searchTerm: string) => void
}

const Search = ({setSearchTerm}: SearchProps) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    // const advocatesFiltered = advocates.filter((advocate: Advocate) => {
    //   const specialtiesWithTerm = advocate.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm));
    //   return (
    //     advocate.firstName.toLowerCase().includes(searchTerm) ||
    //     advocate.lastName.toLowerCase().includes(searchTerm) ||
    //     advocate.city.toLowerCase().includes(searchTerm) ||
    //     advocate.degree.toLowerCase().includes(searchTerm) ||
    //     advocate.specialties.includes(searchTerm) ||
    //     specialtiesWithTerm
    //   );
    // });

    // setFilteredAdvocates(advocatesFiltered);
  };

  const onClick = () => {
    setSearchTerm('');
  };

  return (
    <div className="mb-10">
      <label htmlFor="search" className="p-2">Search</label>
      <input className="border-2 border-solid mr-2" onChange={onChange} id="search" name="search" type="text" />
      <button className="border-2 border-solid p-1" type="button" onClick={onClick}>Reset Search</button>
    </div>
  )
}

export default Search;