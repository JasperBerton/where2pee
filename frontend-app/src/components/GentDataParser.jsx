import {useState,useEffect} from 'react';
import * as GentApi from '../api/gentdata'
import GentToilet from './GentToilet'
import * as MockData from '../api/mockdata'

export default function GentData(){
  const [gent, setGent] = useState([]);
  const[error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchGent = async() => {
      try{
        setLoading(true);
        setError(null);
        const data = await GentApi.getAll();
        console.log(data.records)
        setGent(data.records);
      } catch(err){
        setError(err.message || "Failed to load Gent data");
      } finally {
        setLoading(false);
      }
    };

    fetchGent();
    },[]);
  
    const mocker = MockData.gentData.records;

  return(
    <>
      {gent.map(g => (
          <GentToilet key={g.recordid}{...g}></GentToilet>
      ))}
    </>
  )
  
    
  }
