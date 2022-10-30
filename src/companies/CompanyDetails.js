import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobListItems from "../jobs/JobListItems";
import Loader from "../Loader";

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
      <div className="CompanyBlock">
        <h1>{name}</h1>
        <h6>Employs: {numEmployees} employees</h6>
        <hr />
        <p>{description}</p>
      </div>
      <div>
        <h2>Available Jobs at {name}</h2>
        <JobListItems jobs={jobs} />
      </div>
    </div>
  );
}

export default CompanyDetails;
