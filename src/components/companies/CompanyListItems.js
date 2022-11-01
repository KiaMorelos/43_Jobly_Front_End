import { Link } from "react-router-dom";
import "./CompanyListItems.css";
function CompanyListItems({ companies }) {
  const company = companies.map((co) => (
    <div key={co.handle} className="CompanyBlock">
      <h2>{co.name}</h2>
      <p>{co.description}</p>
      <Link to={`/companies/${co.handle}`}>View</Link>
    </div>
  ));

  return company;
}

export default CompanyListItems;
