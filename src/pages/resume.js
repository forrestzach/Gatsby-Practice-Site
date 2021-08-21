import * as React from 'react'
import Layout from '../components/layout'
const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
      <h1>My Experience</h1>
      <a href={"../files/FZ_Resume_3-29-2021.pdf"} download>.PDF of Resume</a> <br/>
      <a href={`../files/test.txt`} download>test</a>
      <hr/>
    </Layout>
  )
}
export default ResumePage