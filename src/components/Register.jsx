import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    TagRightIcon
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Register({register, setRegister}) {
let [newUser, setNewUser] = useState({name:'', email:'', pass:''})
    let {name, email, pass} = newUser
  return (
    <>
     <form >
      <label htmlFor="">Username</label>
      <input type="text" value={name}  onChange={(e)=>{
        setNewUser({...newUser, name: e.target.value })
      }}/>
      <label htmlFor="">Email</label>
      <input type="email" value={email}  onChange={(e)=>{
        setNewUser({...newUser, email: e.target.value})
      }}/>
      <label htmlFor="">Password</label>
      <input type="password" value={pass} onChange={(e)=>{
        setNewUser({...newUser, pass: e.target.value})
      }}/>

     </form>
<Button colorScheme='teal' variant='outline' style={{marginRight:10}} onClick={()=>{
    setRegister(false)  
}}>
    Log in
  </Button>
  <Button colorScheme='teal' variant='outline' type='submit' onClick={()=>{
    let user={
      name:name,
      email:email,
      password: pass
    };
   

     axios.post("https://65561a2084b36e3a431f0b20.mockapi.io/users/", user)
     .then((res)=>{
      console.log(res.data);
      setNewUser({...newUser, [name]: value, isAdmin:false})
     })
 
  }}>
    Register
  </Button>
    </>

  )
  
  
}

export default Register