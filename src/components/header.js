import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import styled from "@emotion/styled"
import Logo from "../images/logo/logo-white.png"



const Header = ({fixed}) => (
  <MainHeader rel={fixed}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} width="100"/>
            </Link>
          </h1>
        </div>
        <div className="col-8 d-flex justify-content-end">
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
  </MainHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}


Header.defaultProps = {
  siteTitle: ``,
}

export default Header



// Styles etc go here
////////////**********************/////////////////////////////////////////////////


const MainHeader = styled.header`
  position: ${props => props.rel ? `relative` : `absolute`};
  top:0;
  left:0;
  width:100%;
  z-index:99;
  background:${props => props.rel ? `blue` : `transparent`};
  .logo {
    padding:4px 0;
  }
`

const Menu = styled.div`
  position: relative;
  ul {
    padding: 0;
    margin:0;
    list-style: none;
    display: table;
    height:100%;
    li {
      display: table-cell;
      padding: 0 1rem 0 0;
      vertical-align:middle;

      &:last-child {
        padding: 0;
      }
      a {
        text-decoration: none;
        color:#fff;
      }
    }
  }
`
