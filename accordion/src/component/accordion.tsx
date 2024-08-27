import React, { useState } from "react";

const Accordion = (props: any) => {

    return (
        <>
            <div
                style={{
                    cursor: "pointer",
                    backgroundColor: "#f1f1f1",
                    padding: "10px",
                    border: '1px solid #ccc'
                }}
                onClick={props.toggleAccordion}>
                <span>{props.ele.header}</span>
            </div>
            {props.isShow && (
                <div
                    style={{
                        backgroundColor: "fafafa",
                        padding: "10px",
                        border: '1px solid #ccc',
                        borderTop: 'none',
                    }}
                >
                    <span>{props?.ele?.text}</span>
                </div>

            )}
        </>
    )

}

export default Accordion

