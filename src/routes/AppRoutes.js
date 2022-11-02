import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
import Home from ".././components/home/Home";
import AllCompanies from ".././components/companies/AllCompanies";
import AllJobs from ".././components/jobs/AllJobs";
import LoginForm from ".././components/login_signup/LoginForm";
import SignupForm from ".././components/login_signup/SignUpForm";
import ProfileForm from ".././components/profile/ProfileForm";
import CompanyDetails from ".././components/companies/CompanyDetails";

function AppRoutes({ login, signup }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/companies" element={<AllCompanies />} />
        <Route path="/companies/:companyHandle" element={<CompanyDetails />} />
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Route>
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
    </Routes>
  );
}

export default AppRoutes;
