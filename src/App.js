import React from "react";
import { BrowserRouter} from "react-router-dom";

import Home from "./Home";




function App() {
  return (
    <>
    
    
    <BrowserRouter basename="/">
      <Home />
    </BrowserRouter>
    </>
    
    
 
      
  );
}

export default App;
















/*function App() {
  return (<div>
    <BrowserRouter>
        <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/Takeaway" element={<Take/>}/>
        <Route path="/Schedule" element={<Time/>}/>
        <Route path="/Overview" element={<OverPage/>}/>
        </Routes>
        
    </BrowserRouter>
    </div>
    
  );
};

export default App;*/
