import {useState,useEffect} from 'react';
import * as GentApi from '../api/gentdata'
import GentToilet from './GentToilet'

export default function GentData(){
  const [gent, setGent] = useState(null);
  const[error, setError] = useState(null);

  useEffect(() =>{
    const fetchGent = async() => {
      try{
        setError(null);
        const GentData = await GentApi.getAll();
        console.log("data here " + JSON.stringify(GentData, null, 2));
        setGent(GentData);
      } catch(err){
        setError(err.message || "Failed to load Gent data");
      }
    };

    fetchGent();
    },[]);

  useEffect(() => {
    const printGent = () => {
      console.log("Gent value " + JSON.stringify(gent, null, 2))
    };
    printGent();
  }, [gent]);
  
  if (gent === null) {
    return <div>Loading Data...</div>
  }
  
  

  return(
    <>
      {gent.map(g => (
          <GentToilet {...g}></GentToilet>
      ))}
    </>
  )
  }
