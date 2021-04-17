import React from 'react'
import './header-down.css'

const HeaderDown = () => {
    return (
        <div className="header-down">
            <div className="afya-div">
                <span className="currency-name" id="afya">AFYA</span>
                <span className="currency-value">143.00</span>
                <span className="currency-label">Balance</span>
            </div>
            <hr className="header-down-hr" />
            <div className="zar-div">
                <span className="currency-name" id="zar">ZAR</span>
                <span className="currency-value">R21</span>
                <span className="currency-label">Equivalent</span>
            </div>
        </div>
    )
}

export default HeaderDown
