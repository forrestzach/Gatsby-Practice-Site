import * as React from 'react'
import { Link } from 'gatsby'
import Custom_header from './custom_header.js'
import { 
    container, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    profileBlock,
    flexContainer,
    pageContent
} from  './layout.module.css'

const Layout = ({ pageTitle, pageText, children }) => {
  return (
    
      
    //this following bit of code went directly after the main classeName={container}> line.
    //could not figure out how to comment in there for the life of me.
    /*
      <h1 className ={custom_header}>
        headerText = {"fuckin work already"}
      
      </h1>
    */
    


    
    <main className={container}>
      
      <Custom_header>
        
      </Custom_header>
      <div className={flexContainer}>

      
        <div className={profileBlock}>
          Column 1
        </div>
        <div className={pageContent}>
          <title>Forrest Zach</title>
            {/* <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                  About
                </Link>
              </li>
            </ul>
            */}
        
          <h1 className={heading}>
            {pageTitle}
            </h1>
          <body> {pageText} </body>
        </div>
      </div>
      {children}
    </main>
  )
}
export default Layout