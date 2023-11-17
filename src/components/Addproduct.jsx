import React from 'react'
import { useState } from 'react'

function Addproduct() {
    let [newProduct, setNewProduct] = useState({name:'', price:'', stockCount:'', sale:''})
  return (
    <form onSubmit={async(e)=>{
        e.preventDefault();
        let addedProduct = await axios.post('https://65561a2084b36e3a431f0b20.mockapi.io/products', newProduct);
        setNewProduct([...product, addedProduct.data]);
        setNewCategory({name: '',price:'', stockCount:'', sale:''});
    }}>
        <input value={newProduct.name} onChange={(e)=>{
            setNewProduct({...newProduct, name: e.target.value});
        }} type="text" placeholder="enter product name"/>
        <input value={newProduct.price} onChange={(e)=>{
            setNewCategory({...newProduct, price: e.target.value});
        }} type="number" placeholder="enter product price"/>
        <input value={newProduct.stockCount} onChange={(e)=>{
            setNewCategory({...newProduct, stockCount: e.target.value});
        }} type="number" placeholder="enter product stockCount"/>
          <input value={newProduct.sale} onChange={(e)=>{
            setNewCategory({...newProduct, sale: e.target.value});
        }} type="string" placeholder="enter product sale"/>
        <button type="submit">add</button>
    </form>
  )
}

export default Addproduct