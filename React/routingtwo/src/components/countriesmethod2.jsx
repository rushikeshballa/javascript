import React from "react";
import { Link, Outlet } from "react-router-dom";

function Countme() {
    var [f,setF]=React.useState([]);

  React.useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
    .then(res=>res.json())
    .then(data=>
        setF(data)
    )
    },[])
  
   return <div style={{padding: "30px", paddingLeft:"70px"}}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
        <div>
            {
            (
                f.map((d)=>{
                    return  <Link state={d}  to={`countdel/${d.name.common}`}> <li>{d.name.common}</li></Link>
                  
                })
            )
            
        }
        </div>
        <div>
             <Outlet></Outlet>
        </div>
       
    </div>
       
    </div>
    
}

export default Countme;
