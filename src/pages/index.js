import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
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


   //I know there has to be a better way to pass this data, don't judge me
    <Layout pageTitle="Giant Dog" pageText="Man CSS is a bit tough to figure out. Is anything changing still bob???">
      <body> The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever</body>
      <spacer>fack</spacer>
      <body> honk honk</body>
    </Layout>
  )
}
export default IndexPage