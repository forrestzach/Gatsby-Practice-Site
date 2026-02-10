// Step 1: Import your component
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import { 
    media_container,
    media_photo,
    media_video
} from  '../global.css'
// import RobotPhoto from "./F_and_robot.jpg"
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <hr/>
    <h1>Personal Projects</h1>
    <h2>
      Robotic Arm (V1)
    </h2>
    <p>
      - I designed, built, and programmed a 5 Degree of Freedom robotic arm as a solo passion project to learn more about robotics. It has been an extremely fulfilling experience and this is just the first iteration. It was designed to have a payload capacity of <u>500g</u> at the end effector (gripper) which was successfully achieved.<br/>
      - The vast majority of the parts were designed in CAD and then 3D printed in PLA, but of course the motors, electronics, and hardware were all purchased. To get the torque necessary for the arm to actually work I utilize a custom 2-stage planetary gearbox to get a 21:1 gear reduction for each of the joints. <br/>
      - I built it iteratively rather than designing everything up front which allowed me to tweak the design as I learned. The "eureka" moment of the project was shrinking my original gearbox design to make it smaller and lighter for the other joints, while I left the stronger but larger and bulky initial design as the base joint. <br/>
      - It is operated by a Raspberry Pi driving an Arduino Mega microcontroller where I can control it using a simple Python GUI to move each joint individually or input coordinates for all the joints to move using inverse kinematics. <br/>
      - Additionally, I made a simple serial protocol for the two boards to communicate, sharing position data and other instructions.<br/>
      - Check out the models and code on my Github repo for this project: <Link to="">Robotic Arm</Link>
    </p>
    <div class="media_container">
      <div class="media_photo">
        {/* <img src={RobotPhoto} alt="Me and Robot V1"></img> */}
        <StaticImage src="../images/F_and_robot.jpg" alt="Me and Robot V1"/>
      </div>
      <div class="media_video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=5Ax08KTaaEkKR77C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <h2>
      Cryptocurrency Arbitrage Tracker
    </h2>
    <p>
      - I've always had an intellectual (and obviously financial) interest in the concept of a computer performing automated trades in financial markets. While researching different approaches, I learned about the concept of triangular arbitrage which has a low hold time and thus a lower risk. <br/>
      - Using triangular arbitrage, you take advantage of market inefficiencies where there are price discrepancies between currency pairs (BTC-&gt;ETH, USD-&gt;BTC) which can allow you to take a profit before the market moves and the prices return to equilibrium. This website has a thorough explanation of the concept: <Link to="https://www.investopedia.com/terms/t/triangulararbitrage.asp">Triangular Arbitrage</Link><br/>
      - I utilized asyncronous Python code to pull in live data from a cryptocurrency exchange and monitor prices across a series of arbitrage paths to find opportunities where there is a chance to take a profit by executing a series of trades.<br/>
      - <u>Remarkably, it works and there actually were chances to make a profit!</u> However, with transaction fees on each trade the margins were razor thin and would necessitate a large amount of starting capital to capture real gains, so I opted not to program the process of actually going through with the transactions.<br/>
      - Check out the code and example output of the live opportunities on my Github repo for this project: <Link to="">Arbitrage Tracker</Link>
    </p>

    <h2>
      Portfolio Site (fzach.com)
    </h2>
    <p>
      - The site you're on right now is fully developed and (used to be) hosted by yours truly!<br/>
      - I had set up a Debian-Linux machine on an old computer which was running a NGINX web server in pairing with a Flask backend to serve the pages.<br/>
      - For front-end I have utilized GatsbyJS, CSS, and JavaScript.<br/>
      - My ISP no longer allows me to host public facing webservers so instead this is now running on Github Pages.<br/>
    </p>
    
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