import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Registry = () => {
    return (
        <div>
            <Nav />

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" style={{ fontSize: "25px" }} to="#"><h5>Registry & <br />Gifting</h5></Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link text-dark" to="#"><h6>Wedding Registry</h6></Link>
                            </li>
                            <li className="nav-item mt-2 ">
                                <Link className="nav-link text-dark" to="#"><h6>Baby Registry</h6></Link>
                            </li>

                            <li className="nav-item mt-2">
                                <Link className="nav-link text-dark" to="#"><h6>Birthday Gift List</h6></Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link text-dark" to="#"><h6>Custom Gift List</h6></Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link text-dark" to="#"><h6>Help</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h2 style={{ textAlign: "center" }}><i>Registry & Gifting</i></h2>
            <h5 className="container col-md-8" >Whether you’re celebrating a wedding, a baby, a birthday, or other memorable milestone,<br />
                <p style={{ textAlign: "center" }}> our registries and gift lists will help you and your guests find the perfect gifts.</p>

            </h5>

            <div className="container py-4 " style={{ backgroundColor: "lightgray" }}>
                <h5 style={{ textAlign: "center" }}>Find A Registry or Gift List</h5><br />
                <div className="container col-md-10">
                    <h6>Registrant Name</h6>
                    <div className="row">
                        <div className="col-md-5">
                            <form>
                                <input className="form-control " type="text" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                        <div className="col-md-4 ">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Wedding Registry
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" to="#">Baby Registry</a></li>
                                    <li><a className="dropdown-item" to="#">Birthday Gift card</a></li>
                                    <li><a className="dropdown-item" to="#">Gift List</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <button className="btn btn " style={{ backgroundColor: "gray" }} type="submit">Search</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container  py-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="./images/111.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign:"center"}}>Weeding Registry</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/122.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign:"center"}}>Baby Registry</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/133.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign:"center"}}>Birthday Gift Card</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/144.jpg" className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title" style={{textAlign:"center"}}>Custom Gift Card</h5>
                                
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

           <Footer/>


        </div>
    )
}

export default Registry
