
import React, { Component } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import BecomeInvestor from './BecomeInvestor';
import Product from '../Product';
import './home.css';

class Home extends Component {

  renderHome1() {
    return <Fade>
      <div className="img-box img-box-home1">
        <Row style={{margin: "4% 12% 0% 12%"}}>
          <Col md="6" style={{marginBottom: 30}}>
            <Fade bottom delay={200}>
              <div className="d-white d-font-black d-text-90">
                Fractional and <br/>
                frictionless real <br/>
                estate investing
              </div>
              <div style={{height: 60}} />
              <div className="d-highlight d-font-black d-text-48">
                OWNERSHIP REINVENTED
              </div>
              <div style={{height: 24}} />
              <div className="d-white d-font-book d-text-24">
                For the first time, investors around the globe can buy into the US 
                real estate market through fully-compliant, fractional, 
                tokenized ownership. Powered by blockchain.
              </div>
            </Fade>
          </Col>
          <Col md="6" style={{paddingLeft: '20%', marginTop: 'auto'}}>
            <Fade bottom delay={600}>
              <div className="d-white d-font-black d-text-36" style={{width: 'fit-content'}}>
                EXPECTED ROI
                <div className="d-content-center d-white d-font-black d-text-18">
                  (rental income)
                </div>
              </div>
              
              <div className="d-white d-font-black d-text-90">
                Up to 12%
              </div>
            </Fade>
          </Col>
        </Row>
              
        <div style={{margin: "2% 12% 0% 12%"}}>
          <div>
            <Button className="d-font-black d-text-24" style={{width: 192}}>GET STARTED</Button>
          </div>
          <div style={{height: 48}} />
          <div className="d-white d-font-black d-text-30">
            AS SEEN ON
          </div>
          <img src="imgs/home/1/1.png" alt="" style={{width: '100%'}} />
        </div>
      </div>
    </Fade>;
  }

  /*renderHome2() {
    return <Fade>
      <div className="img-box img-box-home2">
        <div style={{margin: "8% 12% 2% 12%"}}>
          <Fade bottom delay={200}>
            <div>
              <div className="d-white d-font-black d-text-56 col-md-8">
                Dineli is the easiest and most
                transparent way to invest
                in income generating Real Estate
                in US Market
              </div>
              <div style={{margin: "2% 1%"}}>
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Start earning a second income today"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Buy Real estate hassle-free"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Invest in under 3 minutes"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="100% Legal and compliant"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="The new way to get a diversified Portfolio"
                />
                <ImageLabel
                  img="imgs/home/2/check.png"
                  padding={12}
                  fontSize={24}
                  label="Real estate NOW liquid. Resell it anytime"
                />
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <ImageLabel
                  img="imgs/logo2.png"
                  padding={24}
                  fontSize={18}
                  label="is regulated by the US Financial Service Authority "
                />
              </div>
              <Row>
                <Col md="auto" style={{marginTop: 30}}>
                  <Button className="d-font-black d-back-highlight-button d-text-18" style={{minWidth: 228, height: 48}}>GET STARTED</Button>
                </Col>
                <Col md="auto" style={{marginTop: 30}}>
                  <Button className="d-font-black d-none-white-button d-text-18" style={{minWidth: 228, height: 48}}>
                    <img src="imgs/home/2/movie.png" alt="Movie" style={{paddingRight: 8}} />
                    HOW IT WORKS
                  </Button>
                </Col>
              </Row>
              <div style={{height: 24}} />
              <div style={{display: 'flex', alignItems: 'flex-end', marginLeft: 12}}>
                <img src="imgs/home/2/rocket.png" alt="" style={{paddingRight: 4}} />
                <div className="d-white d-font-book d-text-18" style={{textDecoration: 'underline'}}>
                  Find out why now is a great time to buy US Real Estate
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>;
  }*/  

  renderHome3() {
    return <Fade>
      <div className="img-box img-box-home3">
        <div style={{margin: "4% 12% 4% 12%"}}>
          <Fade bottom delay={200}>
            <div>
              <div className="d-content-center d-white d-font-black d-text-48">
                OUR CURATED PROPERTIES
              </div>
              <div className="d-content-center d-highlight d-font-book d-text-20">
                Start building your real estate investment portfolio Today <br/>
                generating both rent and capital appreciation
              </div>
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
              <div className="d-content-center">
                <div className="d-white d-font-black d-text-36">
                  LOOKING FOR OUR SOLD PROPERTIES ?
                </div>
                <Button className="d-font-bold d-highlight-black-button d-text-24" style={{margin: '0 24%'}}>
                  PREVIOUS PROPERTIES
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>;
  }

  renderHome4() {
    return <Fade>
      <div style={{marginBottom: 24}} />
      <div className="img-box img-box-home4">
        <Row style={{marginTop: -24, marginBottom: -24}}>
          <Col md="5">
            <div className="img-box img-box-home4-left">
              <div style={{margin: "16% 12% 8% 24%"}}>
                <img className="img-mobile" src="imgs/home/4/1.png" alt="" style={{marginBottom: 12}} />
                <div className="d-white d-font-bold d-text-60" style={{lineHeight: '60px'}}>
                  Real estate <br/>
                  is still the best <br/>
                  investment you <br/>
                  can make.
                </div>
              </div>
            </div>
          </Col>
          <Col md="2" style={{marginBottom: 30}}/>
          <Col md="5">
            <div className="img-box img-box-home4-right" style={{height: '100%'}}>
              <div style={{margin: "24% 24% 8% 12%", textAlign: 'right'}}>
                <div className="d-white d-font-bold d-text-30" style={{marginBottom: 12}}>
                  BUT YOU DON T HAVE TO  <br/>
                  TAKE OUR WORD FOR IT.
                </div>
                <div className="d-white d-font-book d-text-20">
                  According to these nine Advisors in The  <br/>
                  Oracles, who made millions by  <br/>
                  investing in real estate, it’s  <br/>
                  still the best way to build  <br/>
                  wealth. Read more  <br/>
                  at CNBC.com {'>'}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{marginBottom: 48}} />
      <div className="d-content-center" style={{margin: "6% 12% 4% 12%"}}>
        <div className="d-highlight d-font-book d-text-30">
          Permissionless, compliant, and first-of-its-kind
        </div>
        <div className="d-white d-font-book d-text-18">
          Dineli provides investors with a simple, intelligent, and user-friendly method to buy into fractional, tokenized properties, leveraging the U.S. legal system and the 
          permissionless, unrestricted token issuance of Ethereum. Investing with Dineli means low maintenance property ownership, access to cash flows related to the property <br/>
          (e.g., rent), and frictionless ownership transactions via Dineli.
        </div>
      </div>
    </Fade>;
  }

  renderHome5() {
    return <Fade>
      <div className="img-box img-box-home5">
        <div style={{margin: "4% 12% 4% 12%"}}>
          <Fade bottom delay={200}>
            <div className="d-content-center d-white d-font-black d-text-30" style={{marginBottom: 30}}>
              GROW A GLOBAL, DIGITAL REAL ESTATE PORTFOLIO
            </div>
            <Row style={{marginBottom: 30}}>
              <Col md="6" style={{marginBottom: 30}}>
                <BecomeInvestor
                  img="imgs/home/5/1.png"
                  title="UNIQUE TOKENS"
                  description="Ownership of each property is distributed across a finite number of
                    representative tokens. Based on token share, owners can collect
                    revenue from rent, and vote on property decisions."
                  delay={200}
                />
              </Col>
              <Col md="6">
                <BecomeInvestor
                  img="imgs/home/5/2.png"
                  title="PROPERTY MANAGED"
                  description="Each Dineli property has a property management company managing 
                    the property on RealToken owners behalf. The property management 
                    company sources tenants, collects rent, and manages repairs, so the 
                    diverse group of Dineli owners don’t have to."
                  delay={200}
                />
              </Col>
            </Row>
            <Row style={{marginBottom: 30}}>
              <Col md="6" style={{marginBottom: 30}}>
                <BecomeInvestor
                  img="imgs/home/5/3.png"
                  title="LLC OWNED"
                  description="Real estate can’t directly be tokenized, but legal entities can. Each 
                    property is owned by a Limited Liability Corporation (LLC). Each
                    LLC is tokenized to specific RealTokens and made available for 
                    purchase."
                  delay={200}
                />
              </Col>
              <Col md="6">
                <BecomeInvestor
                  img="imgs/home/5/4.png"
                  title="WEEKLY RENT PAYMENTS"
                  description="With blockchains, we no longer need to wait 30 days to receive a bank 
                    transfer. Owning property with Dineli allows you to collect rent every 
                    week. Rent is paid using a US-Dollar stablecoin, sent to your xDai or 
                    Ethereum wallet."
                  delay={200}
                />
              </Col>
            </Row>
          </Fade>
        </div>
      </div>
    </Fade>;
  }

  renderHome6() {
    return <Fade>
      <div>
        <div style={{margin: "6% 2% 4%"}}>
          <img src="imgs/home/6/back.png" alt="" style={{width: '100%'}} />
        </div>
      </div>
      <div style={{margin: "6% 12% 4% 12%"}}>
        <div className="d-content-center d-highlight d-font-book d-text-24" style={{marginBottom: 30}}>
          WHAT DO WE AT DINELI
        <div className="d-content-highlight" style={{width: 80, height: 2, margin: '2% auto'}} />
        </div>
        <Row>
          <Col className="d-content-center" md="4" style={{marginBottom: 30}}>
            <img src="imgs/home/6/1.png" alt="" style={{marginBottom: 30}} />
            <div className="d-white d-font-book d-text-18">
              Dineli allows anyone to invest in the real estate 
              sector from only  an average $55 Token  and 
              without the paperwork and procedures that 
              make it so complex.
            </div>
          </Col>
          <Col className="d-content-center" md="4" style={{marginBottom: 30}}>
            <img src="imgs/home/6/2.png" alt="" style={{marginBottom: 30}} />
            <div className="d-white d-font-book d-text-18">
              We use blockchain technology to bring together many small, 
              medium or big investors. Each property is owned by a Limited 
              Liability Corporation (LLC) which is fractionated and Tokenized. 
              The Tokens created for each property are then made available 
              for purchase. Between all investors, enough financial muscle 
              is generated to invest in projects normally reserved for 
              professional investors.
            </div>
          </Col>
          <Col className="d-content-center" md="4" style={{marginBottom: 30}}>
            <img src="imgs/home/6/3.png" alt="" style={{marginBottom: 30}} />
            <div className="d-white d-font-book d-text-18">
              When you invest in a property with Dineli, you are 
              buying a piece of the property and the profitability 
              that is generated. Owning property with 1Ri.co 
              allows you to collect rent every week. Rent is 
              paid using a US-Dollar stablecoin, sent to your 
              xDai, Binance or Etherum wallet
            </div>
          </Col>
        </Row>
      </div>
    </Fade>;
  }

  renderHome7() {
    return <Fade>
      <div className="img-box img-box-home7">
        <div style={{margin: "6% 12% 12% 12%"}}>
          <Fade bottom delay={200}>
            <div>
              <div className="d-content-center d-white d-font-bold d-text-48" style={{marginBottom: 36}}>
                Interested in Updates?
              </div>
              <div className="d-content-center d-white d-font-bold d-text-30">
                The Dineli Newsletter
              </div>
              <div className="d-content-center d-white d-font-bold d-text-18">
                Fractional, liquid real estate investing.
              </div>
              <div style={{height: 72}} />
              <Form style={{margin: "0 12% 0 12%"}}>
                <Form.Group as={Row} style={{alignItems: 'center'}}>
                  <Form.Label column sm={6} style={{marginTop: 24}}>
                    <div className="d-content-center d-white d-font-black d-text-48">Stay in Touch With Us.</div>
                  </Form.Label>
                  <Col sm={3} style={{marginTop: 24}}>
                    <Form.Control className="d-font-black d-text-18" type="email" placeholder="Email Address" style={{height: 60}} />
                  </Col>
                  <Col sm={3} style={{marginTop: 24}}>
                    <Button className="d-font-black d-back-highlight-button d-text-18" style={{height: 60, width: '100%', minWidth: 160}}>Newsletter SIGN UP</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>;
  }

  /*renderHome8() {
    return <Fade>
      <div className="img-box img-box-home8">
        <Row style={{margin: "10% 12% 10% 12%"}}>
          <Col md="6">
            <Fade bottom delay={200}>
              <div className="d-white d-font-black d-text-60">
                Why invest in real estate
              </div>
              <div className="d-black d-font-book d-text-24">
                It's an asset class that offers steady income and low volatility
              </div>
              <div style={{height: 24}} />
              <div className="d-white d-font-bold d-text-28">
                Best Performing Asset Class through Time
              </div>
              <div className="d-black d-font-book d-text-24">
                Real Estate has historically been the number 1 investment for wealth creation
              </div>
              <div style={{height: 24}} />
              <div className="d-white d-font-bold d-text-28">
                Passive Income
              </div>
              <div className="d-black d-font-book d-text-24">
                Real Estate generates a recurring income stream from renting out the 
                property
              </div>
              <div style={{height: 24}} />
              <div className="d-white d-font-bold d-text-28">
                Stability
              </div>
              <div className="d-black d-font-book d-text-24">
                Real Estate prices tend to be less volatile than stocks and 
                other financial assets over the long run
              </div>
              <div style={{height: 24}} />
              <div className="d-white d-font-bold d-text-28">
                Residential
              </div>
              <div className="d-black d-font-book d-text-24">
                Covid-19 has made housing more relevant than ever before
              </div>
              <div style={{height: 24}} />
              <Button className="d-font-black d-black-white-button d-text-24" style={{width: 240, height: 60}}>START NOW</Button>
            </Fade>
          </Col>
        </Row>
      </div>
    </Fade>;
  }

  renderHome9() {
    return <Fade>
      <div className="img-box img-box-home9">
        <div style={{margin: "10% 20% 10% 20%"}}>
          <Fade bottom delay={200}>
            <div className="d-content-center d-white d-font-black d-text-72">
              NEED HELP GETTING STARTED?
            </div>
            <div className="d-content-center d-white d-font-book d-text-20">
              Talk to one of our team members and start building your portfolio
            </div>
            <div style={{height: 24}} />
            <div className="d-content-center">
              <Button className="d-font-black d-back-highlight-button d-text-24" style={{height: 60}}>SCHEDULE A CALL</Button>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>;
  }*/

  renderHome8() {
    return <Fade>
      <div className="img-box img-box-home8">
        <Fade bottom delay={200}>
          <div className="d-white d-font-bold d-text-48" style={{margin: "12%"}}>
            Who's talking about Dineli?
          </div>
        </Fade>
      </div>
    </Fade>;
  }

  renderHome9() {
    return <Fade>
      <div style={{margin: "6% 12% 6% 12%"}}>
        <div className="d-content-center d-white d-font-book d-text-30" style={{marginBottom: 12}}>
          TOKENIZING REAL ESTATE
        </div>
        <div className="d-content-center d-highlight d-font-bold d-text-48" style={{marginBottom: 36}}>
          The future of real estate investing is fractional
        </div>
        <div className="d-content-center d-white d-font-book d-text-24" style={{marginBottom: 24}}>
          Tokenizing real estate has become the focus of many institutions in 2018, and is likely to continue into the future as Ethereum offers a 
          way to add improved levels of liquidity (tokens) to a notoriously illiquid industry (real estate). <br/>
          Fractional ownership democratizes access to real estate investment, and therefore distributes and minimizes the risks and labor 
          involved with owning property.  And Dineli makes it even simpler!
        </div>
        <div className="d-content-center">
          <Button className="d-font-black d-back-highlight-button d-text-24" style={{height: 60, width: '100%', maxWidth: 240}}>GET STARTED</Button>
        </div>
      </div>
    </Fade>;
  }

  render() {
    return (
      <div>
        {this.renderHome1()}
        {/*this.renderHome2()*/}
        {this.renderHome3()}
        {this.renderHome4()}
        {this.renderHome5()}
        {this.renderHome6()}
        {this.renderHome8()}
        {this.renderHome9()}
        {this.renderHome7()}
      </div>
    )
  }
}

export default Home;