import { useState, useEffect } from "react";
import SearchForm from "../search/SearchForm";
import CompanyListItems from "./CompanyListItems";
import JoblyAPI from "../../api/api";
import Loader from "../loader/Loader";
import "./CompanyListItems.css";
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
    <div className="full-height">
      <SearchForm searchFunc={search} usedSearch={usedSearch} />
      <h1 className="page-header">Companies</h1>
      {!usedSearchbox ? null : (
        <button onClick={() => resetSearch()} className="reset-search">
          Reset Search
        </button>
      )}

      {!companies.length ? (
        <p className="no-results">Sorry, there are no companies that match</p>
      ) : (
        <CompanyListItems companies={companies} />
      )}
    </div>
  );
}

export default AllCompanies;
