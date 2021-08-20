// Step 1: Import your component
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <h1>Personal Projects</h1>
    <p>
      long list of accolades and successes
    </p>
    <br/>

    <hr/>
    <h1>Hackathons</h1>
    <h2>Sympto-Bot -  January 30th, 2021</h2>
    <p>React web app which utilized an Apache backend and accessed the Infermedica API.<br/> 
    <h3>My Role</h3>
    I was responsible for setting up the Apache web server in Google Cloud, along with setting up the link between our web server and our github repository for easy transfer of new files. I additionally acquired our domain and set up the DNS routing. <br/>WINNER: Best API Use <br/>
      <Link to="https://devpost.com/software/symptobot">
              DevPost Link
      </Link>
    </p>
    <br/>
    <h2>Puddle - January 25th, 2020</h2>
    <p>iOS app designed alongside a team.  Best described as a Waze for pedestrians <br/> WINNER: Most Creative Usage of Radar.io <br/> 
      <Link to="https://devpost.com/software/puddle-serfum">
              DevPost Link
      </Link>
    </p>

    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage