import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Card from '../components/Card'
import DealsSlidebar from '../components/DealsSlidebar'

const Deals = () => {
    return (
        <div>

            <Nav />
            <div className="container-fluid">
                <div className="row">


                    <h3>Deals and promotion</h3>
                    <span> shop todays deal,lightning deals and limited time discount</span>
                    <DealsSlidebar />
                    <div className="col-md-10">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Deals
