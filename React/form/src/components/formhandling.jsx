import React from "react";
import { useFormik } from "formik"
import * as Yup from "yup";
function For() {

    var details =useFormik({
                        initialValues:{
                            firstname:"",
                            lastname:"",
                            age:"",
                        }, 
                        validationSchema:Yup.object({
                            firstname:Yup.string().required("needed").min(3,"nead more"),
                            lastname:Yup.string("only letters").min(3,"more").max(5,"less").required("its requeied")
                        }),
                        onSubmit: (val)=> {
                            console.log(val);
                        }       

                            }
                        )


                        return(
                            <div>
                                <h1>form</h1>
                                <form onSubmit={details.handleSubmit}>
                                <input type="text" {...details.getFieldProps("firstname")} />
                                <br />
                                <span>{details.touched.firstname && details.errors.firstname}</span> 
                               
                                <br />
                                <input type="text" name="lastname" onChange={details.handleChange}/>
                                <br />
                                <p>{details.errors.lastname}</p>
                                <input type="number" name="age" onChange={details.handleChange} />
                                <br />
                                <button>sumit</button>
                                </form>
                                
                            </div>
                        )
    

}
export default For;