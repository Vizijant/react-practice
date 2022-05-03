import React, {useState} from "react";
import './App.css';

const App = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [name, setName] = useState("");
  // TODO :: add error message ?
  return (
      <>
          <input
              style={{ display: "block" }}
              type="text"
              onChange={(e) => {
                  setName(e.target.value);
              }}
          />
          <button
              style={{ display: "block" }}
              onClick={() => setShowGreeting(!showGreeting)}>{!showGreeting ?  "Hide": "Show"}
          </button>
             <p>{showGreeting ? `Hi ${name}` : `` }</p>    
      </>
  );
};


export default App;
