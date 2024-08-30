import React, { useEffect, useState } from 'react';
import './App.css'
// import Pagination from './Pagination';

const App = () => {

  const [product,setProduct] = useState([])
  const [currentPage,setCurrentPage] = useState(2)
  
  const fetchProduct = async () => {
     const res = await fetch("https://dummyjson.com/products?limit=100")
     const data = await res.json()
     setProduct(data.products)

  }

  useEffect(()=>{
    fetchProduct()
  },[])

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Simple Pagination</h1>
      <div className='grid'>
         {product.slice(currentPage*10-10,currentPage*10).map((ele:any)=>{
          return(
            <span>
            <img  src={ele.thumbnail}></img>
            <p>{ele.title}</p>
            </span>
          )
         })}
         </div>


         {product.length>0 &&(
          <div className='pagination'>
             <span onClick={()=> setCurrentPage(currentPage == 1 ? 1 : currentPage-1)}>⏮️</span>
             {[...Array(product.length/10)].map((_,i)=>{
              return(
                <span className={currentPage==i+1 ? "pagination_selector":""} onClick={()=>setCurrentPage(i+1)}>{i+1}</span>
              )
             })}
             <span onClick={()=> setCurrentPage(currentPage===product.length/10 ? product.length/10 :  currentPage+1)}>⏭️</span>
          </div>
         )}
    </div>
  );
};

export default App;
