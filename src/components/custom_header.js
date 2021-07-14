import React from 'react'
import { Link } from 'gatsby'
import {
    container,
    menulinks,
    menulinkitem,
    menulinktext
} from './custom_header.module.css'

const Custom_header = ({ children }) => {
    return(
        <main className={container}>
            <ul className={menulinks}>
                <li className={menulinkitem}>
                    <Link to="/" className={menulinktext}>
                        Home
                    </Link>
                </li>
                <li className={menulinkitem}>
                    <Link to="/about" className={menulinktext}>
                        About
                    </Link>
                </li>
            </ul>
            {children}
        </main>
    )
}
export default Custom_header