import {React ,useState,useEffect} from 'react';
import './time.css';
import {useHistory} from 'react-router-dom'
import {database} from './firebase';
import 'react-bootstrap';

function Time(){

    const[Name,setName]=useState()
    const[Timein,setTimein]=useState()
    const[Timeout,setTimeout]=useState()
    const history=useHistory()
    
 


   const addDetail= async(e)=>{
  e.preventDefault()
  
  
    let user={ 
       Name:Name,
        Timein:Timein,
        Timeout:Timeout
    }
     
  
    database.ref('Employees').push(user)
    // history.push('/')
    alert("Data submit successfully")
    //  database.ref('Employees').once('value', (snapshot) => {
    //   (snapshot.val())
     
    //  }) 
    database.ref('Employees').once('value',
    function(AllRecord){
      AllRecord.forEach(
        function(currentRecord){
          var name=currentRecord.val().Name;
          var timein=currentRecord.val().Timein;
          var timeout=currentRecord.val().Timeout;
          Addtable(name,timein,timeout)
        }
      );
    })
      
 
  
    }
   
   function Addtable(name,timein,timeout){
   
     var tbody=document.getElementById('tbody');
     var trow=document.createElement('tr');
     var td1=document.createElement('td');
     var td2=document.createElement('td');
     var td3=document.createElement('td');
     td1.innerHTML=name;
     td2.innerHTML=timein;
     td3.innerHTML=timeout;

     trow.appendChild(td1);
     trow.appendChild(td2);
     trow.appendChild(td3);
     tbody.appendChild(trow);
     
   }
    return(

       
             <div>
              
                 <div className="time" >
                 
  <form  className="form-container">
   
     <h6>Employee Name
    <input type="text"    onChange={(e)=>setName(e.target.value)} value={Name} /></h6>
    
    <h6>Time IN
    <input type="text"  onChange={(e)=>setTimein(e.target.value)} value={Timein} /></h6>

    <h6>Time Out
    <input type="text"   onChange={(e)=>setTimeout(e.target.value)} value={Timeout} /></h6>
    <button onClick={addDetail} className="btn" >Add Detail</button>
  
 
   
  </form>

  
</div>


<table className="table">
  <thead>
  <th>Employee Name </th>
    <th> TimeIN </th>
    <th>TimeOut</th>
  
  </thead>

  <tbody id="tbody">
   
  </tbody>
</table>
      
</div>
        

    )
}

export default Time;