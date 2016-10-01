import React from 'react';

import LayoutEditor from './layout-editor';
import {Draggable, Droppable} from './drag-drop';
import * as components from './components';
import PropsEditor from './props-editor';

import './style.less';
import 'reset-css/reset.less';

class PageEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeComp: null,
      components: components
    };
    this.editComp = this.editComp.bind(this);
    this.compEditingDone = this.compEditingDone.bind(this);
  }

  editComp(comp) {
    this.setState({activeComp: comp});
  }

  compEditingDone(props) {
    const oldComp = this.state.components;
    if(props) {
      oldComp[this.state.activeComp].props = props;
    }
    this.setState({activeComp: null, components: oldComp});
  }

  render() {
    return (
      <div className="editor">
        <div className="leftpane">
          <h3>Components</h3>
          <ul>
            {Object.keys(this.state.components).map((comp, index) =>
              <li key={index}><Draggable elem={comp} /></li>
            )}
          </ul>
        </div>
        <div className="rightpane">
          <LayoutEditor childList={this.state.components} defaultChild={Droppable} editComp={this.editComp}/>
        </div>
        {this.state.activeComp ?
          <PropsEditor
            active={this.state.activeComp ? true : false}
            propObject={this.state.components[this.state.activeComp]}
            onComplete={this.compEditingDone}/>
            : null
        }
      </div>
    );
  }
}

export default PageEditor;
