import { useState } from "react";
import User from "./components/User";
import Radio from "./components/Radio";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
      <Radio />
    </div>
  );
};
export default App;
