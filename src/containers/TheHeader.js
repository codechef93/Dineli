
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Dropdown } from 'react-bootstrap';

class TheHeader extends Component {
  on_affiliate_clicked() {
    window.location.href = "#affiliate";
  }

  render() {
    return (
      <Navbar expand="lg" style={{margin: "0% 12% 0% 12%"}}>
        <Navbar.Brand href="#home">
          <img className="img-mobile" src="imgs/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="img-mobile" aria-controls="basic-navbar-nav" style={{backgroundColor: "white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft: 'auto'}}>
            <div className="deskContent" style={{position: 'absolute', marginTop: -48, marginLeft: '7rem'}}>
              <Button className="d-font-bold d-text-nav" style={{width: 192}} onClick={() => this.on_affiliate_clicked()}>Affiliate Program</Button>
              <div style={{width: 12}} />
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="d-font-book d-text-nav" style={{width: 192, borderRadius: 8}}>
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Chinese</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Nav.Link href="#marketplace">
              <div className="d-white d-font-book d-text-nav">
                MARKETPLACE
              </div>
            </Nav.Link>
            <Nav.Link href="#sell-tokens">
              <div className="d-white d-font-book d-text-nav">
                SELL TOKENS
              </div>
            </Nav.Link>
            <Nav.Link href="#team">
              <div className="d-white d-font-book d-text-nav">
                TEAM
              </div>
            </Nav.Link>
            <Nav.Link href="#learn">
              <div className="d-white d-font-book d-text-nav">
                LEARN
              </div>
            </Nav.Link>
            <Nav.Link href="#faq">
              <div className="d-white d-font-book d-text-nav">
                FAQ
              </div>
            </Nav.Link>
            <Nav.Link href="#blog">
              <div className="d-white d-font-book d-text-nav">
                BLOG
              </div>
            </Nav.Link>
            <Nav.Link href="#cart">
              <div className="d-white d-font-book d-text-nav">
                CART
              </div>
            </Nav.Link>
            <Nav.Link href="#my-account" className="deskContent">
              <img className="img-mobile" src="imgs/header/myaccount.png" alt="My Account" style={{position: 'absolute', marginTop: -18, marginLeft: '2rem'}} />
              <div className="d-white d-font-bold d-text-nav" style={{position: 'absolute', marginTop: -48, width: 'fit-content'}}>MY ACCOUNT</div>
            </Nav.Link>
            <Nav.Link href="#my-account" className="phoneContent">
              <div className="d-white d-font-book d-text-nav">MY ACCOUNT</div>
            </Nav.Link>
            <Nav.Link href="#affiliate" className="phoneContent">
              <div className="d-white d-font-book d-text-nav">AFFILIATE PROGRAM</div>
            </Nav.Link>
            <NavDropdown title={<span className="d-white d-font-book d-text-nav">LANGUAGE: English</span>} className="phoneContent">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Chinese</NavDropdown.Item>
              <NavDropdown.Item>Russian</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TheHeader;