import * as React from 'react'
import { Link } from 'gatsby'
import Custom_header from './custom_header.js'
import {StaticImage} from 'gatsby-plugin-image'
import { 
    container, 
    heading,
    personalLinks,
    personalLinksItem,
    personalLinksText,
    profileBlock,
    flexContainer,
    pageContent,
    profileImage,
    nameTitle,
    customSvg,
} from  './layout.module.css'

const Layout = ({ pageTitle, pageText, children }) => {
  return (
    <main className={container}>
      <title>Forrest Zach</title>
      <Custom_header>
        
      </Custom_header>
      <div className={flexContainer}>

        {/*Profile block div data*/}
        <div className={profileBlock}>          
          <div className={profileImage}>
             <StaticImage
              alt="Aha there you are."
              src="../images/ForrestZachClemsonIDSQUARE.jpg"
              />
          </div>
          <div className={nameTitle}>
            Forrest Zach
          </div>
          {/*User links (external)*/}
          <ul className={personalLinks}>
            <li className={personalLinksItem}>
            <svg className={customSvg} xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 -5 25 25"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <Link to="https://www.linkedin.com/in/forrest-zach/" className={personalLinksText}>
                forrest-zach
              </Link>
            </li>
            <li className={personalLinksItem}>
              <Link to="https://github.com/forrestzach" className={personalLinksText}>
                forrestzach
              </Link>
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
        {/*Actual webpage content data div*/}
        <div className={pageContent}>
          
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