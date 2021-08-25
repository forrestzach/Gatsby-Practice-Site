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
    pageContainer,
    custFooter,
    custFooterText,
    logoFooterContainer,
    logoFooterSvg,
} from  './layout.module.css'

const Layout = ({ pageTitle,children }) => {
  return (
    <main className={container}>
      <title>Forrest Zach</title>
      <Custom_header/>
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
          {/* tutorial style implementation for list of text
          <ul className={personalLinks}>
            <li className={personalLinksItem}>
            <svg className={customSvg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" transform="translate(5 15)"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <Link to="https://www.linkedin.com/in/forrest-zach/" className={personalLinksText}>
                forrest-zach
              </Link>
            </li>
            <li className={personalLinksItem}>
            <svg className={customSvg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" transform="translate(5 15)"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
              <Link to="https://github.com/forrestzach" className={personalLinksText}>
                forrestzach
              </Link>
            </li>
          </ul>
          */}
          {/*Custom implementation for vertical list of text*/}
          <div className={personalLinks}>
            <div className={personalLinksText}>
              <svg className={customSvg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" transform="translate(5 15)"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <Link to="https://www.linkedin.com/in/forrest-zach/" className={personalLinksText}>
              forrest-zach
              </Link>
            </div>
            <div className={personalLinksText}>
              <svg className={customSvg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30" transform="translate(5 15)"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
              <Link to="https://github.com/forrestzach" className={personalLinksText}>
              forrestzach
              </Link>
            </div>
          </div> 
          <div className={custFooter}>
            <div className={custFooterText}>
              © Forrest Zach 2021
            </div>
          </div> 
        </div>
        {/*Actual webpage content data div*/}
        <div className={pageContainer}>
          <div className={pageContent}>        
            <div className={heading}>
              {pageTitle}
            </div>
            {/*Having the {children} item in here is critical to have page data transferred from webpage.js files into the formatted layout.*/}
            {children}
            
          </div>
          <div className={logoFooterContainer}>
            <div className={logoFooterSvg}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="100" height="100" viewBox="0 0 300 300"
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
          </div>
        </div>
      </div>
      
    </main>
  )
}
export default Layout