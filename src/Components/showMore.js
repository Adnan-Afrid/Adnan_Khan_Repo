import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './showMore.css'

function useQuery(){
    return new URLSearchParams(useLocation().search)
}
const AppDetailsShow = () => {
 let query = useQuery();
 const [item, setItem] = useState('');
 
 useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters/'+query.get('id'))
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setItem(json)
    })
  },[query]);

    return ( 
        <div className="details_wrapper">
            <h1>Details</h1>
            <>
            <h2><strong>ID:</strong> {query.get('id')}</h2>
            <h2><strong>FirstName: </strong> {item.firstName}</h2>
            <h2><strong>LastName:</strong> {item.lastName}</h2>
            </>
        </div>
     );
}
 
export default AppDetailsShow;