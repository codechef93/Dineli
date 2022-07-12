
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Portfolio extends Component {

  render() {
    return (
      <>
        <div className="d-content-highlight d-font-strong d-black d-text-30" style={{padding: '24px 4%', display: 'flex', alignItems: 'center'}}>
          Rent
          <img className="img-mobile" src="imgs/account/orders/1.png" alt="" style={{marginLeft: 12}} />
          <img className="img-mobile" src="imgs/account/logo.png" alt="" style={{marginLeft: 'auto'}} />
        </div>
        <div className="d-content-center" style={{marginTop: 36}}>
          <Button className="d-font-strong d-text-18" style={{paddingLeft: 36, paddingRight: 36}}>
            Claim rent on Ethereum
          </Button>
        </div>
      </>
    )
  }
}

export default Portfolio;
