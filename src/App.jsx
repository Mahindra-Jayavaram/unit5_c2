import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(true);
  // const [rent, setRent] = useState(false);

  return (
    <div className="App">
      {/* <AddHouse /> */}
      {/* <AddHouse/> */}
      {display ? <Rentals/> : <AddHouse />  }
      <button className="toggleForm" onClick={()=>{
        setDisplay(display ? false : true)
      }}>
        {/* Show text Add House or Show Rentals based on state */}
        {display ?  "Add house" : "Rent"}
      </button>
      {/* {display ? <Rentals/>:<AddHouse />  }

      <button className="toggleForm" onClick={()=>{
        setRent(rent ? true : false)
      }}>rent</button> */}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
