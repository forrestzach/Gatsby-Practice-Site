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
        I like to occupy my time with computers, robotics, and software. <br/>
        In my career, I am looking to the future to find opportunities where robotics can positively impact our day-to-day lives.<br/>
        <h3>Formal Education:</h3>
        I received my Computer Science degree from Clemson University in May of 2023. <br/>
        Some notable classes include: Machine Learning, Distributed & Cluster Computing, GPU Programming, VR Programming, Networks & Network Programming, Senior Computing Practicum (Capstone)<br/>
        <br/>
        I also worked towards a Business Administration Minor during my college career which pulled back the curtain on how businesses are run from a variety of perspectives such as management, financing, and accounting.<br/>
        <h3>Self-Taught Education:</h3>
      </p>
      <br/>
      <hr/>
      <h1>Experience</h1>
      <h2>Languages/Libraries</h2>
      <h3>Python, C++, C, Java, SQL, Flask, HTML, CSS, JavaScript, React, Arduino(C), GatsbyJS, Ada</h3>
      <br/>
      <h2>Other Technologies</h2>
      <h3>NGINX, Docker, Git, CAD, Linux, Debian, Apache</h3>

    </Layout>
  )
}
export default IndexPage