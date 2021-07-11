
// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const IndexPage = () => {
  return (
    /*
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>Beep Boop Beep.</p>
      <Link to="/about">About</Link>
    </main>
    */
    <Layout pageTitle="Home Page">
      <p>Man CSS is a bit tough to figure out. Is anything changing still bob???</p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage