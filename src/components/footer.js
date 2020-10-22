import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { css } from "@emotion/core"

const styles = css`
  padding: 2rem 0;
  background-color:#f6f6f6;
`


const Footer = ({ children}) => (
  <footer css={styles}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
        {children}
        </div>
      </div>
    </div>
  </footer>
)





export default Footer
