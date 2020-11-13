import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { css } from "@emotion/core"

const styles = css`
  padding: 100px 0;
  background-color:#f6f6f6;
`


const Footer = ({ children}) => (
  <footer css={styles}>
    <div className="container">

        {children}
    
    </div>
  </footer>
)





export default Footer
