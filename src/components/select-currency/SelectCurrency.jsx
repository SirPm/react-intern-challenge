import React from 'react'
import './select-currency.css'
import DownArrow from '../../assets/down-arrow.png'

const SelectCurrency = () => {
    return (
        <div className="select-currency">
            <p className="select-currency-heading">Select Currency:</p>
            <div className="select-and-input">
                <div className="select">
                    <p className="select-text">AFYA</p>
                    <div className="down-arrow-div">
                        <img src={DownArrow} alt="down arrow" />
                    </div>
                </div>
                <div className="input">0.00000001</div>
            </div>
            <div className="send-and-receive-btns">
                <button className="btn-select">Send</button>
                <button className="btn-select">Receive</button>
            </div>
        </div>
    )
}

export default SelectCurrency
