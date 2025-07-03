import React from 'react';
import { Advocate } from './page';

interface SearchProps {
  setSearchTerm: (searchTerm: string) => void
}

const Search = ({setSearchTerm}: SearchProps) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
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