import React from 'react'
import '../App.css'
function Gallerysection() {
  return (
    //<!--Gallery section starts-->
    <section className="carousel-section p-5" id="gallery">
    <div className="container">
        {/* hfhfhhfhfhfh */}
        <h2 className="text-center text-info" style={{fontStyle: "italic"}}>GALLERY SECTION</h2>
    <div id="demo" className="carousel slide" text-center data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button  className="active" data-bs-target="#demo" data-bs-slide-to="0"></button>
            <button  data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button  data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active" >
                <img src="images/image9.jpg "  className=" w-100 mx-auto d-block"/>
            </div>
            <div className="carousel-item">
                <img src="images/image10.jpg" className="w-100 mx-auto d-block"/>
            </div>
            <div className="carousel-item">
                <img src="images/image11.jpg" className="w-100 mx-auto d-block"/>
            </div>

        </div>
        <button className="carousel-control-prev" type=" button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next"  type=" button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
    </div>
</div>

</section>
  )
}

export default Gallerysection