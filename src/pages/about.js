// Step 1: Import your component
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    /*
    <main>
        <Link to="/">Back to Home</Link>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
    */
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.According to all known laws of physics, it should be impossible for a bee to fly. Still connected?</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage