
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class BecomeInvestor extends Component {

  render() {
    let img = this.props.img;
    let title = this.props.title;
    let description = this.props.description;
    let delay = this.props.delay;

    return (
      <Fade delay={delay}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img className="img-mobile" src={img} alt="BecomeInvestor" />
          <div style={{marginLeft: 24}}>
            <div className="d-font-bold d-white d-text-30">
              {title}
            </div>
            <div className="d-font-book d-black d-text-18">
              {description}
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default BecomeInvestor;
