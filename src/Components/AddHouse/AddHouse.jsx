import { useState, useEffect} from "react";
import axios from "axios";



export const AddHouse = () => {

  const [houseData ,setHouseData] = useState({
    name: "",
    ownerName : "",
    address : "",
    areaCode : "",
    rent : "",
    bachelor : "",
    married : "",
    image : "",
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
    // console.log(houseData);


    axios.post("http://localhost:8080/houses", houseData).then(()=>{
        alert("house created Successfully")
    });
}



  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={houseData.name} onChange={handleChange} />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" value={houseData.ownerName}   onChange={handleChange}/>
        <br />
        <label>address</label>
        <input  type="text" className="address" value={houseData.address}  onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" value={houseData.areaCode}  onChange={handleChange} />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" value={houseData.rent}   onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={"bachelor"} type="checkbox" value={houseData.bachelor}  className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input checked={"married"} type="checkbox"  value={houseData.married} className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image" value={houseData.image}  onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
