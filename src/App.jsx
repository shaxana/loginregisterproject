import { useState,useEffect } from 'react'
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login'
import Register from './components/Register'
import ProductTable from './components/ProductTable'


function App() {
  let [ login, setLogin] = useState(true )
  let [tableproducts, setTableproducts] =useState(false)
  let[register,setRegister] = useState([])

  let [users, setUser] = useState([])
  useEffect(()=>{
    axios.get("https://65561a2084b36e3a431f0b20.mockapi.io/users").then((res)=>{
      setUser(res.data)
    })
  },[])

  return (
 
      <ChakraProvider>
  

<>
     {login ?(
      <>
      {
        tableproducts ? (
        <>
          <ProductTable tableproducts={tableproducts} setTableproducts={setTableproducts}/>
         
        </>
        ) : (
          <Login login={login} setLogin={setLogin}
          setTableproducts={()=> setTableproducts(true)}/>
        )
      }
      </>
     )
    :(
      <Register setUser={setUser} users={users}/>
    )}
    </>
    </ChakraProvider>
    
  )
}

export default App
