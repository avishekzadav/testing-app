import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
        <Nav/>
        <div className="container">
            <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                <form>
                    <div className="col-12 mb-3">
                        <label htmlfor="firstname">FirstName</label>
                        <input type="text" className="form-control" id="firstname" name="fname" placeholder="Firstname"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlfor="firstname">LastName</label>
                        <input type="text" className="form-control" id="lastname" name="lname" placeholder="Lastname"/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlfor="email">Emal</label>
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email"/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlfor="password">Password</label>
                        <input type="passwoed" className="form-control" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="mb-3">
                    <button className="btn btn-prmary"style={{backgroundColor:'blue'}}>Signup</button>
                    </div>

                    <div className="mb-3">
                        Already Registered?
                        <Link to="/signin">
                            <button className="btn btn-info">SignIn</button>
                        </Link>
                    </div>
                   

                </form>
            </div>
        </div>


        <Footer/>
    </div>
    )
}

export default Signup
