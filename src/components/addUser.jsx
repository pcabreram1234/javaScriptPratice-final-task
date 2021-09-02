import React from "react"
import addUserIcon from "../assets/images/Add user.png"
import "../styles/AddUser.css"

const AddUser = () => {
    return (
        <div className="AddUser--container">
            <div className="mainContainer">
                <div className="col">
                    <input type="text" placeholder="Nombre..." />
                    <input type="text" placeholder="País..." />
                    <select name="" id="">
                        <option value="">Estudiante</option>
                        <option value="">Desarrollador Web</option>
                        <option value="">Maestro</option>
                        <option value="">Arquitecto</option>
                        <option value="">Doctor</option>
                        <option value="">Policía</option>
                    </select>
                </div>

                <div className="col">
                    <img src={addUserIcon} alt="" className="addUserIcon" />
                </div>
            </div>
        </div>
    )
}

export default AddUser