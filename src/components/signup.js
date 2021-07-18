import React,{Component,useState} from 'react';
import {authemp,database} from './firebase';
import { useHistory } from 'react-router';
import './Main.css';

 
function Signup (){

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
   const history=useHistory()
 
  const signup = async (e) =>{
    e.preventDefault()
    history.push('/')
        
       try{
        const response= await authemp.createUserWithEmailAndPassword(email,password);
        if (response && response.user) {
          alert("Account created successfully ✅", "")
         }
        }
        catch (e) {
          alert(e.message)
        }
       
      
      
  //  .catch(function(error) {
  //        // Handle Errors here.
  //        var errorCode = error.code;
  //        var errorMessage = error.message;
  //        alert(errorCode,errorMessage)
        
  //      });
}

    
        return(
            <div>
              <div className="main">
                <div className="admin">
                <h3>Signup here</h3>
              <form>            
           <label>Email</label><br/>
           
        <input type="text"laceholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)} /> <br/><br/>
       
        <label>Password</label><br/>
           
           <input type="password" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)} /> <br/><br/>
           
   <button onClick={signup}>Sign up</button>
   
   
      </form>

      </div>
              </div>


              
 

            </div>
        )
    }


export default Signup;