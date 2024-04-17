import { useEffect, useState } from 'react';
import './DynamicForm.css';
import EditField from './EditField';

const DynamicForm=({id, placeholder, title, type, index, disable, handleEdit, setFormData, formData, required})=> {
const [error, setError]= useState(false);
const[value, setValue]= useState("");
const[isEditActive, setIsEditActive]= useState(false);

    useEffect(()=>{
    if(value.length <0){
        setError(`${title} is Required`)
    }
    if(value.length >0){
        setError(false);
    }
    },[value])

    const handleDisable=()=>{
        
    }
  return (
    <div className='' style={{marginBottom:"20px"}} key={index}>
        {isEditActive && <EditField ids={id} placeholders={placeholder} titles={title} types={type} index={index} disables={disable} />}
        {!isEditActive && 
        <>
        <label for={id} style={{marginRight:"40px"}} >{title}:</label>
      <input id={id} placeholder={placeholder} type={type} disabled={disable} value={value} onChange={(e)=>setValue(e.target.value)} required={required}></input>
      {error && <span style={{color:"red"}}>{error}</span>}
      <div style={{display:"flex", gap:"2", justifyContent:"center", marginTop:"10px"}}>
        <button onClick={()=>setIsEditActive(true)}>Edit</button>
        <button onClick={handleDisable}>Disable</button>
      </div>
        </>
        }
      
    </div>
  );
}

export default DynamicForm;
