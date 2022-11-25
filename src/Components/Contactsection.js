import React from 'react'
import '../App.css'
function Contactsection() {
  return (
    //<!--contact section starts-->
    <section className="contact-section bg-light" id="contact">
        <h5 className="text-center pt-5 mb-4" style={{fontSize:"25px"}}>CONTACT US</h5>
        <div class="container">
          
            
            <div class="row">
                 
                <div class="col-lg-6 col-sm-12 map">
                     
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.951067750822!2d78.4358479227472!3d17.436353108786907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919633f78bef%3A0xbb63515db9bc2eba!2siHub%20Talent%20(Innovative%20Placement%20Solutions)!5e0!3m2!1sen!2sin!4v1664707076597!5m2!1sen!2sin" width="100%" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                      
                <div class="col-lg-6 col-sm-12">
                        
                    <form action="#">
                        
                        <div class="row">
                         
                            <div class="col">
                                
                                <input type="text" class="form-control" placeholder="Name" w-100 required />
                                
                            </div>
                         
                            <div class="col">

                                <input type="text" class="form-control" placeholder="E-Mail" w-100 required />
                            </div>
                            
                        </div>

                            
                        <div class="row mt-3">
                          
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Phone" w-100 required />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="subject" w-100 required />
                            </div>
                            
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <textarea rows="5" cols="40" class="form-control" placeholder="Message" required></textarea>
                            </div>
                        </div>

                       
                        <div class="row mt-3">
                            <div class="col">
                                <input type="button" name="" value="SUBMIT" class="btn btn-outline-primary w-100"/>
                            </div>
                        </div>	
                    </form>
                </div> 

            </div>
        </div>
    </section>
   
  )
}

export default Contactsection