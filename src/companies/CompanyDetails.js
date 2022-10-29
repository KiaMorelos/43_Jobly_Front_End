import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
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
  console.log(company.name);
  return (
    <div className="CompanyBlock">
      <h1>{name}</h1>
      <h6>Employs: {numEmployees} employees</h6>
      <hr />
      <p>{description}</p>
    </div>
  );
}

export default CompanyDetails;
