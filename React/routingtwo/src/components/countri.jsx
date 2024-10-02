import React from "react";
import { useLocation } from "react-router-dom";


function Countri() {
 var x=useLocation()  

 console.log(x);
 
 return(
    <div>
       <h1>{x.state.name.common}</h1>
    </div>
 )

}
export default Countri