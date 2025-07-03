"use client";

import { useEffect, useState } from "react";
import Search from "./search";
import TableHeader from "./tableHeader";
import TableBody from './tableBody';

export type Advocate = {
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

type AdvocatesDataState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error', error: Error }
  | { status: 'success', advocates: Array<Advocate> }

export default function Home() {
  const [advocatesData, setAdvocatesData] = useState<AdvocatesDataState>({ status: 'idle' })
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    let didCancel = false;
    setAdvocatesData({ status: 'loading'})
    console.log("fetching advocates...");
    if (!didCancel) {
      fetch("/api/advocates").then((response) => {
        response.json().then((jsonResponse) => {
          setAdvocatesData({ status: 'success', advocates: jsonResponse.data})
        }).catch(error => {
          setAdvocatesData({ status: 'error', error})
        })
      });
    }
    return () => {
      didCancel = true;
    }
  }, []);

  return (
    <main className="m-[24px]">
      <h1 className="text-xl mb-10">Solace Advocates</h1>
      <Search setSearchTerm={setSearchTerm} />
      {advocatesData.status === 'loading' ? "Loading advocates..." : null}
      {advocatesData.status === 'error' ? advocatesData.error.message : null}
      {advocatesData.status === 'success' ?
        <table>
          <TableHeader />
          <TableBody searchTerm={searchTerm} advocates={advocatesData.advocates} />
        </table> : null
      }
    </main>
  );
}
