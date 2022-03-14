import { useState } from "react";
import axios from "axios";



export const AddHouse = () => {

  const [houseData, setHouseData] = useState({
    name: "",
    ownerName : "",
    address : "",
    areaCode : "",
    rent : "",
    bachelor : "",
    married : "",
    img : "",
  });


  const handleChange = (e)=>{
    const {className, value } = e.target;

    setHouseData({
      ...houseData,
      [className] :value,
    })
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(houseData);


    axios.post("http://localhost:8080/houses", houseData).then(()=>{
        alert("house created Successfully")
    });
}


  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handleChange} />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName"  onChange={handleChange}/>
        <br />
        <label>address</label>
        <input  type="text" className="address"  onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode"  onChange={handleChange} />
        <br />
        <label>rent</label>
        <input  type="text" className="rent"  onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={"bachelor"} type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input checked={"married"} type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image"  onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
