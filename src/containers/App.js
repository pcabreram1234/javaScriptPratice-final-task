import React from "react"
import AddUser from "../components/addUser"
import AddUserCurrencyInfo from "../components/addUserCurrencyInfo"
import AddButton from "../components/addButton"
import CancelButton from "../components/cancelButton"
import "../styles/App.css"

const App = () => {
    return (
        <div>
            <AddUser />
            <AddUserCurrencyInfo />
            <div className="buttonsContainer">
                <AddButton />
                <CancelButton />
            </div>
        </div>
    )
}

export default App