import { useState } from 'react'
import CheckoutStepper from './components/checkoutStepper'
import './App.css'

function App() {
 

  const checkout_steps = [
    {
      name:"Customer Info",
      component:<div>Provided Contact details</div>
    },
    {
      name:"Shipping Info",
      component:<div>Enter the shipping details</div>
    },
    {
      name:"Payment",
      component:<div>Complete payment to place the order</div>
    },
    {
      name:"Delivered",
      component:<div>Your order has been delivered</div>
    },
  ]

  return (
     <>
     <h2>Stepper Component</h2>
     <CheckoutStepper stepsConfig={checkout_steps}/>
     </>

  )
}

export default App
