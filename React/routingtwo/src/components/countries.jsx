import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Countries() {
    var [c,setC]=useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
    .then(res=>res.json())
    .then(data=>
        setC(data)
    )
    },[])
  
   return <div style={{padding: "30px", paddingLeft:"70px"}}>
        {
            (
                c.map((d)=>{
                    return  <Link state={d}  to="/countri"> <li>{d.name.common}</li></Link>
                  
                })
            )
            
        }
    </div>
    
}

export default Countries;