import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'



const Signin = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>
                 

                        <div className="col-12 mb-3">
                            <label htmlfor="email">Emal</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Email"/>
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlfor="password">Password</label>
                            <input type="passwoed" className="form-control" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="mb-3">
                        <button className="btn btn-prmary" style={{backgroundColor:'lightblue'}}>SignIn</button>
                        </div>

                        <div className="mb-3">
                            Dont have a Account yet?
                            <Link to="/signin">
                                <button className="btn btn-info">Signup</button>
                            </Link>
                        </div>
                       

                    </form>
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default Signin
