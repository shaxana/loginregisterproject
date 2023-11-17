  import React from 'react'
  import { useState, useEffect } from 'react'
  import axios from 'axios'
  import { Button } from '@chakra-ui/react'
  import Register from './Register'


  import {
      Table,
      Thead,
      Tbody,
      Tfoot,
      Tr,
      Th,
      Td,
      TableCaption,
      TableContainer,
      useFocusEffect,
    } from '@chakra-ui/react'

  function ProductTable({tableproducts, setTableproducts}) {
    let [user, setUser] = useState([])
    let [products, setProduct] = useState([])
    let [isAdmin, setIsAdmin] = useState(false)
    useEffect(()=>{
      axios.get("https://65561a2084b36e3a431f0b20.mockapi.io/users").then((res)=>{
        setUser(res.data)
        
        if (user && user.isAdmin){
          setIsAdmin(true)
        }
      })
    })
    useEffect(()=>{
        axios.get ("https://65561a2084b36e3a431f0b20.mockapi.io/products").then((res)=>{
            setProduct(res.data)
           
        })
    },[])

    return (
      <>
      <TableContainer>
      <Table variant='simple'>
        <TableCaption>Products</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>price</Th>
            <Th>stockCount</Th>
            <Th>sale </Th>
          </Tr>
        </Thead> 
        <Tbody>
      {products.map((product)=>(
          <Tr  key={product.id} style={
            {color: product.sale ? 'green': product.stockCount < 10 ? 'red' : 'black'
            }
          }>
            <Td>{product.id}</Td>
            <Td>{product.name}</Td>
            <Td>{product.price}</Td>
            <Td>{product.stockCount}</Td>
            <Td>{product.sale ? 'yes' :'no'}</Td>
            <Td> <Button colorScheme='teal' size='md' >
    Add Product
  </Button></Td>
            
        {
          isAdmin && (
          <>
          <TableContainer>
      <Table variant='simple'>
        <TableCaption>Products</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>price</Th>
            <Th>stockCount</Th>
            <Th>sale </Th>
          </Tr>
        </Thead> 
        <Tbody>
      {products.map((product)=>(
          <Tr  key={product.id} style={
            {color: product.sale ? 'green': product.stockCount < 10 ? 'red' : 'black'
            }
          }>
            <Td>{product.id}</Td>
            <Td>{product.name}</Td>
            <Td>{product.price}</Td>
            <Td>{product.stockCount}</Td>
            <Td>{product.sale ? 'yes' :'no'}</Td>
          <Td> <Button colorScheme='red'>Delete</Button></Td>
          <Td><Button colorScheme='yellow'>Edit</Button></Td>
          <Td> <Button colorScheme='teal' size='md'>
    Add Product
  </Button></Td>
          </Tr>
           ))}
           </Tbody>
             </Table>
           </TableContainer>
          </> 
        )}
          
            
  
          
          </Tr>
        ))}
    </Tbody>
      </Table>
    </TableContainer>



    
      </>


    )
  }

  export default ProductTable