import {useState,useEffect} from 'react';
import * as GentApi from '../api/gentdata'
import GentToilet from './GentToilet'
import * as BrusselApi from '../api/brusseldata';
import BrusselToilet from './BrusselToilet';
import * as AntwerpApi from '../api/antwerpdata';
import AntwerpToilet from './AntwerpToilet';

export default function GentData(){
  const [gent, setGent] = useState([]);
  const [brussel, setBrussel] = useState([]);
  const[error, setError] = useState(null);
  const [antwerp, setAntwerp] = useState([]);

  useEffect(() =>{
    const fetchGent = async() => {
      try{
        setError(null);
        const GentData = await GentApi.getAll();
        const BrusselData = await BrusselApi.getAll();
        const AntwerpData = await AntwerpApi.getAll();
        console.log(AntwerpData);
        console.log(BrusselData.records);
        setBrussel(BrusselData.records); 
        setGent(GentData.records);
        setAntwerp(AntwerpData);
      } catch(err){
        setError(err.message || "Failed to load Gent data");
        console.log(error);
      }
    };

    fetchGent();
    },[error]);

  return(
    <>
      {gent.map(g => (
          <GentToilet key={g.recordid}{...g}></GentToilet>
      ))}
      {brussel.map(b => (
          <BrusselToilet key={b.recordid}{...b}/>
      ))}
      {antwerp.map(c =>(
        <AntwerpToilet key={c.id} {...c}></AntwerpToilet>
      ))}
    </>
  )
  
    
  }
