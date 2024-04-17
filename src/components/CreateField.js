import { useState } from "react";

const CreateField=({formData, setFormData, setIsEditActive})=> {
    const [id, setId]= useState("");
    const [placeholder, setPlaceholder]= useState("");
    const [title, setTitle]= useState("");
    const [type, setType]= useState("");
    const [disabled, setDisabled]= useState(false);
    const [required, setRequired]= useState(false);

    
    const handleCreate=()=>{
         setFormData([...formData,{id:id, placeholder:placeholder,title:title,type:type,disabled:disabled, required: required} ])
        setIsEditActive(false)
    }
  return (
    <div>
          <form onSubmit={handleCreate}>
          <div>
            <label htmlFor='id'>Enter ID:</label>
            <input id="id" placeholder='Enter ID for Form Field' value={id} onChange={(e)=>setId(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='placeholder'>Placeholder:</label>
            <input id="placeholder" placeholder='Enter Placeholder' value={placeholder} onChange={(e)=>setPlaceholder(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='title'>Title:</label>
            <input placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='type'>Enter type:</label>
            <input id="type" placeholder='Enter Type' value={type} onChange={(e)=>setType(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='disabled'>Disabled?:</label>
            <input id="disabled" type='checkbox' value={disabled} onChange={(e)=>setDisabled(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='required'>Required?:</label>
            <input id="required" type='checkbox' value={disabled} onChange={(e)=>setRequired(e.target.value)}></input>
          </div>
          <button type='submit'>Submit</button>
          </form>
          </div>
  );
}

export default CreateField;
