import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import axios from 'axios'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    TagRightIcon
  } from '@chakra-ui/react'
  
  import { Button, ButtonGroup } from '@chakra-ui/react'
import Register from './Register'


function Login({login, setLogin,setTableproducts}) {
    
   let [logged, setLogged] = useState({name:'', pass:''})
  let {name, email, pass} = logged

   
  return (
   <>
    <FormControl>
  <FormLabel>Username</FormLabel>
  <Input type='text'value={name}   onChange={(e) => setLogged({ ...logged, name: e.target.value })}/>
  
  <FormLabel>Password</FormLabel>
  <Input type='password' value={pass}   onChange={(e) => setLogged({ ...logged, pass: e.target.value })}/>
</FormControl>
<Button colorScheme='teal' variant='outline' style={{marginRight:10}} onClick={(e)=>{
 
  axios.get("https://65561a2084b36e3a431f0b20.mockapi.io/users").then((res)=>{
    let users = res.data;
    let isLogged = users.find((user)=> user.name == name && user.password == pass)
    if (isLogged){
      setLogged(true)
      setLogin(true)
      setTableproducts(true)
      console.log(login);
    }
  })
  
}}>
    Log in
  </Button>

  <Button colorScheme='teal' variant='outline' onClick={()=>{
    setLogin(false) 
  }}>
    Register
  </Button>

   </>

  )
}

export default Login