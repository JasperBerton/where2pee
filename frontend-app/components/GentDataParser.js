import {useState, useMemo, useCallback, useEffect, useContext} from 'react';
import * as GentApi from '../api/gentdata'

export default function GentData(){
  const [gent, setGent] = useState([]);
  const[error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const refreshGentLocations =useCallback(async() => {
    try{
      setLoading(true);
      setError(null);
      const data = await GentApi.getAll();
      setGent(data);
      
    } catch(error){
      setError(error);
      console.error(error);
    } finally{
      setLoading(false);
    }
  },[])

  useEffect(() =>{
    refreshGentLocations();
    },[refreshGentLocations]);
    
  }
