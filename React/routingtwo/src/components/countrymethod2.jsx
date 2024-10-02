import React, { useDebugValue, useState } from "react";
import { useParams } from "react-router-dom";
function Country() {
    var x= useParams()
    var [a,setA]=React.useState({})
    var [lod,setl]=React.useState(false)
    React.useEffect(()=>{ 
    fetch(`https://restcountries.com/v3/name/${x.cname}`)
    .then(res=>res.json())
    .then(data=>{setA(data[0])})
    setl(true);
     },[x])
     console.log(a);
     return <div>
        <h1>{x.cname}</h1>
        {/* <h1>{a.capital[0]}</h1> */}
       
     </div>
}
export  default Country;