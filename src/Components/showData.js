import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppFakeAPI = () => {
  const [data, setData] = useState([]);

  const handleChange = (e) =>{
  let value =  e.target.value;
  let result = [];
  console.log("value = ", value)
  result = data.filter((d) => {
    return d.firstName.search(value) != -1;
    });
    setData(result);
  }
  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setData(json)
    })
  },[]);
  return (
      <div className="container">
          <h1>Enter FirstName to Search</h1>
          <input type="search"  onChange={handleChange}/>
          
          <ul>
          {data?.map((item,index)=>{
              return (
                <span><li key={index}>{item.id} {item.firstName} <Link to={`/api?id=${item.id}`}> Show Details</Link></li></span>
              )
          }
          )}
          </ul>
      </div>
   );
};

export default AppFakeAPI;
