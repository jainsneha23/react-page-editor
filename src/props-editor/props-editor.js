import React from 'react';
import './style.less';

class PropsEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      propObject: this.props.propObject.defaultProps || {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event, prop) {
    const oldProps = Object.assign({}, this.state.propObject);
    oldProps[prop] = event.target.value;
    this.setState({
      propObject: oldProps
    });
  }

  cancel(event) {
    event.preventDefault();
    this.props.onComplete(null);
  }

  submit(event) {
    event.preventDefault();
    this.props.onComplete(this.state.propObject);
  }

  render() {
    return (
      <div className={`props-editor ${this.props.active? 'active':''}`}>
        <form>
          <section>
            {Object.keys(this.state.propObject).map((prop, i) =>
              <label key={i}>
                <span>{prop}</span>
                <input type="text" value={this.state.propObject[prop]} onChange={(event) => this.handleChange(event, prop)} />
              </label>
            )}
          </section>
          <footer>
            <button onClick={this.cancel}>Cancel</button>
            <button type="submit" onClick={this.submit}>Done</button>
          </footer>
        </form>
      </div>
    );
  }
}

PropsEditor.propTypes = {
  active: React.PropTypes.bool.isRequired,
  propObject: React.PropTypes.func.isRequired,
  onComplete: React.PropTypes.func.isRequired
};

export default PropsEditor;
