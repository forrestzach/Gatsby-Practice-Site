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
      Portfolio Site (fzach.com)
    </h2>
    <p>
      The site you're on right now is fully developed and hosted by yours truly!<br/>
      I have set up a Debian-Linux machine on an old computer which is running a NGINX web server in pairing with a Flask backend.<br/>
      For front-end I have utilized GatsbyJS, CSS, and JavaScript.<br/>
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