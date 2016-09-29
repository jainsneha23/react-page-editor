import React from 'react';
import Section from './section';
import Toolbar from './toolbar';
import './editorpane.less';

class LayoutEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: [],
      activeIndex: -1
    };
    this.setActive = this.setActive.bind(this);
    this.addSection = this.addSection.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.splitSection = this.splitSection.bind(this);
    this.getChild = this.getChild.bind(this);
  }

  getChild(compName, pos) {
    if (pos) {
      const oldList = Object.assign([], this.state.section);
      oldList[pos.x].value[pos.y] = compName;
      this.setState({childList: oldList});
    }
    return this.props.childList[compName] || this.props.defaultChild;
  }

  setActive(index) {
    this.setState({activeIndex: index});
  }

  addSection() {
    this.state.section.splice(this.state.activeIndex+1, 0, {value: []});
    this.setState({
      section: this.state.section
    });
  }

  removeSection() {
    this.state.section.splice(this.state.activeIndex, 1);
    this.setState({
      section: this.state.section,
      activeIndex: this.state.section.length === 0 ? -1 : (this.state.activeIndex === 0 ? 0 : this.state.activeIndex - 1)
    });
  }

  moveUp() {
    if(this.state.activeIndex === 0) return;
    const item = this.state.section.splice(this.state.activeIndex, 1)[0];
    this.state.section.splice(this.state.activeIndex - 1, 0, item);
    this.setState({
      section: this.state.section,
      activeIndex: this.state.activeIndex - 1
    });
  }

  moveDown() {
    if(this.state.activeIndex >= this.state.section.length - 1)
      return;
    const item = this.state.section.splice(this.state.activeIndex, 1)[0];
    this.state.section.splice(this.state.activeIndex + 1, 0, item);
    this.setState({
      section: this.state.section,
      activeIndex: this.state.activeIndex + 1
    });
  }

  splitSection(columns) {
    const oldState = Object.assign(this.state.section);
    oldState[this.state.activeIndex].column = columns;
    oldState[this.state.activeIndex].value = Array.from({length: columns.length});
    this.setState({section: oldState});
  }

  render() {
    return (
      <div className="layout-editor">
        <Toolbar
          addSection={this.addSection}
          removeSection={this.removeSection}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          splitSection={this.splitSection}
          active={this.state.activeIndex !== -1}
        />
        <div className="editor-pane">
          {
            this.state.section.map((section, index) => {
              return (
                <Section
                  key={index}
                  index={index}
                  setActive={this.setActive}
                  column={section.column || [12]}
                  active={this.state.activeIndex === index}
                  getChild={this.getChild}
                  childList={section.value}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

LayoutEditor.propTypes = {
  childList: React.PropTypes.object.isRequired,
  defaultChild: React.PropTypes.func.isRequired
};

export default LayoutEditor;
