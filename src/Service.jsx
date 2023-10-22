import React from "react";
import { useLocation } from "react-router-dom";
const Service=() => {
    const {location}=useLocation();

return (
<>
<h1>Routing Practice</h1>
<h1>This is Service{location} Page</h1>

</>
);
};
export default Service;