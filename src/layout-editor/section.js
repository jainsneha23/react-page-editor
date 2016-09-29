import React from 'react';
import './section.less';

class Section extends React.Component {

  render() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.props.column.map((v,i) =>
        <div key={i} className={`col col-${v} ${this.props.getChild(this.props.childList[i]).name === 'Droppable' ? '' : 'dropped'}`}>
          {React.createElement(this.props.getChild(this.props.childList[i]), {
            dropped: this.props.getChild,
            id: {x: this.props.index, y: i}
          })
          }
        </div>
      )}
      </div>
    );
  }
}

Section.propTypes = {
  index: React.PropTypes.number.isRequired,
  active: React.PropTypes.bool.isRequired,
  setActive: React.PropTypes.func.isRequired,
  column: React.PropTypes.array.isRequired,
  childList: React.PropTypes.array.isRequired,
  getChild: React.PropTypes.func.isRequired
};

export default Section;
