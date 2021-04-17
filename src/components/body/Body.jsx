import React from 'react'
import './body.css'

import HivAndBlood from '../../assets/hiv-and-blood.png'
import Lungs from '../../assets/lungs.png'
import BpCheck from '../../assets/blood-pressure-check.png'

const Body = ({ heading }) => {
    return (
        <div className="body">
            <h3 className="body-heading">{heading}</h3>
            <div className="body-content">
                <div className="body-item">
                    <div className="bi-first">
                        <img src={HivAndBlood} alt="hiv logo and blood" />
                    </div>
                    <div className="bi-second">
                        <span>HIV Blood Draw Test</span>
                    </div>
                    <div className="bi-third">
                        <span>A100</span>
                    </div>
                </div>
                <div className="body-item">
                    <div className="bi-first">
                        <img src={Lungs} alt="lungs" />
                    </div>
                    <div className="bi-second">
                        <span>TB Radiology Xray</span>
                    </div>
                    <div className="bi-third">
                        <span>A30</span>
                    </div>
                </div>
                <div className="body-item">
                    <div className="bi-first">
                        <img src={BpCheck} alt="bp check" />
                    </div>
                    <div className="bi-second">
                        <span>Blood Pressure Check</span>
                    </div>
                    <div className="bi-third">
                        <span>A10</span>
                    </div>
                </div>
            </div>
            <div className="body-footer"></div>
        </div>
    )
}

export default Body
