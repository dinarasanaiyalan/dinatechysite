import React from 'react'
import logo from '../assests/img/DinaTechy-Logo.png';

function Header() {
    return (
        <div className='header-content'>

            <img src={logo} alt="DinaTechy" width='100px' height='100px' style={{borderRadius: '50px'}} />
            <label className='logo-name'>DINATECHY</label>

        </div>
    )
}

export default Header