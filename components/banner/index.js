import React from 'react';

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
  imgsrc: 'http://www.johnstonefitness.com/wp-content/uploads/2011/07/hot-summer-deals-300x208.jpg',
  alt: 'Summer Deals'
};


export default Banner;
