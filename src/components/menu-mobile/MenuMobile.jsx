import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu-mobile.css'

import Home from '../../assets/house.png'
import Activity from '../../assets/activity.png'
import Wallet from '../../assets/wallet.png'
import Market from '../../assets/market.png'
import Earn from '../../assets/gift.png'

const MenuMobile = () => {
    return (
        <ul className="menu-mobile">
            <li>
                <NavLink to="/" exact activeClassName="active-footer-menu" className="footer-link">
                    <div className="footer-link-img-div">
                        <img src={Home} alt="Home" />
                    </div>
                    <span className="footer-link-text">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/activity" activeClassName="active-footer-menu" className="footer-link">
                    <div className="footer-link-img-div">
                        <img src={Activity} alt="Activity" id="activityImg" />
                    </div>
                    <span className="footer-link-text">Activity</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/wallet" activeClassName="active-footer-menu" className="footer-link">
                    <div className="footer-link-img-div">
                        <img src={Wallet} alt="Wallet" />
                    </div>
                    <span className="footer-link-text">Wallet</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/market" activeClassName="active-footer-menu" className="footer-link">
                    <div className="footer-link-img-div">
                        <img src={Market} alt="Market" id="marketImg" />
                    </div>
                    <span className="footer-link-text">Market</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/earn" activeClassName="active-footer-menu" className="footer-link">
                    <div className="footer-link-img-div">
                        <img src={Earn} alt="Earn" />
                    </div>
                    <span className="footer-link-text">Earn</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default MenuMobile
