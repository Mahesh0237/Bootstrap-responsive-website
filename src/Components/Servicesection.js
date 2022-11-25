import React from 'react'
import '../App.css'
function Servicesection() {
  return (
    <section className="service-section pt-5" id="service">
    <h3 className="pt-2">SERVICES</h3>
    <p >Our Services Represent Our Identity</p>
    <div className="container pt-4">
            
        <div className="row pt-3">
                
            <div className="col-lg-4 col-sm-12">
                <span className="bi bi-cart text-white text-center  bg-primary p-3 "id="cart" >
                </span>
                <div className="mt-4">
                    <h3>E-commerce</h3>
                    <p className="text-center">get your website ready, user friendly. responsive search engine friendly by proffesionals with many other dynamic features for website which will increase traffic easy. fast & affordabl</p>
                </div>
            </div>

                    
            <div className="col-lg-4 col-sm-12" id="Mservice">
                <span className="bi bi-laptop text-white text-center bg-primary p-3 " id="cart">
                </span>
                <div>
                    <h3 className="mt-4">E-commerce</h3>
                    <p className="text-center">get your website ready, user friendly. responsive search engine friendly by proffesionals with many other dynamic features for website which will increase traffic easy. fast & affordabl</p>
                </div>
            </div>

                        
            <div className="col-lg-4 col-sm-12">
                <span className="bi bi-lock text-white text-center bg-primary p-3 " id="cart">
                </span>
                <div>
                    <h3 className="mt-4">E-commerce</h3>
                    <p className="text-center">get your website ready, user friendly. responsive search engine friendly by proffesionals with many other dynamic features for website which will increase traffic easy. fast & affordabl</p>
                </div>
            
            </div>
    
        </div>
    </div>

    
</section>
  )
}

export default Servicesection