import {memo, useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import * as GentApi from '../api/gentdata';

function ToiletDetail()
{
  const navigate = useNavigate();
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
      }
    };
    fetchToilet();
  },[id]);
  
  return (
    <>
      <Navigation/>
      <h1>Toilet detail</h1>
      <p>{toilet.status}</p>
      <p>Adres: {toilet.adres}</p>
      <p>Beschrijving: {toilet.beschrijving}</p>
      <p>Urinoirs: {toilet.urinoirs == 0 || toilet.urinoirs == null? "Geen aanwezig":toilet.urinoirs}</p>
      <p>Toiletten: {toilet.toiletten == 0 || toilet.toiletten == null? "Geen aanwezig":toilet.toiletten}</p>
      <p>Luiertafels: {toilet.luiertafels == 0 || toilet.luiertafels == null? "Geen aanwezig":toilet.luiertafels}</p>
      <Link to={`/toilet/error/${id}`}>
        <button>Meld een probleem</button>
      </Link>
    </>
  );
}

export default memo(ToiletDetail);