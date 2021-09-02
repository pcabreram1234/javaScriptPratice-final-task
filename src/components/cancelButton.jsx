import React from "react"
import cancelIcon from "../assets/images/Close.png"
import "../styles/CancelButton.css"

const CancelButton = () => {
    return (
        <button className="cancel">
            <img src={cancelIcon} alt="" className="saveIcon" />
            <span>Añadir</span>
        </button>
    )
}

export default CancelButton