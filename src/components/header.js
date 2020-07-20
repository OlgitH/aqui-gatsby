import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import styled from "@emotion/styled"

const Menu = styled.div`
  position: relative;
  ul {
    position: absolute;
    right: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      padding: 0 1rem 0 0;
      &:last-child {
        padding: 0;
      }
      a {
        text-decoration: none;
      }
    }
  }
`

const Header = () => (
  <header style={{marginBottom:'1rem'}}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 style={{ fontSize: "1.2rem"}}>
            <Link to="/" style={{ textDecoration: "none" }}>
              Oliver Berman
            </Link>
          </h1>
        </div>
        <div className="col-8">
          <Menu>
            <ul>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/work/">Work</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </Menu>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
