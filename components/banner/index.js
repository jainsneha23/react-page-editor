import React from 'react';
import './index.less';

const Banner = (props) => (
  <div className="banner">
    <img src={props.imgsrc} alt={props.alt} />
  </div>
);

Banner.propTypes = {
  imgsrc: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};

Banner.defaultProps = {
  imgsrc: 'https://s-media-cache-ak0.pinimg.com/originals/dd/d1/6a/ddd16a2ac7aed2256bb771d3a72bc8e2.jpg',
  alt: 'Best banner design for you guarented'
};


export default Banner;
