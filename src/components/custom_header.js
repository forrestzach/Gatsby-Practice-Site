import React from 'react'
import { Link } from 'gatsby'
import {
    container,
    menulinks,
    menulinkitem,
    menulinktext,
    headerSvg,
    logoContainer,
    navContainer
} from './custom_header.module.css'

const Custom_header = ({ children }) => {
    return(
        <main className={container}>
            <div className={logoContainer}>
                <Link to="/">
                    <div className={headerSvg}>
                       <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="46" height="46" viewBox="0 0 300 300"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M1340 2944 c-542 -68 -911 -323 -1165 -809 l-47 -90 303 -5 304 -5 3
                            -622 2 -623 95 0 95 0 0 275 0 275 134 0 135 0 56 87 c32 48 59 93 62 100 4
                            10 -34 13 -191 13 l-196 0 0 250 0 250 219 0 219 0 66 93 66 92 -510 5 -510 5
                            32 55 c44 77 178 205 275 263 420 251 934 262 1326 29 271 -161 484 -435 571
                            -733 52 -181 58 -427 16 -629 -11 -52 -20 -96 -20 -97 0 -2 42 -3 93 -3 l93 0
                            16 53 c34 110 42 175 42 332 0 403 -135 727 -423 1016 -217 216 -440 343 -706
                            401 -88 19 -369 32 -455 22z"/>
                            <path d="M1717 2198 c-69 -93 -107 -148 -107 -153 0 -3 83 -5 185 -5 102 0
                            185 -4 185 -9 0 -5 -43 -69 -97 -142 -568 -787 -783 -1088 -783 -1099 0 -7
                            216 -10 690 -10 l691 0 -16 -29 c-69 -135 -291 -310 -514 -407 -206 -89 -476
                            -125 -666 -89 -160 30 -363 116 -523 222 -155 103 -322 294 -412 472 -129 257
                            -156 565 -80 896 10 44 22 88 25 98 7 15 -1 17 -88 17 l-95 0 -21 -62 c-37
                            -111 -53 -210 -58 -353 -23 -606 327 -1147 897 -1388 246 -103 556 -133 827
                            -78 364 75 687 282 895 576 51 71 130 219 154 287 l13 38 -664 0 c-366 0 -665
                            4 -665 9 0 4 46 73 103 152 57 79 252 351 433 604 181 253 333 466 337 473 7
                            9 -57 12 -307 12 l-315 0 -24 -32z"/>
                            </g>
                        </svg>                        
                    </div>
                </Link>
            </div>
            <div className={navContainer}>
                <ul className={menulinks}>
                    <li className={menulinkitem}>
                        <Link to="/" className={menulinktext}>
                            Home
                        </Link>
                    </li>
                    <li className={menulinkitem}>
                        <Link to="/portfolio" className={menulinktext}>
                            Portfolio
                        </Link>
                    </li>
                    <li className={menulinkitem}>
                        <Link to="/resume" className={menulinktext}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
            {children}
        </main>
    )
}
export default Custom_header