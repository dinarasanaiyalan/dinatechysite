import React from 'react'
import logo from '../assests/img/DinaTechy-Logo.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header-content'>

            <div>
                <img src={logo} alt="DinaTechy" width='100px' height='100px' style={{ borderRadius: '50px' }} />
                <label className='logo-name'>DINATECHY</label>
            </div>

            <div>
                <ul className='menu-list'>
                    <li>
                        <Link to='/content' >Java</Link>
                    </li>
                    <li>
                        <Link to='/articles' >Article</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header