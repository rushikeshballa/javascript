import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/head';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
