import React from "react";
import { Route , Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Profile from "./Profile";
import Error from "./Error";

const App=() => {
return (
<>
<Routes>
<Route path="/" Component={Home}/>
 <Route exact  path="/about" Component={About}/>
 <Route path="/service" Component={Service}/>
 <Route path="/profile" Component={Profile}/>
 <Route path="*" Component={Error}/>
 
  </Routes>
  </>
);

};
export default App;
