import logo from './logo.svg';
import './App.css';
import Head from './compount/head';
import Body from './compount/body';
import Foot from './compount/foot';
import { Outlet } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
   <Head></Head>
   <Outlet></Outlet>
   <Foot></Foot>
   </div>
  
  );
}

export default App;
