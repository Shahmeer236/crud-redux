import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './userSlice'

const EditUser = () => {
    const params =useParams();
    const dispatch =useDispatch();
    const users=useSelector(store => store.users);

    // console.log(params.id);
    const navigate =useNavigate();
    const existingUser =users.filter(user=> user.id ===params.id);
    const {name,email}=existingUser[0];
    const [values,setValues]=useState({
        name,
        email,
    });
    const handleEditUser =()=>
    {

        // console.log(values)
        dispatch(editUser({
            id:params.id,
            name:values.name,
            email:values.email,
        }))
        setValues({name:'',email:''});
        console.log(values);
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


        <Button onClick={handleEditUser}>Edit</Button>
    </div>
    
  )
}

export default EditUser