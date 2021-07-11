import React from 'react'
import {header} from './custom_header.module.css'

const Custom_header = ({ headerText, children }) => {
    
    return(
        <main className={header}>
            <p> {headerText}</p>
            {children}
        </main>
        
    )
    
}
export default Custom_header