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
    <h2>Sympto-bot -  DATE HERE</h2>
    <p> sympto-bot content</p>
    <br/>
    <h2>Puddle - January 25th, 2020</h2>
    <p>iOS app designed alongside a team.  Best described as a Waze for pedestrians <br/>
      <Link to="https://devpost.com/software/puddle-serfum">
              DevPost Link
      </Link>
    </p>

    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage