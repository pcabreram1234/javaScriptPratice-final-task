import React from "react"
import addCurrencyInfoIcon from "../assets/images/AccountBalance.png"
import "../styles/AddUserCurrencyInfo.css"

const AddUserCurrencyInfo = () => {
    return (
        <div className="AddUserCurrencyInfo">

            <div className="AddUserCurrencyInfo--imageIcon">
                <img src={addCurrencyInfoIcon} alt="" />
            </div>

            <div className="AddUserCurrencyInfo--maincontainer">
                <div className="AddUserCurrencyInfo--col">
                    <input type="text" placeholder="Sueldo RD$..." id="sueldo" className="AddUserCurrencyInfo--input" />
                    <label htmlFor="Sueldo" className="AddUserCurrencyInfo--label">.00</label>
                </div>

                <div className="AddUserCurrencyInfo--col">
                    <input type="text" placeholder="Seguro Medico %" id="SNS" className="AddUserCurrencyInfo--input" />
                    <label htmlFor="SNS" className="AddUserCurrencyInfo--label">.00</label>
                </div>

                <div className="AddUserCurrencyInfo--col">
                    <input type="text" placeholder="Fondo de Pensiones %" id="AFP" className="AddUserCurrencyInfo--input" />
                    <label htmlFor="AFP" className="AddUserCurrencyInfo--label">.00</label>
                </div>

                <div className="AddUserCurrencyInfo--col">
                    <input type="text" placeholder="Otros Gastos RD$" id="GASTOS" className="AddUserCurrencyInfo--input" />
                    <label htmlFor="GASTOS" className="AddUserCurrencyInfo--label">.00</label>
                </div>
            </div>

        </div >

    )
}

export default AddUserCurrencyInfo