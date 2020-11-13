import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { css } from "@emotion/core"




const ContactList = () => (
  <>
  <h2>Contact</h2>
  <ul css={contactList}>
  <li><a href="mailto:contact@aqui.agency">contact@aqui.agency</a></li>
  <li><a href="tel:00447757076088">+44 (0)7757 076088</a></li>
  <li><a href="https://www.linkedin.com/company/aquiagency">LinkedIn</a></li>
  </ul>
  </>
)


const contactList = css`
list-style:none;
padding:0;
li {
  margin-bottom:10px;
}
`

export default ContactList
