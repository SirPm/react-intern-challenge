import React from 'react'
import Body from '../body/Body'
import HeaderDown from '../header-down/HeaderDown'
import HeaderUp from '../header-up/HeaderUp'
import MenuMobile from '../menu-mobile/MenuMobile'
import SelectCurrency from '../select-currency/SelectCurrency'

import './earn.css'

const Earn = () => {
    return (
        <div>
            <HeaderUp />
            <HeaderDown />
            <SelectCurrency />
            <Body heading="Earn" />
            <MenuMobile />
        </div>
    )
}

export default Earn
