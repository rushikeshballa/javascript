import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Bo from './compount/body2';



import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Body from './compount/body';
import Home from './compount/home';


const router =createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/body",
        element: <Body></Body>
      },
      {
        path:"/body2",
        element:<Bo></Bo>
      },
      {
        path:"/home",
        element:<Home></Home>
      }
    ]
  }

])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
