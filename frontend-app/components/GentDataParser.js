import {useState, useMemo, useCallback, useEffect, useContext} from 'react';
import * as GentApi from '../api/gentdata'

export default function GentData(){
  useEffect(() =>{
    const fetchPisGent = async()=>{
      const data = await GentApi.getAll();
      console.log(data);
    };

    fetchPisGent();
  })
}