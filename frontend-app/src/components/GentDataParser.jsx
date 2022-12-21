import {useState, useMemo, useCallback, useEffect, useContext} from 'react';
import * as GentApi from '../api/gentdata'
import GentToilet from './GentToilet'
import * as MockData from '../api/mockdata'

export default function GentData(){
  const [gent, setGent] = useState([]);
  const[error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const refreshGentLocations =useCallback(async() => {
    try{
      setGent([]);
      setLoading(true);
      setError(null);
      const data = MockData.gentData;
      setGent(gent.push(data.records));
      console.log(gent)
      
    } catch(err){
      setError(err);
      console.error(error);
    } finally{
      setLoading(false);
    }
  },[]);

  useEffect(() =>{
    const fetchGent = async() => {
      try{
        setLoading(true);
        setError(null);
        const data = await GentApi.getAll();
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
          <GentToilet {...g}></GentToilet>
      ))}
    </>
  )
  
    
  }
