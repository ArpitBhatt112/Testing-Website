import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import Card from "./Card";


const Home=() => {
return (
<>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <b>
    <a className="navbar-brand" href="#">Arpit.com</a></b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/profile">My Profile</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          
        </li>
      </ul>
     
    </div>
    <div class="input-group" style={{width:"30%"}}>
    
  <input type="search" class="form-control rounded"  placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
 <button type="button"  class="btn btn-outline-primary">search</button>
</div>
  </div>
  
</nav>
<br/>


<b>{<Form/>}</b>
<br/>
<Card/>
</>
);
};
export default Home;