import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Pages/Home'


const Routes = () => {
    return (
        <div>
     <Router>
         <Switch>
             <Route exact path="/" component={Home}/>
    
             
         </Switch>
     </Router>
        </div> 
    )
}


export default Routes
