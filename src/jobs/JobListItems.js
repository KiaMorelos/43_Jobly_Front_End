import AuthedUserContext from "../AuthedUserContext";
import { useContext, useState, useEffect } from "react";

function JobListItems({ id, title, companyName, salary, equity }) {
  const { didUserAlreadyApply, applyToJob } = useContext(AuthedUserContext);
  const [applied, setApplied] = useState();

  useEffect(
    function userApplied() {
      setApplied(didUserAlreadyApply(id));
    },
    [id, didUserAlreadyApply]
  );

  async function apply(evt) {
    if (didUserAlreadyApply(id)) return;
    applyToJob(id);
    setApplied(true);
  }
  return (
    <div key={id} className="JobBlock">
      <h3>{title}</h3>
      {companyName ? <h4>{companyName}</h4> : null}
      <p>
        Salary: {salary} | Equity: {equity}
      </p>
      {applied ? (
        <button>Applied!</button>
      ) : (
        <button onClick={apply}>Apply</button>
      )}
    </div>
  );
}

export default JobListItems;
