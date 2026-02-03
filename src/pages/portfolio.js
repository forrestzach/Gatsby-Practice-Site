// Step 1: Import your component
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <hr/>
    <h1>Personal Projects</h1>
    <h2>
      Robotic Arm
    </h2>
    <p>
      I designed, built, and programmed a 5 Degree of Freedom robotic arm as a solo passion project to learn more about robotics. It has been an extremely fulfilling experience and this is just the first iteration. It was designed to have a payload capacity of 500g at the end effector (gripper) which was successfully achieved.<br/>
      The vast majority of the parts were designed in CAD and then 3D printed in PLA, but of course the motors, electronics, and hardware were all purchased. To get the torque necessary for the arm to actually work I utilize a 2-stage planetary gearbox to get a 21:1 gear reduction for each of the joints. <br/>
      I built it iteratively rather than designing everything up front which allowed me to adjust as I learned. The "eureka" moment of the project was shrinking my original gearbox design to make it smaller and lighter for the other joints, while I left the stronger but large and bulky initial design as the base joint. <br/>
      It is operated by a Raspberry Pi driving a Arduino Mega microcontroller where I can control it using a simple Python GUI to move each joint individually or input coordinates for all the joints to move using inverse kinematics. <br/>
      Additionally, I made a simple serial protocol for the two boards to communicate, sharing position data and other instructions.<br/>

    </p>
    <h2>
      Cryptocurrency Arbitrage Tracker
    </h2>
    <p>
      
    </p>

    <h2>
      Portfolio Site (fzach.com)
    </h2>
    <p>
      The site you're on right now is fully developed and (used to be) hosted by yours truly!<br/>
      I had set up a Debian-Linux machine on an old computer which was running a NGINX web server in pairing with a Flask backend to serve the pages.<br/>
      My ISP no longer allows me to host public facing webservers so instead this is now running on Github Pages.<br/>
      For front-end I have utilized GatsbyJS, CSS, and JavaScript.<br/>
    </p>
    <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <br/>

    <hr/>
    <h1>Hackathons</h1>
    <h2>Sympto-Bot -  January 30th, 2021</h2>
    <p>
    A helpful, online symptom checker. <br/>
    React web app built alongside a team of four which utilized an Apache backend and accessed the Infermedica API for complex symptom analysis.<br/>
    <h3>&gt;My Role</h3>
    I was responsible for setting up the Apache web server in Google Cloud, along with setting up the link between our web server and our github repository for easy transfer of new files. I additionally acquired our domain and set up the DNS routing. <br/>
    🏆WINNER🏆: Best API Use <br/>
      <Link to="https://devpost.com/software/symptobot">
              DevPost Link
      </Link>
    </p>
    <br/>
    <h2>Puddle - January 25th, 2020</h2>
    <p>
    A pedestrian's assistant for dodging obstacles or being notified of other campus events.<br/>
    iOS app designed alongside a team of four which was made in Swift, and utilized Radar.io and the Apple Maps SDK for map display.  Best described as a Waze for pedestrians. <br/> 
    <h3>&gt;My Role</h3>
    Myself and another team member figured out how to setup radar.io, store the data sent in by the users, and send it back to the app.<br/>
    🏆WINNER🏆: Most Creative Usage of Radar.io <br/> 
      <Link to="https://devpost.com/software/puddle-serfum">
              DevPost Link
      </Link>
    </p>

    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage