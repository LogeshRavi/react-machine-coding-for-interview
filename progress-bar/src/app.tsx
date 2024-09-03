import { useEffect, useState } from 'preact/hooks'
import './app.css'
import ProgressBar from './components/ProgressBar'

export function App() {

  const [value,setValue] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=> val+1)
    },100)
  },[])
  

  return (
    <div className="app">
    <h2>Progress bar</h2>
    <ProgressBar value={value}/>

    </div>
  )
}
