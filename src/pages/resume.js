import * as React from 'react'
import Layout from '../components/layout'
import resumeFile from "../files/FZ_Resume_3-29-2021.pdf"
const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
      <h3><a href={resumeFile} download>Download PDF of Resume</a> </h3><br/>    
      <hr/>
      <h1>Novapath Supply Chain Systems </h1>
      <h2>Developer II (January 2026 -- Current)</h2>
      <h2>Developer I   (June 2023 -- December 2025)</h2>
      <p>
        - Created a vehicle routing problem solver using Python and Google OR-tools for creating multi-stop shipments with client data that has shown <u>annual cost savings of up to 63%</u> on real shipments. <br/>
        - Refactored essential data processing library generating a <u>18x processing speedup</u> for multiple tools. <br/>
        - Rebuilt internal Flask web application for rating truckload shipments with UI overhaul, implementing multithreading, and utilizing the data processing speedup to expand file size limit 10x. <br/>
        - Developed Python tool which combines Sage and Cargowise data, allowing staff to easily check on the status of in-transit shipments across all clients, simplifying a 30 hr/week task to <u>just 3 hr/week</u>. <br/>
        - Refactored main data upload tool architecture to improve Docker and speed up processing time.
      </p>
      <br/>
      <h1>Clemson Univeristy</h1>
      <h2>Research Intern (August 2022 -- May 2023)</h2>
      <p>
        - Built Full-Stack web application (React/Flask) to facilitate usage of a Computer Vision ML Model. <br/>
        - Worked with supervisors to establish requirements and functionalities, along with changes/updates. <br/>
        - Helped run usability testing as part of a research paper aimed at Clemson social media creators. <br/>
        - Presented web app and research findings alongside professor onstage at TAGA 2023.
      </p>
      <br/>
      <h1>Textron Systems</h1>
      <h2>Software Engineer Intern (May 2022 -- August 2022)</h2>
      <p>
        - Ramped up on a complex system and unfamiliar language (Ada) to contribute to a legacy codebase. <br/>
        - Worked on the new generation of C-17 aircraft maintenance training systems for the US Air Force. <br/>
        - Assisted team in HSI (Hardware-Software Integration) troubleshooting and handling integration errors. <br/>
      </p>
      <br/>
      <h1>Tetria Global Logistic Systems</h1>
      <h2>Intern (January 2022 -- April 2022)</h2>
      <p>
        - Wrote multiple complex Python scripts which cleaned and prepared data for national multi-stop shipping lane optimization. <br/>
        - Worked with team to help learn supply chain network optimization software “Prologix” (Made by Logistix Solutions). <br/>
        - Learned about and worked with data warehouses writing SQL queries pulling in data. 
      </p>
      <br/>
      <h1>Clemson Computing &amp; Information Technology (CCIT)</h1>
      <h2>Laptop Support / Service Desk (January 2020 -- December 2021)</h2>
      <p>
        - Provide in person customer-facing support for software/hardware issues on student’s laptops.<br/>
        - Worked remotely for 8 months in CCIT’s Tier 1 call center, providing a myriad of support processes for Clemson students and faculty.
      </p>
      <br/>
      <h1>McLeod Information Systems</h1>
      <h2>Lead Intern 2019</h2>
      <p>
        - Led a 6 person team of interns, provided assistance and designated tasks.<br/>
        - Helped prepare company for future clients.<br/>
        - Gained extensive knowledge in network architecture and virtual machines. 
      </p>
      <br/>
      <h1>Charleston County School District; Contracts and Procurement Office</h1>
      <h2>Summer Intern 2018</h2>
      <p>
        - 1 of 17 selected from Charleston County to participate in a paid work/study program.<br/>
        - Worked as a data entry clerk, completing multiple major projects necessary for 2018-2019 school year.
      </p>
    </Layout>
  )
}
export default ResumePage