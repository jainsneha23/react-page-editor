import React from 'react';
import './style.less';

class Draggable extends React.Component {

  constructor(props) {
    super(props);
    this.drag = this.drag.bind(this);
  }

  drag(ev) {
    ev.dataTransfer.setData('drag-id', this.props.elem);
  }

  render() {
    return (
      <div className="draggable" draggable="true"
      onDragStart={this.drag} >
      {this.props.elem}
      </div>
    );
  }
}

Draggable.propTypes = {
  elem: React.PropTypes.string.isRequired
};

export default Draggable;
