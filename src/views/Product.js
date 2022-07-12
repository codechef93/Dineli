
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ImageLabel from './ImageLabel';
import ColorLine from './ColorLine';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/Product.css';

class Product extends Component {

  render() {
    let img = this.props.img;
    let address1 = this.props.address1;
    let address2 = this.props.address2;
    let minInvestment = this.props.minInvestment.toFixed(2).toLocaleString();
    let totalPrice = this.props.totalPrice.toFixed(2).toLocaleString();
    let tokenPrice = this.props.tokenPrice.toFixed(2).toLocaleString();
    let rentPerToken = this.props.rentPerToken.toFixed(2).toLocaleString();
    let expectedROI = this.props.expectedROI.toFixed(2).toLocaleString();
    let invest = this.props.invest;
    let totalTokens = this.props.totalTokens;
    let tokensAvaliable = this.props.tokensAvaliable;
    let soldOut = this.props.soldOut;

    return (
      <div style={{width: '100%', borderRadius: 4, border: '2px solid', borderColor: '#03ffa4', marginTop: 30}}>
        <img src={img} alt="" style={{width: '100%'}} />
        <div style={{backgroundColor: '#323a45', padding: '6px 24px', display: 'flex', alignItems: 'center'}}>
          <img src="imgs/home/3/address.png" alt="" />
          <div style={{width: 12}} />
          <div className="d-white d-font-book d-text-24">
            {address1 + ","}
          </div>
          <div style={{width: 12}} />
          <div className="d-highlight d-font-book d-text-24">
            {address2}
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div className="col-md-7" style={{padding: 12}}>
            <ImageLabel
              img="imgs/home/3/minInvestment.png"
              font="bold"
              fontSize={18}
              padding={6}
              label="Minimum Investment:"
            />
            <div className="d-highlight d-font-book d-text-30">
              {'$' + minInvestment}
            </div>
            <ColorLine />
            <ImageLabel
              img="imgs/home/3/totalPrice.png"
              font="bold"
              fontSize={18}
              padding={6}
              label="TOTAL PRICE"
            />
            <div className="d-highlight d-font-book d-text-30">
              {'$' + totalPrice}
            </div>
            <ColorLine />
            <ImageLabel
              img="imgs/home/3/tokenPrice.png"
              font="bold"
              fontSize={18}
              padding={6}
              label="TOKEN PRICE"
            />
            <div className="d-white d-font-book d-text-36">
              {'$' + tokenPrice}
            </div>
            <ColorLine />
            <ImageLabel
              img="imgs/home/3/rentPerToken.png"
              font="bold"
              fontSize={18}
              padding={6}
              label="RENT PER TOKEN"
            />
            <div className="d-white d-font-book d-text-30">
              {'$' + rentPerToken + ' / Year'}
            </div>
          </div>
          <div className="col-md-5" style={{backgroundColor: '#323a45', padding: 12, marginLeft: 'auto'}}>
            <ImageLabel
              img="imgs/home/3/expectedROI.png"
              font="bold"
              fontSize={18}
              padding={6}
              label="Expected ROI:"
            />
            <div className="d-content-center d-highlight d-font-book d-text-30">
              {expectedROI + '%'}
            </div>
            <div style={{backgroundColor: 'white', borderRadius: 9999, margin: 12}}>
              <CircularProgressbarWithChildren value={invest}>
                <div className="d-content-center d-black d-font-black d-text-32">
                  <strong>{invest}</strong>%
                </div>
                <div className="d-content-center d-black d-font-bold d-text-10">
                  Invest
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <ImageLabel
                className="col-md-6"
                img="imgs/home/3/totalTokens.png"
                fontSize={14}
                padding={6}
                label="Total Tokens"
              />
              <div style={{marginRight: 'auto'}} />
              <div className="d-highlight d-font-book d-text-30" style={{marginRight: 12}}>|</div>
              <div className="col-md-6 d-highlight d-font-book d-text-30">
                {totalTokens}
              </div>
            </div>
            <ColorLine color='#03ffa4' />
            <div style={{display: 'flex', alignItems: 'center'}}>
              <ImageLabel
                className="col-md-6"
                img="imgs/home/3/tokensAvailable.png"
                fontSize={14}
                padding={6}
                label="Tokens Available"
              />
              <div style={{marginRight: 'auto'}} />
              <div className="d-highlight d-font-book d-text-30" style={{marginRight: 12}}>|</div>
              <div className="col-md-6 d-white d-font-book d-text-30">
                {tokensAvaliable}
              </div>
            </div>
          </div>
        </div>
        {
          soldOut === true?
          <Button className="d-font-black d-square-white d-text-30" style={{width: '100%', height: 60}}>
            Sold Out
          </Button>
          :
            <Button className="d-font-black d-square-black d-text-30" style={{width: '100%', height: 60}}>
              Start Now
            </Button>
        }
      </div>
    )
  }
}

export default Product;
