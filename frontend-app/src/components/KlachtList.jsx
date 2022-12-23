import { useState, useEffect } from 'react';
import * as firebase from '../api/firebase';
import Klacht from '../components/Klacht';

export default function KlachtList(){
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>{
    const fetchComplaints = async() => {
      try{
        setLoading(true);
        setError(null);
        const data = await firebase.getComplaints();
        console.log(data);
        setComplaints(data);
      } catch(err){
        setError(err.message || "Failed to load Complaints data");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
    },[]); 
  
  return (
    <div className='table-responsive'>
      <table>
      <caption>Lijst van klachten</caption>
      <thead>
        <tr>
          <th>Toilet</th>
          <th>Klacht</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
  {
    complaints.map((c)=>(
      <Klacht key={c.email}{...c}></Klacht>
    ))
    }
    </tbody>
    </table>
  </div>
  )
}