import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Deals from './Pages/Deals'
import Signin from './Pages/auth/Signin'
import Signup from './Pages/auth/Signup'
import Customerservice from './Pages/Customerservice'


const Routes = () => {
    return (
        <div>
     <Router>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/deals" component={Deals}/>
    
             <Route exact path="/signup" component={Signup}/>
             <Route exact path="/signin" component={Signin}/>
             <Route exact path="/service" component={Customerservice}/>
         </Switch>
     </Router>
        </div> 
    )
}


export default Routes
