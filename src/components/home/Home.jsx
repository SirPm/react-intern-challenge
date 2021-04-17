import React from 'react'
import Body from '../body/Body'
import HeaderDown from '../header-down/HeaderDown'
import HeaderUp from '../header-up/HeaderUp'
import MenuMobile from '../menu-mobile/MenuMobile'
import SelectCurrency from '../select-currency/SelectCurrency'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <HeaderUp />
            <HeaderDown />
            <SelectCurrency />
            <Body heading="Home" />
            <MenuMobile />
        </div>
    )
}

export default Home
