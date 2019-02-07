import React from "react";
import Factor from './Factor';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as factorActions from '../actions/factorActions';

export class FactorList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        newFactor: ""
    };

    this.updateNewFactor = this.updateNewFactor.bind(this);
    this.addFactor = this.addFactor.bind(this);
    this.removeFactor = this.removeFactor.bind(this);
  }

  addFactor(event) {
    event.preventDefault();
    this.props.actions.addFactor(this.state.newFactor, this.props.area);
    this.setState({newFactor: ""});
  }

  removeFactor(factor) {
    this.props.actions.removeFactor(factor, this.props.area);
  }

  updateNewFactor(event) {
    const value = event.target.value;
    return this.setState({newFactor: value});
  }
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.factorList.map(
            factor =>
              <Factor
                key={factor}
                factor={factor}
                onRemove={this.removeFactor}/>
          )}
        </ul>
        <form>
          <input
            type="text"
            name="factor"
            class-name="form-control"
            placeholder="Add new factor"
            value={this.state.newFactor}
            onChange={this.updateNewFactor}/>
          <input
            type="submit"
            value='Add'
            onClick={this.addFactor}/>
        </form>
     </React.Fragment>
    );
  }
};

function mapStateToPops(state, ownProps) {
  return {    
    factorList: state[ownProps.area]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(factorActions, dispatch)
  };
}

export default connect(mapStateToPops, mapDispatchToProps) (FactorList);