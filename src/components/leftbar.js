import React from 'react'
import image from '../images/dashboardImages/dashboardMenuIcon.png'
import logo from '../images/dashboardImages/logo.png'

const LeftBar = () => {
    return (
        <div className="left-bar">
            <div className="logo">
                <img src={logo}/>
            </div>
            <ul className="menu">
                <li>
                    <a href="#"><img src={image}/></a>
                </li>
            </ul>
        </div>
    )
}

export default LeftBar
