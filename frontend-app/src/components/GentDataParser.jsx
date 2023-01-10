import {useState,useEffect} from 'react';
import * as GentApi from '../api/gentdata'
import GentToilet from './GentToilet'

export default function GentData(){
  const [gent, setGent] = useState([]);
  const[error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchGent = async() => {
      try{
        setLoading(true);
        console.log(loading);
        setError(null);
        const data = await GentApi.getAll();
        console.log(data.records)
        setGent(data.records);
      } catch(err){
        setError(err.message || "Failed to load Gent data");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGent();
    },[error,loading]);

  return(
    <>
      {gent.map(g => (
          <GentToilet key={g.recordid}{...g}></GentToilet>
      ))}
    </>
  )
  
    
  }
