import React from "react";
import { Formik ,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";

function Fom() {
    var initialValues={
        firstname:"",
        lastname:"",
        age:"",
    }
    var onSubmit=((value)=>{console.log(value)})
    var validationSchema=Yup.object({
        firstname:Yup.string().required("requried")
    })
    

    return <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
       {
        (el)=>{
            return <Form>
         <Field name="firstname"></Field>
         <ErrorMessage name="firstname" component="div"></ErrorMessage>
        <br />
        <Field name="lastname"></Field>
        <br />
        <Field name="age"></Field>
        <br />
        <button>sumit</button>
            </Form>
        }
       }
        </Formik>
    </div>
    
}
export default Fom;