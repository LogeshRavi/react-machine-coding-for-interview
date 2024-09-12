import './App.css'
import TypeaheadSearchBox from './Component/TypeaheadSearchBox'

function App() {
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Orange",
    "Pineapple",
  ];
  
  return (
    <>
    <h2>Typehead Component</h2>
    <TypeaheadSearchBox data={data}/>
    </>

  )
}

export default App
