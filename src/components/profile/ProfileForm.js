import { useContext, useState } from "react";
import JoblyApi from "../../api/api";
import AuthedUserContext from "../context/AuthedUserContext";
import FlashMessage from "../flash_message/FlashMessage";
import "./ProfileForm.css";
function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(AuthedUserContext);
  const [msg, setMsg] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

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
      setStatusCode("success");
      setMsg("Successfully updated profile!");
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    } catch (err) {
      setMsg(err);
      setStatusCode("fail");
    }
  };
  return (
    <div className="profile-form">
      <h1 className="form-heading">Edit Profile</h1>
      {msg ? (
        <FlashMessage statusCode={statusCode} msg={msg}></FlashMessage>
      ) : null}
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
