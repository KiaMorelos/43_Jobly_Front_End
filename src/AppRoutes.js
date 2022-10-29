import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import AllCompanies from "./companies/AllCompanies";
import AllJobs from "./jobs/AllJobs";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignUpForm";
import ProfileForm from "./forms/ProfileForm";
import CompanyDetails from "./companies/CompanyDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<AllCompanies />} />
      <Route path="/companies/:companyHandle" element={<CompanyDetails />} />
      <Route path="/jobs" element={<AllJobs />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileForm />} />
    </Routes>
  );
}

export default AppRoutes;
