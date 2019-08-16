import React from 'react'
import './navbar.css'
import lodo2 from './lodo2.png'
import cart from './cart2x.png'
import bars from './bars2x.png'


function Navbar () {
    return (
        <div>
           <nav className="navbar">
                <div className="navbar-center">
                    <span className="nav-icon">
                        <img src={bars} alt="menu"/>
                    </span>
                    <img src={lodo2} alt="store logo" className='imS' />
                    <div className="cart-btn">
                        <span className="nav-icon">
                            <img src={cart} alt="second" className='fas fa-cart-plus'/>
                        </span>
                        <div className="cart-items">0</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar