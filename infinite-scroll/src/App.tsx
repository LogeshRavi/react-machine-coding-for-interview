import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)


  const fetchData = async () => {
    setLoading(true)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`)
    const data1 = await res.json()
    setData((prev:any)=> [...prev,...data1])
    setLoading(false)

  }

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
  
    console.log(scrollHeight, scrollTop, clientHeight);

    if(clientHeight+scrollTop >= scrollHeight -10){
      setPage((page)=> page+1)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)

    return()=> {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <h3>Infinite Scroll</h3>
      {data.map((ele:any,index:any)=>{
        return(
        <p key={index}>{ele.title}</p>
      )})}

      {loading ? "Loading" : ""}
       

    </>
  )
}

export default App
