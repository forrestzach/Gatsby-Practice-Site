import * as React from 'react'
import Layout from '../components/layout'
import resumeFile from "../files/FZ_Resume_3-29-2021.pdf"
const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
      <h3><a href={resumeFile} download>Download PDF of Resume</a> </h3><br/>    
      <hr/>
      <h1>Clemson Computing &amp; Information Technology (CCIT) (Current) </h1>
      <h2>Laptop Support / Service Desk</h2>
      <p>
        -Provide in person customer-facing support for software/hardware issues on student’s laptops.
        <br/>-Worked remotely for 8 months in CCIT’s Tier 1 call center, providing a myriad of support processes for Clemson students and faculty.
      </p>
      <br/>
      <h1>McLeod Information Systems</h1>
      <h2>Lead Intern 2019</h2>
      <p>
        -Led a 6 person team of interns, provided assistance and designated tasks.<br/>
        -Helped prepare company for future clients.<br/>
        -Gained extensive knowledge in network architecture and virtual machines. 
      </p>
      <br/>
      <h1>Charleston County School District; Contracts and Procurement Office</h1>
      <h2>Summer Intern 2018</h2>
      <p>
        -1 of 17 selected from Charleston County to participate in a paid work/study program.<br/>
        -Worked as a data entry clerk, completing multiple major projects necessary for 2018-2019 school year.
      </p>
    </Layout>
  )
}
export default ResumePage