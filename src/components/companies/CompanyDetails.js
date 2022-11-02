import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api/api";
import JobListItems from "../jobs/JobListItems";
import Loader from "../loader/Loader";
import "./CompanyListItems.css";
function CompanyDetails() {
  const { companyHandle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyDetails() {
      async function getCompany() {
        const response = await JoblyApi.getCompany(companyHandle);
        setCompany(response);
      }
      getCompany();
    },
    [companyHandle]
  );

  if (!company) return <Loader />;

  const { name, description, numEmployees, jobs } = company;
  return (
    <div>
      <div className="CompanyDetails">
        <h1>{name}</h1>
        <h6>Employs: {numEmployees} employees</h6>
        <p>{description}</p>
      </div>
      <div className="available">
        <h2>Available Jobs at {name}</h2>
        {jobs.map((job) => (
          <JobListItems
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyDetails;
