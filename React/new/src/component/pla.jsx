import React from "react";
import Tem from "./temp";
import Te from "./tea";


function Pl(a) {
 
  return  <div style={{padding:"15px"}}>
        {
            a.p.players.map((c)=>{
                return <li>{c}</li>
            })
        }
    </div>

}
export default Pl