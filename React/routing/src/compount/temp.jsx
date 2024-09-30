import React from "react"
import Te from "./tea";
function Tem() {
    
    var [a,setA]=React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3000/ipl").then((res)=>{
        res.json().then((data)=>{
            setA([...data]);
        })

    })
    },[])
   
    
    return(
        <div style={{padding:"15px"}}>
            <div style={{border:"1px solid", padding:"15px"}}>
            <h1>Welcome to Edupoly React</h1>
            <Te a={a}></Te>
           </div>
        </div>
        
    )

}
export default Tem
