import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./UserSlice";

function UserData() {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState(user);
  const [isModified, setIsModified] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setIsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.id) dispatch(saveUser(userData));
    else dispatch(saveUser({ ...userData, id: crypto.randomUUID() }));
    setIsModified(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isModified) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isModified]);

  return (
    <div className="user-form-main">
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => handleChange(e)}
        />
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={userData.phone}
          onChange={(e) => handleChange(e)}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </form>
    </div>
  );
}

export default UserData;
