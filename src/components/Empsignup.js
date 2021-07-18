import { useHistory } from 'react-router';
import './Main.css';
import { useState ,React} from 'react'
import {authemp} from './firebase';
 
function EmpSignup (){

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
       
      
    
      
}

    
        return(
            <div>
              <div className="main">
                <div className="admin">
                <h3> Employees Signup</h3>
              <form>            
           <label>Email</label><br/>
           
        <input type="text" placeholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)} /> <br/><br/>
       
        <label>Password</label><br/>
           
           <input type="password" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)} /> <br/><br/>
        
   <button onClick={signup}>Sign up</button> 
   
   
      </form>

      </div>
              </div>


              
 

            </div>
        )
    }


export default EmpSignup;