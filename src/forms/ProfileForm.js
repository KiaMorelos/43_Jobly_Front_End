import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../api/api";
import AuthedUserContext from "../AuthedUserContext";

function ProfileForm() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthedUserContext);

  const [formData, setFormData] = useState({
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
    const { username } = currentUser;
    try {
      const updatedUser = await JoblyApi.updateUserInfo(username, formData);
      setCurrentUser(updatedUser);
    } catch (err) {
      return console.log(err);
    }

    navigate("/");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Confirm Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;
