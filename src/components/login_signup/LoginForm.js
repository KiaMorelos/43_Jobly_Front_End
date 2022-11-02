import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
function LoginForm({ login }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
    const { username, password } = formData;
    const status = await login(username, password);
    setTimeout(() => {
      navigate("/companies");
    }, 500);

    setFormData({ username: "", password: "" });
  };
  return (
    <div className="login-signup-form">
      <h1 className="form-heading">Login</h1>
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
          <label>password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
          />
        </div>
        <button>login</button>
      </form>
    </div>
  );
}

export default LoginForm;
