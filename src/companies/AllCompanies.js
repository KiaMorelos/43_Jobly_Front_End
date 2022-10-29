import { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import CompanyListItems from "./CompanyListItems";
import JoblyAPI from "../api/api";
import Loader from "../Loader";

function AllCompanies() {
  const [companies, setCompanies] = useState([]);

  async function search(term) {
    const response = await JoblyAPI.getAllCompanies(term);
    setCompanies(response);
  }

  useEffect(function getAllCompanies() {
    search();
  }, []);

  if (!companies.length) return <Loader />;

  return (
    <div>
      <SearchForm />
      <h1>Companies</h1>
      <CompanyListItems companies={companies} />
    </div>
  );
}

export default AllCompanies;
