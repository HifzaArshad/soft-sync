import {React,useState} from 'react';
import {database} from './firebase';
import 'react-bootstrap';


function AdminView(){

   
  

   const addDetail= async(e)=>{
  e.preventDefault()
  

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

    <button onClick={addDetail} style={{background:'green',borderRadius:'1px',borderColor:'green',marginLeft:'550px'}}>View Employyes Report</button>
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

export default AdminView;