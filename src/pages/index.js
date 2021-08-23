import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout pageTitle="Hello, and welcome!">
      <h3>I'm Forrest, and I'm a Software Developer!</h3> <br/>
      <hr/>
      <h1>About Me</h1>
      
      <p>
        I like to occupy my time with computers, software, robotics, and logic. <br/>
        In my career, I am looking into the future to see where software and business intersect.<br/>
        <h3>Education details:</h3>
        I'm a Computer Science major at Clemson University, expecting to graduate in 2023. 
        Additionally, I am also pursuing a Business Administration Minor which has been a lot more interesting than I initially expected.  
        It has pulled back the curtain on how businesses are run from a variety of perspectives within any given company such as management, financing, and accounting. 
      </p>
      <br/>
      <hr/>
      <h1>Experience</h1>
      <h2>Languages/Libraries</h2>
      <h3>Java, C++, C, Python, HTML, CSS, JavaScript, React, GatsbyJS</h3>
      <br/>
      <h2>Other Technologies</h2>
      <h3>Debian, Apache, NGINX, Flask, Git</h3>

    </Layout>
  )
}
export default IndexPage