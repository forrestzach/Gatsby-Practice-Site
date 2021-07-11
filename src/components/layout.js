import * as React from 'react'
import { Link } from 'gatsby'
import Custom_header from './custom_header.js'
import { 
    container, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    profileBlock
} from  './layout.module.css'
/*const heading = {
  color: "#FFFFFF",
  fontSize: 20,
}

const profileBlock = {
  marginleft: 0,
  margintop: 0,
  width: 200,
  hieght: 100vh,
}

const navLinks = {
  display: flex,
  //list-style: none:
  paddingleft: 0,
}
const navLinkItem = {
  paddingright: 2rem,

}*/
//what
//any changes?s
const Layout = ({ pageTitle, children }) => {
  return (
    
      
    //this following bit of code went directly after the main classeName={container}> line.
    //could not figure out how to comment in there for the life of me.
    /*
      <h1 className ={custom_header}>
        headerText = {"fuckin work already"}
      
      </h1>
    */
    


    
    <main className={container}>
      
      <Custom_header headerText = "cheese whizz">
        BOTTOM TEXT
      </Custom_header>
      
      agghhh
      
      <nav className={profileBlock}>

      </nav>
      <nav>
      <title>{pageTitle}</title>
        <ul className={navLinks}>
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
      </nav>
      <h1 className={heading}>
        {pageTitle}
        </h1>
      {children}
    </main>
  )
}
export default Layout