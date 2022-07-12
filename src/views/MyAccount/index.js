
import React, { Component } from 'react';
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './myaccount.css';

import ImageLabel from '../ImageLabel.js';
import Dashboard from './Dashboard.js';
import Portfolio from './Portfolio.js';
import IDVerification from './IDVerification.js';
import Orders from './Orders.js';
import AccountDetails from './AccountDetails.js';

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state =({
        key: "dashboard"
    })
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key){
    this.setState({
        key: key
    })
  }

  render() {
    let key = this.state.key;
    return (
      <div>
        <Fade>
          <div className="img-box img-box-team">
            <Fade bottom delay={200}>
              <div style={{margin: "10% 12% 10% 12%"}}>
                <div className="d-highlight d-font-black d-text-72">
                  MY ACCOUNT
                </div>
              </div>
            </Fade>
          </div>
          <div style={{margin: "6% 12% 12% 12%"}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
              <Row>
                <Col md="auto" style={{paddingLeft: 24, marginBottom: 12}}>
                  <Nav variant="pills" className="flex-column" onSelect={this.handleSelect}>
                    <Nav.Item>
                      <Nav.Link className="nav-account" eventKey="dashboard" style={{padding: 20}}>
                        <ImageLabel
                          img={key==="dashboard"?"imgs/account/1.png":"imgs/account/1_c.png"}
                          color={key==="dashboard"?"black":"white"}
                          font="strong"
                          fontSize={24}
                          padding={12}
                          label="DASHBOARD"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-account" eventKey="portfolio" style={{padding: 20}}>
                        <ImageLabel
                          img={key==="portfolio"?"imgs/account/2.png":"imgs/account/2_c.png"}
                          color={key==="portfolio"?"black":"white"}
                          font="strong"
                          fontSize={24}
                          padding={12}
                          label="PORTFOLIO"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-account" eventKey="id_verification" style={{padding: 20}}>
                        <ImageLabel
                          img={key==="id_verification"?"imgs/account/3.png":"imgs/account/3_c.png"}
                          color={key==="id_verification"?"black":"white"}
                          font="strong"
                          fontSize={24}
                          padding={12}
                          label="ID VERIFICATION"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-account" eventKey="orders" style={{padding: 20}}>
                        <ImageLabel
                          img={key==="orders"?"imgs/account/4.png":"imgs/account/4_c.png"}
                          color={key==="orders"?"black":"white"}
                          font="strong"
                          fontSize={24}
                          padding={12}
                          label="ORDERS"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-account" eventKey="account_details" style={{padding: 20}}>
                        <ImageLabel
                          img={key==="account_details"?"imgs/account/5.png":"imgs/account/5_c.png"}
                          color={key==="account_details"?"black":"white"}
                          font="strong"
                          fontSize={24}
                          padding={12}
                          label="ACCOUNT DETAILS"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-account"style={{padding: 20}}>
                        <ImageLabel
                          img="imgs/account/6_c.png"
                          color="white"
                          font="strong"
                          fontSize={24}
                          padding={12}
                          label="LOGOUT"
                        />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col style={{paddingLeft: 24}}>
                  {key==='dashboard'?<Dashboard />:''}
                  {key==='portfolio'?<Portfolio />:''}
                  {key==='id_verification'?<div style={{height: '100%', display: 'grid', paddingBottom: 24}}><IDVerification /></div>:''}
                  {key==='orders'?<Orders />:''}
                  {key==='account_details'?<div style={{height: '100%', display: 'grid', paddingBottom: 24}}><AccountDetails /></div>:''}
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Fade>
      </div>
    )
  }
}

export default MyAccount;
