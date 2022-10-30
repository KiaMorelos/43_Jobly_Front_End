import { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import CompanyListItems from "./CompanyListItems";
import JoblyAPI from "../api/api";
import Loader from "../Loader";

function AllCompanies() {
  const [companies, setCompanies] = useState(null);
  const [usedSearchbox, setUsedSearchBox] = useState(false);

  useEffect(function getAllCompanies() {
    search();
  }, []);

  async function search(term) {
    const response = await JoblyAPI.getAllCompanies(term);
    setCompanies(response);
  }

  const usedSearch = () => setUsedSearchBox(true);

  const resetSearch = () => {
    setUsedSearchBox(false);
    search();
  };

  if (!companies) return <Loader />;

  return (
    <div>
      <SearchForm searchFunc={search} usedSearch={usedSearch} />
      <h1>Companies</h1>
      {!usedSearchbox ? null : (
        <button onClick={() => resetSearch()}>Reset Search</button>
      )}

      {!companies.length ? (
        <p>Sorry, there are no companies that match</p>
      ) : (
        <CompanyListItems companies={companies} />
      )}
    </div>
  );
}

export default AllCompanies;
