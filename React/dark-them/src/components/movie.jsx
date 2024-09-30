import React from "react";
import da from "./data";

function Mov() {
    var [a,serA]=React.useState(da);

    return(
        <div  style={{display:"flex",padding:"15px"}}>
            {
                da.map((a)=>{
                    return <div style={{margin:"10px"}} >
                        <img style={{width:"300px",height:"400px"}} src={a.poster} alt="" />
                        
                    </div>
                })
            }
        </div>
    )


}
export default Mov;