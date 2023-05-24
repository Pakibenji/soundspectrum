import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import PrivateText from "./PrivateText";
import { useState } from "react";
const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);
  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        <PrivateText currUser={currUser} />
        {currUser.role === "admin" && (
          <a href="http://127.0.0.1:3000/avo">Admin</a>
        )}
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};
export default User;
