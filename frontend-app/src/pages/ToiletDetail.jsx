import {memo, useEffect, useState} from "react";
import { useParams} from "react-router";
import { Link } from "react-router-dom";
import * as GentApi from '../api/gentdata';

function ToiletDetail()
{
  const [toilet, setToilet] = useState([]);
  const [error, setError] = useState(null);
  const {id} = useParams();
  useEffect(()=>{
    const fetchToilet = async()=>{
      try{
        const data = await GentApi.getById(id);
        console.log(data[0].fields);
        setToilet(data[0].fields);
      }catch(err){
        setError(err);
        console.log(error);
      }
    };
    fetchToilet();
  },[id,error]);
  
  return (
    <>
      <h1 className="ms-2">Toilet detail</h1>
      <p className="ms-4">{toilet.status}</p>
      <p className="ms-4">Adres: {toilet.adres}</p>
      <p className="ms-4">Beschrijving: {toilet.beschrijving}</p>
      <p data-cy="urinoirs" className="ms-4">Urinoirs: {toilet.urinoirs === 0 || toilet.urinoirs == null? "Geen aanwezig":toilet.urinoirs}</p>
      <p className="ms-4">Toiletten: {toilet.toiletten === 0 || toilet.toiletten === null? "Geen aanwezig":toilet.toiletten}</p>
      <p data-cy="luiertafels" className="ms-4">Luiertafels: {toilet.luiertafels === 0 || toilet.luiertafels == null? "Geen aanwezig":toilet.luiertafels}</p>
      <Link to={`/toilet/error/${id}`}>
        <button className="btn btn-danger ms-4">Meld een probleem</button>
      </Link>
    </>
  );
}

export default memo(ToiletDetail);