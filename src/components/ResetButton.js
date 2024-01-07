import React from "react"
import "./ResetButtom.css"

export const ResetButton = (resetBoard) => {
    return (
        <button className='reset-btn' onClick={resetBoard}>Reset</button>
    )
}