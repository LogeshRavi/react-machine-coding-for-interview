

import useTicTacToe from './hooks/useTicTacToe'
import './App.css'


function App() {

  const {board,getStatusMessage,handleClick} = useTicTacToe()
  console.log("getStatusMessage",getStatusMessage)
 
 

  return (
    <div className='game'>

      <div className='status'>
         {getStatusMessage()}
      </div>


     <div className='board'>
      {board.map((b,index)=>{
        return <button key={index} className='cell'  onClick={()=>handleClick(index)}>{b}</button>
      })}
     </div>


     </div>
  )
}

export default App
