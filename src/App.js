import './App.css';
import DynamicForm from './components/DynamicForm';
import { useState } from 'react';
import CreateField from './components/CreateField';

// initial form data
const INITIAL_DATA=[{id:"firstname", placeholder:"Enter First Name", title:"First Name", type:"text", disable:false, required: true},
{id:"phone", placeholder:"Enter Phone Number", title:"Phone Number", type:"number", disable:false, required: true},
{id:"checkbox", title:"Conditions Accepted", type:"checkbox", disable:false, required: true},
];

function App() {
  const [formData, setFormData]= useState([...INITIAL_DATA]);
  const [isEditActive, setIsEditActive]= useState(false);
  

  const handleEdit=()=>{
    
  }
  const handleDisable=()=>{
    
  }
  return (
    <div className="App">

       {!isEditActive &&  <button onClick={()=>setIsEditActive(true)} className='new-form-button'>Create New Form Field</button>}
      {
        isEditActive && 
        <CreateField  setIsEditActive={setIsEditActive} formData={formData} setFormData={setFormData}/>
      }

      {/* dynamic form component */}
      <div className='form-container'>
      {formData.map((formElement, index)=>{
        return(
          <DynamicForm 
          index={index} 
          id={formElement.id} 
          placeholder={formElement.placeholder} 
          title={formElement.title} 
          type={formElement.type} 
          disable={formElement.disable} 
          handleEdit={handleEdit}
          handleDisable={handleDisable}
          formData={formData}
          setFormData={setFormData} />
        )
      })}
    </div>
  

    </div>
  );
}

export default App;
