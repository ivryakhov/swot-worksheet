import React, { Component } from 'react';
import './App.css';
import SWOTTable from './components/SWOTTable';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SWOTTable state={this.props.state}></SWOTTable>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state
  }
}

export default connect(mapStateToProps) (App);
