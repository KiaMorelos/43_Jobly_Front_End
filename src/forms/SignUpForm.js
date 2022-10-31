import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({ signup }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const status = await signup(formData);
    navigate("/companies");
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={formData.username}
          />
        </div>
        <div>
          <label>first name</label>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div>
          <label>last name</label>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div>
          <label>email</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={formData.email}
          />
        </div>
        <div>
          <label>password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
          />
        </div>
        <button>sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
