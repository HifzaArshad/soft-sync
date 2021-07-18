import React,{Component} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "../components/Login";
import EmpLogin from "../components/Emplogin";
import Signup from "../components/signup";
import EmpSignup from "../components/Empsignup";
import Time from "../components/time";
import AdminView from "../components/AdminView";
  class Routing extends Component{
    render(){
        return(

                <Router>
                <Switch>


             <Route exact  path="/" >
                <Login /> 
                <EmpLogin />
                 </Route>
               
            <Route path="/signup">
              <Signup />
              </Route>

              <Route path="/Empsignup">
              <EmpSignup />
              </Route>

            <Route path='/AdminView'>
            <AdminView />
            </Route>

            <Route path='/Time'>
            <Time />
            </Route>
               

               </Switch>
                </Router>
            

        )}
    
    

    }
    export default Routing;