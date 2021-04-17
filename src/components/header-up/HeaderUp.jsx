import React from 'react'
import { NavLink } from 'react-router-dom'
import './header-up.css'

import Logo from '../../assets/logo-test.png'
import Notification from '../../assets/notification.png'
import Person from '../../assets/person-icon.png'

const HeaderUp = () => {
    return (
        <div className="header-up">
            <div className="logo-div">
                <div className="logo-image-div">
                    <img src={Logo} alt="logo" />
                </div>
                <span className="logo-text">ribbon</span>
            </div>
            <ul className="header-menu-div">
                <li>
                    <NavLink to="/" exact activeClassName="active-menu" className="menu-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/activity" activeClassName="active-menu" className="menu-link">Activity</NavLink>
                </li>
                <li>
                    <NavLink to="/wallet" activeClassName="active-menu" className="menu-link">Wallet</NavLink>
                </li>
                <li>
                    <NavLink to="/market" activeClassName="active-menu" className="menu-link">Market</NavLink>
                </li>
                <li>
                    <NavLink to="/earn" activeClassName="active-menu" className="menu-link">Earn</NavLink>
                </li>
            </ul>
            <div className="noti-and-person-div">
                <div className="person-icon-div">
                    <img src={Person} alt="person" />
                </div>
                <div className="noti-icon-div">
                    <img src={Notification} alt="notification" />
                </div>
            </div>
        </div>
    )
}

export default HeaderUp
