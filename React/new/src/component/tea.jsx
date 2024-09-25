import React from "react";
import Tem from "./temp";
import Pl from "./pla";
function Te(a) {

    return <div style={{border:"1px solid"}}>
        {
        a.a.map((b)=>{
        return <div>
            <h1>{b.teamname}</h1>
            <Pl p={b}></Pl>
        </div>
    })
    }
    </div>
   

}
export default Te