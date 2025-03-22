import {useState,useEffect} from 'react';
import * as GentApi from '../api/gentdata';
import GentToilet from './GentToilet';
import * as BrusselApi from '../api/brusseldata';
import BrusselToilet from './BrusselToilet';

export default function GentData(){
  const [gent, setGent] = useState(null);
  const [brussel, setBrussel] = useState(null);
  const[error, setError] = useState(null);

  useEffect(() =>{
    const fetchGent = async() => {
      try{
        setError(null);
        const GentData = await GentApi.getAll();
        console.log("data here " + JSON.stringify(GentData, null, 2));
        setGent(GentData);
        const BruxData = await BrusselApi.getAll();
        setBrussel(BruxData);
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
  
  if (gent === null || brussel === null) {
    return <div>Loading Data...</div>
  }
  
  

  return(
    <>
      {gent.map(g => (
          <GentToilet {...g}></GentToilet>
      ))}
      {brussel.map(b => (
        <BrusselToilet {...b}></BrusselToilet>
      ))}
    </>
  )
  }
