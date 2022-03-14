import "./Rentals.css";
import { useEffect, useState } from "react";
import axios from "axios"

export const Rentals = () => {
const [houseData, setHouseData] = useState([])

  useEffect(()=>{
    getData();
  },[])
  const getData =()=>{

    // const [houses, setHouses] = useState({})
    axios.get("http://localhost:8080/houses").then((res)=>{
      setHouseData(res.data)
      console.log(res.data)

    })


  }
  // console.log(houses)
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {houseData.map((house, index) => {
            console.log("houuseData",houseData)
            return (
              <tr key = {house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.bachelore && house.married ? "Bachelore, Married" : (house.bachelore ? "Bachelore" : "Married")}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                  {/* <h1>{house.name}</h1> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
