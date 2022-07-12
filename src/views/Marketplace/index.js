
import React, { Component } from 'react';
import { Button, Dropdown, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Product from '../Product';

class Marketplace extends Component {

  render() {
    return (
      <div style={{margin: "6% 12% 2% 12%"}}>
        <Fade>
          <div>
            <div className="d-highlight d-font-black d-text-90" style={{marginBottom: 12}}>
              Our Listings
            </div>
            <div className="d-white d-font-bold d-text-24" style={{marginBottom: 24}}>
              Become the landlord of the future
            </div>
            <div className="d-white d-font-book d-text-18" style={{marginBottom: 48}}>
              For the first time, investors around the globe can buy into the US real estate market through fully-compliant,
              fractional, tokenized ownership. Powered by blockchain.
            </div>
            <div className="d-content-center" style={{marginBottom: 60}}>
              <div className="d-highlight d-font-bold d-text-24" style={{width: 'fit-content', display: 'inline-block'}}>
                LOOKING FOR OUR OLDER OFFERINGS?
                <div>
                  <Button className="d-font-bold d-highlight-black-button d-text-24" style={{width: '100%'}}>
                    PREVIOUS PROPERTIES
                  </Button>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div className="d-white d-font-bold d-text-18" style={{marginRight: 'auto'}}>
                Showing all 10 results
              </div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="d-font-bold d-text-18" style={{borderRadius: 8}}>
                  Default Sorting
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Sort by 1</Dropdown.Item>
                  <Dropdown.Item>Sort by 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div style={{marginBottom: 84}} />
        </Fade>
        <Fade>
          <Row style={{margin: "4% 0"}} className="product-deskContent">
            <Col md="4">
              <Product
                img="imgs/home/3/house.png"
                address1="Shady Bend Dr"
                address2="Houston"
                minInvestment = {55}
                totalPrice = {91000}
                tokenPrice = {55}
                rentPerToken = {5}
                expectedROI = {11.02}
                invest = {79}
                totalTokens = {1500}
                tokensAvaliable = {1000}
                soldOut = {true}
              />
            </Col>
            <Col md="4">
              <Product
                img="imgs/home/3/house.png"
                address1="Shady Bend Dr"
                address2="Houston"
                minInvestment = {55}
                totalPrice = {91000}
                tokenPrice = {55}
                rentPerToken = {5}
                expectedROI = {11.02}
                invest = {79}
                totalTokens = {1500}
                tokensAvaliable = {1000}
                soldOut = {true}
              />
            </Col>
            <Col md="4">
              <Product
                img="imgs/home/3/house.png"
                address1="Shady Bend Dr"
                address2="Houston"
                minInvestment = {55}
                totalPrice = {91000}
                tokenPrice = {55}
                rentPerToken = {5}
                expectedROI = {11.02}
                invest = {79}
                totalTokens = {1500}
                tokensAvaliable = {1000}
                soldOut = {false}
              />
            </Col>
          </Row>
          <div className="product-phoneContent">
            <Product
              img="imgs/home/3/house.png"
              address1="Shady Bend Dr"
              address2="Houston"
              minInvestment = {55}
              totalPrice = {91000}
              tokenPrice = {55}
              rentPerToken = {5}
              expectedROI = {11.02}
              invest = {79}
              totalTokens = {1500}
              tokensAvaliable = {1000}
              soldOut = {true}
            />
            <Product
              img="imgs/home/3/house.png"
              address1="Shady Bend Dr"
              address2="Houston"
              minInvestment = {55}
              totalPrice = {91000}
              tokenPrice = {55}
              rentPerToken = {5}
              expectedROI = {11.02}
              invest = {79}
              totalTokens = {1500}
              tokensAvaliable = {1000}
              soldOut = {true}
            />
            <Product
              img="imgs/home/3/house.png"
              address1="Shady Bend Dr"
              address2="Houston"
              minInvestment = {55}
              totalPrice = {91000}
              tokenPrice = {55}
              rentPerToken = {5}
              expectedROI = {11.02}
              invest = {79}
              totalTokens = {1500}
              tokensAvaliable = {1000}
              soldOut = {false}
            />
          </div>
        </Fade>
      </div>
    )
  }
}

export default Marketplace;
