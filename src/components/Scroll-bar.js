import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Scrollbar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { top: 0 };
    this.trackV = this.trackV.bind(this);
    this.trackH = this.trackH.bind(this);
    this.thumbV = this.thumbV.bind(this);
    this.thumbH = this.thumbH.bind(this);
  }

   trackV ({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: `#EFF5F8`,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 2
    };
    return <div className="thumb thumb-vertical" style={{ ...style, ...thumbStyle }} {...props} />
  };

  thumbV ({ style, ...props }) {
    const trackStyle = {
      backgroundColor: '#5D616D',
    };

    return <div className="track track-vertical" style={{ ...style, ...trackStyle }} {...props} />
  };

  trackH ({ style, ...props }) {
    const trackStyle = {
      backgroundColor: '#EFF5F8',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2
    };

    return <div className="track track-horisontal" style={{ ...style, ...trackStyle }} {...props} />
  };

  thumbH ({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: `#5D616D`
    };
    return <div className="thumb thumb-horisontal" style={{ ...style, ...thumbStyle }} {...props} />
  };

  render() {
    return (
      <Scrollbars
        renderTrackVertical={ this.trackV }
        renderThumbVertical={ this.thumbV }
        {...this.props}
      />
    );
  }
}
