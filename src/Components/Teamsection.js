import React from 'react'
import '../App.css'
function Teamsection() {
  return (
    
			//<!--Team section starts-->
            <section class="team-section" id="team">
                <h2 class="text-center mt-4">OUR AMAZING TEAM</h2>
                <p class="text-center mb-4">Our Team Is Ladder Of Success</p>
                    <div class="container">
                    {/* <!--Bootstrap Grid starts--> */}
						{/* <!--row--> */}

                        <div class="row " >
                        
                            <div class="col-lg-4">
                                <img src="images/image8.jpg" class="h-75 w-100 pb-3 mx-auto d-block"/>
                                <h5 class="text-center">Alan Morries</h5>
                                <p class="text-center">Lead Designer</p>
                            </div>
                            {/* `<!--column-2--> */}
                            <div class="col-lg-4">
                                <img src="images/image8.jpg" class="h-75 w-100 pb-3 mx-auto d-block"/>
                                <h5 class="text-center">Anna Julie</h5>
                                <p class="text-center">Manger</p>
                            </div>
                          {/* `<!--column-3--> */}
                            <div class="col-lg-4">
                                <img src="images/image8.jpg" class="h-75 w-100 pb-3 mx-auto d-block"/>
                                <h5 class="text-center">Anna Julie</h5>
                                <p class="text-center">Manger</p>
                            </div>
    
                        </div>{/* <!--Bootstrap Grid ends--> */}
                    </div>
                </section>	
                // <!--Team section ends-->
  )
}

export default Teamsection