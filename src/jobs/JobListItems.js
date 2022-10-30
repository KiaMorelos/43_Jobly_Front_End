function JobListItems({ jobs }) {
  const job = jobs.map((job) => (
    <div key={job.id} className="JobBlock">
      <h3>{job.title}</h3>
      {job.companyName ? <h4>{job.companyName}</h4> : null}
      <p>
        Salary: {job.salary} | Equity: {job.equity}
      </p>
    </div>
  ));

  return job;
}

export default JobListItems;
