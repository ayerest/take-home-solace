"use client";

import { useEffect, useState } from "react";

type Advocate = {
  id: number,
  firstName: string,
  lastName: string,
  city: string,
  degree: string,
  specialties: Array<string>,
  yearsOfExperience: number,
  phoneNumber: number,
  createdAt: string,
}

export default function Home() {
  const [advocates, setAdvocates] = useState<Array<Advocate>>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Array<Advocate>>([]);

  // TODO: handle loading / error states
  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const advocatesFiltered = advocates.filter((advocate: Advocate) => {
      const specialtiesWithTerm = advocate.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm));
      return (
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        specialtiesWithTerm
      );
    });

    setFilteredAdvocates(advocatesFiltered);
  };

  const onClick = () => {
    setFilteredAdvocates(advocates);
  };

  return (
    <main className="m-[24px]">
      <h1 className="text-lg">Solace Advocates</h1>
      <br />
      <br />
      <div>
        <label htmlFor="search" className="p-2">Search</label>
        <input className="border-2 border-solid mr-2" onChange={onChange} id="search" name="search" type="text" />
        <button className="border-2 border-solid p-1" type="button" onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
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
        <tbody>
          {filteredAdvocates.map((advocate: Advocate) => {
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
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
