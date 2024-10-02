import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Countme from './components/countriesmethod2';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Body from './components/body';
import Countries from './components/countries';
import Countri from './components/countri';
import Country from './components/countrymethod2';
import { useParams } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/body",
        element:<Body></Body>
      },
      {
        path:"/countries",
        element:<Countries></Countries>

      },
      {
        path:"/countri",
        element:<Countri></Countri>
      },
      {
        path:"/countme",
        element:<Countme></Countme>,
        children:[
          {
              path:'/countme/countdel/:cname',
              element:<Country></Country>
            }
        ]
      },
      
 
    ]
  }
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
