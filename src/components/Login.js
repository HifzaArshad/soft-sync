import { useState,Component } from 'react';
import './Main.css';
import { authemp } from './firebase';
// import {Col,Row,Container,Form,Button} from 'react-bootstrap';
 import {Link,useHistory} from "react-router-dom";

 
function Login (){
         
          const[email,setEmail]=useState()
          const[password,setPassword]=useState()
          const history=useHistory()
        
let login = async (e) =>{
  e.preventDefault()
  history.push('/')
    try{
            let response= await authemp.signInWithEmailAndPassword(email,password);
            
             if (response && response.user) {
             
             alert("Login successfully ✅", "")
             history.push('/AdminView')
            }
           
          }
          catch (e) {
            alert(e.message)
          }
        }
         
         
            
        return(
         
            <div>
            
             
              <div className="main">
                <div className="admin">
                <h3>Admin Login</h3>
              <form>     

           <label>Email</label><br/>
           <input type="email"  placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)} value={email}  /> <br/><br/>
       
        <label>Password</label><br/>
           
           <input type="password"  placeholder="Enter Password" 
           onChange={(e)=>setPassword(e.target.value)} value={password}  /> <br/><br/>

       
            <button onClick={login}>Login</button> <br/><br/>
           <p>Not Registerd Yet </p>
 
   <Link className="atag" to="/signup">Signup</Link>
   
  
      </form>

      </div>
              </div>
 


            
      
            </div>
          
  
         
        )
    

}

export default Login;