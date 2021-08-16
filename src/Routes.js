import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Deals from './Pages/Deals'
import Signin from './Pages/auth/Signin'
import Signup from './Pages/auth/Signup'
import Customerservice from './Pages/Customerservice'
import Registry from './Pages/Registry'
import Increment from './hooks/Increment'
import Test from './hooks/Test'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'
import Show from './context/Show'
import FormValidation from './validaton/FormValidation'

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
             <Route exact path="/registry" component={Registry}/>

             {/* hooks */}
             <Route exact path="/hooks/increment" component={Increment}/>
             <Route exact path="/hooks/test" component={Test}/>
             <Route exact path="/api/data" component={DataFetch}/>
             <Route exact path="/main" component={Main}/>
             {/* context api */}
             <Route exact path="/contextapi" component={Show}/>
             <Route rxact path="/form/register" component={FormValidation}/>
         </Switch>
     </Router>
        </div> 
    )
}


export default Routes
