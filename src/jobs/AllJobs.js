import { useEffect, useState } from "react";
import JoblyAPI from "../api/api";
import SearchForm from "../forms/SearchForm";
import JobListItems from "./JobListItems";
import Loader from "../Loader";

function AllJobs() {
  const [jobs, setJobs] = useState(null);
  const [usedSearchbox, setUsedSearchBox] = useState(false);

  useEffect(function getAllJobs() {
    search();
  }, []);

  async function search(term) {
    const response = await JoblyAPI.getAllJobs(term);
    setJobs(response);
  }

  const usedSearch = () => setUsedSearchBox(true);

  const resetSearch = () => {
    setUsedSearchBox(false);
    search();
  };

  console.log(jobs);

  if (!jobs) return <Loader />;

  return (
    <div>
      <SearchForm searchFunc={search} usedSearch={usedSearch} />
      <h1>Jobs</h1>
      {!usedSearchbox ? null : (
        <button onClick={() => resetSearch()}>Reset Search</button>
      )}
      {!jobs.length ? (
        <p>Sorry, there are no jobs that match your search</p>
      ) : (
        <JobListItems jobs={jobs} />
      )}
    </div>
  );
}

export default AllJobs;
