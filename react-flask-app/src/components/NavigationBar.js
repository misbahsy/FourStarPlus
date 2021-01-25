import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {

    margin-bottom: 10px;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #1f1f1f;
    &:hover {
      color: grey;
      text-decoration:none;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Four Star Plus</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
                <Router>
                <Link to="/">Home</Link>
              </Router>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Router>
              <Link to="/tv">Televisions</Link>
              </Router>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
                <Router>
              <Link to="/cameras">Cameras</Link>
              </Router>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
                <Router>
              <Link to="/computer_accesories">Computer Accesories</Link>
              </Router>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
                <Router>
              <Link to="/computer_tablets">Computers And Tablets</Link>
              </Router>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
                <Router>
              <Link to="/cellphone_accesories">Cellphones And Accesories</Link>
              </Router>
            </Nav.Link>
          </Nav.Item>          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)