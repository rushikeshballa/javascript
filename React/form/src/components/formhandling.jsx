import React from "react";
import { useFormik } from "formik"
function Form() {

    var details =useFormik({
                        initialValues:{
                            firstname:"",
                            lastname:"",
                            age:"",
                        }, 
                        onSubmit: (val)=> {
                            console.log(val);
                            console.log(details);
                            
                        }       

                            }
                        )


                        return(
                            <div>
                                <h1>form</h1>
                                <form onSubmit={details.handleSubmit}>
                                <input type="text" name="firstname" onChange={details.handleChange} />
                                <br />
                                <input type="text" name="lastname" onChange={details.handleChange}/>
                                <br />
                                <input type="number" name="age" onChange={details.handleChange} />
                                <br />
                                <button>sumit</button>
                                </form>
                                
                            </div>
                        )
    
}
export default Form;