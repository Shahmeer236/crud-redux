import React from 'react'
import TextField from './TextField'
import Button from './Button'
import { useState } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import  {addUser}  from '../features/userSlice'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const [values,setValues]=useState({
        name:'',
        email:''
    });
    const handleAddUser =()=>{

        // console.log(values)
        setValues({name:'',email:''});
        dispatch(addUser({
            id:uuidv4(),
            name:values.name,
            email:values.email

        }))
        navigate('/');

    }
  return (
    <div className='mt-10 max-w-xl mx-auto'>
        <TextField
        label="Name"
        value={values.name}
        onChange={(e)=>setValues({...values , name:e.target.value})}
        inputProps={{type:'text', placeholder:'John Doe'}}
        
        />
        {/* {console.log(setValues.email)} */}
        <br />
        <TextField
        label="Email"
        value={values.email}
        onChange={(e)=>setValues({...values , email:e.target.value})}
        inputProps={{type:'email', placeholder:'JohnDoe@email.com'}}
        />
            {/* {console.log(setValues.name)} */}


        <Button onClick={handleAddUser}>Submit</Button>
    </div>
    
  )
}

export default AddUser