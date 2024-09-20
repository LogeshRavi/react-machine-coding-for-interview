import React, { useState } from 'react'

const StarComponent = () => {
    const [rating,setRating]= useState(0)
    const [hover,setHover] = useState(0)
    console.log("rating",rating)

    const handleRating = (e:any) => {
        setRating(e)
    }
     
  
    return (
       
      <div className='star-rating'>

        {[...Array(5)].map((_,index)=>{
            const ratingValue = index+1
            return(
                <span className={`star ${ratingValue <=(rating||hover) ? "filled":"" }`}    //3 <=3
                onClick={()=>handleRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
                >★</span>
            )
        })}
          
      </div>
    )
}


export default StarComponent
