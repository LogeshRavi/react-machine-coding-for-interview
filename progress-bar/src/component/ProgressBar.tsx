import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value = 0 }) => {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(value < 100 ? value : 100)
    }, [value])
    return (
        <div className="progress">
            <span>{percentage}%</span>
            <div style={{width:`${percentage}%`}}>
             
            </div>
        </div>
    
    )
}

export default ProgressBar
