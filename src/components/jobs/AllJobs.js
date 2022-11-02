import { useEffect, useState } from "react";
import JoblyAPI from "../../api/api";
import SearchForm from "../search/SearchForm";
import JobListItems from "./JobListItems";
import Loader from "../loader/Loader";
import "./JobListItems.css";
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

  if (!jobs) return <Loader />;

  return (
    <div className="full-height">
      <SearchForm searchFunc={search} usedSearch={usedSearch} />
      <h1 className="page-header">Jobs</h1>
      {!usedSearchbox ? null : (
        <button onClick={() => resetSearch()} className="reset-search">
          Reset Search
        </button>
      )}
      {!jobs.length ? (
        <p className="no-results">
          Sorry, there are no jobs that match your search
        </p>
      ) : (
        jobs.map((job) => (
          <JobListItems
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
          />
        ))
      )}
    </div>
  );
}

export default AllJobs;
