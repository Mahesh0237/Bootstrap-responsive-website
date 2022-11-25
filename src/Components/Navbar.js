import React from 'react'

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a href="" className="navbar-brand ms-3" style={{color: "#ebbd34"}}>IHUBTALENT</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myid"><span className="navbar-toggler-icon"></span></button>

            <ul className="navbar-nav collapse navbar-collapse" id="myid">
                <li className="nav-item mx-auto"><a href="#home" className="nav-link"> HOME</a></li>
                <li className="nav-item mx-auto"><a href="#service" className="nav-link"> SERVICES</a></li>
                <li className="nav-item mx-auto"><a href="#portfolio" className="nav-link"> PORTFOLIO</a></li>
                <li className="nav-item mx-auto"><a href="#team" className="nav-link"> TEAM</a></li>
                <li className="nav-item mx-auto"><a href="#gallery" className="nav-link"> GALLERY</a></li>
                <li className="nav-item mx-auto"><a href="#contact" className="nav-link"> CONTACT</a></li>
            </ul>
            
        </div>

    </nav>
  )
}

export default Navbar