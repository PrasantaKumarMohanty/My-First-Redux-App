// import axios from 'axios';
import './App.css';
import { Showlist } from './MyComponent/Showlist';
import Navbar from './MyComponent/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <>


    <Router>
      <Navbar title="MyLibrary" />
      <Routes>
        <Route path="/" element={<Showlist />} /> 

      </Routes>
    </Router>


  </>

}

export default App;
