import { useState } from 'react'
import './App.css'
import Accordion from './component/accordion'

function App() {
 const [isShow,setIsShow] = useState(null)

 const toggleAccordion = (index:any) => {
  setIsShow(isShow === index ? null : index )
}

  const faqs = [
    {
        id: 1,
        header: "What is Lorem Ipsum?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        header: "Where does it come from?",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    },
    {
        id: 3,
        header: "Why do we use it?",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        header: "Where can I get some?",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
]

  return (
      <div>
        <h1>Accordion using react js</h1>
        {faqs.map((ele,index)=>{
          return(
            <Accordion ele={ele} isShow={isShow === index} toggleAccordion={()=>toggleAccordion(index)}></Accordion>
          )
        })}
      </div>
  )
}

export default App
