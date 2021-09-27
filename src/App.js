
import './App.css';
import Navbar from './Navbar';
import Icons from './Icons';
import Name from './Name';
import MainContent from './MainContent';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div class="root" >
      <Name/>
        <Icons/>
      <MainContent />
      <Navbar />  
 
   
    

    
     </div>

  );
}

export default App;
