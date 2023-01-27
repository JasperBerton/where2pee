import {useForm, FormProvider, useFormContext} from 'react-hook-form';
import {memo, useState} from 'react';
import { useNavigate } from 'react-router';
import * as firebase from '../api/firebase';
import * as GentApi from '../api/gentdata';
import * as BrusselApi from '../api/brusseldata';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const validationRules = {
  toilet: {
    required: 'Verplicht veld',
    minLength: {value: 3, message:"Laat ons weten waar het probleem zich voordoet"}
  },
  email:{
    required: 'Verplicht veld',
    minLength: {value: 5, message:"Laat uw gegevens achter zodat wij u kunnen contacteren."}
  },
  klacht: {
    required: 'Verplicht veld',
    minLength: {value: 2, message: "Bij het indien van een klacht is het best een duidelijke uitleg te krijgen."}
  }
};

function LabelInput({
  label, name, type, ...rest
}) {
  const {
    register,
    errors, isSubmitting,
  } = useFormContext();

  const hasError = name in errors;

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, validationRules[name])}
        id={name}
        type={type}
        className="form-control"
        disabled={isSubmitting}
        {...rest}
      />
      {hasError ? (
        <div className="form-text text-danger" data-cy="labelinput-error">
          {errors[name].message}
        </div>
      ) : null}
    </div>
  );
}

function ToiletForm(){
  const [error,  setError] = useState(null);
  const [complaint, setComplaint] = useState(null);
  const{
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm();
  const {city,id} = useParams();
  var data = null;
  const navigate = useNavigate();
  useEffect(()=> {
    const fetchToiletComplaint = async()=> {
    try{
      if(city==="Gent"){
        data = await GentApi.getById(id);
        setComplaint(
          data[0].fields.adres
      )
      }
      if(city === "Brussel"){
        data = await BrusselApi.getById(id);
        setComplaint(
          data[0].fields.adrvoisnl
        )
      }
    }catch(e)
    {
      console.error(e);
    }
    console.log(complaint);
  }; fetchToiletComplaint();
  },[])
  const onSubmit = async(data) => 
  {
    const {toilet,email,complaint} = data;
    try{
      setError(null)
      await firebase.addComplaint({toilet,complaint, email})
      navigate('/')
    } catch(err){
      setError(err)
      console.log(error);
    }
  }
  return(
  <div>
    <h1 className='ms-4'>Inzending klacht sanitair</h1>
    <FormProvider
    handleSubmit={handleSubmit}
    errors={errors}
    register={register}
    isSubmitting={isSubmitting}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mb-3">
        <LabelInput
        label="Toilet:"
        name="toilet"
        type="text"
        />
        <LabelInput
        label="Email:"
        name="email"
        type="email"/>
        <LabelInput
        label="Klacht:"
        name="complaint"
        type="text"/>
        <div className='clearfix'>
          <div className='btn-group float-end'>
            <button
            type='submit'
            disabled={isSubmitting}
            className="btn btn-primary"
            >
            Verzend klacht
            </button>
          </div>
        </div>
        
      </form>
    </FormProvider>
  </div>
)};

export default memo(ToiletForm);