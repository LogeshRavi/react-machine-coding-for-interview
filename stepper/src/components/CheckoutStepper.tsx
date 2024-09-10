import React, { useState } from 'react'

const CheckoutStepper = ({ stepsConfig = [] }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [isComplete, setIsComplete] = useState(false)
    console.log("stepsConfig", stepsConfig)

    const handleNext = () => {
        setCurrentStep((prev: any) => {
            if (prev === stepsConfig.length) {
                setIsComplete(true)
                return prev
            } else {
                return prev + 1
            }
        })
    }

    const ActiveComponent:any = stepsConfig[currentStep - 1]?.Component;

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    };
    return (
        <div>
            <div className='stepper'>
                {stepsConfig.map((step: any, index: any) => {
                    return (
                        <div
                            key={step.name}
                            className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""
                                } ${currentStep === index + 1 ? "active" : ""} `}
                        >
                            <div className="step-number">
                                {currentStep > index + 1 || isComplete ? (
                                    <span>&#10003;</span>
                                ) : (
                                    index + 1
                                )}
                            </div>
                            <div className="step-name">{step.name}</div>

                        </div>
                    );
                })}


                <div
                    className="progress-bar"

                >
                    <div
                        className="progress"
                        style={{ width: `${calculateProgressBarWidth()}%` }}
                    ></div>
                </div>
            </div>

            
            {/* <ActiveComponent/> */}

            {!isComplete && (<button onClick={handleNext}>{currentStep === stepsConfig.length ? "Finish" : "Next"}</button>)}

        </div >



    )
}

export default CheckoutStepper
