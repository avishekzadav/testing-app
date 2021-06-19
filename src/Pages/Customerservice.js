import React from 'react'
import Nav from '../components/Nav'
import Service from '../components/Service'
import Footer from '../components/Footer'
import DealsSlidebar from '../components/DealsSlidebar'


const Customerservice = () => {
    return (
        <div>
            <Nav />
            <div className="container ">
                <h3 className="mt-2 py-4">Hello. What Can We help You with?</h3>
            </div>
            <hr/>
            
                
                
                     
                        <Service/>
                   
            
        


            <Footer />

        </div>
    )
}

export default Customerservice
