import React, { Component } from 'react'
import User from './User'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
       <User username={this.props.user.name}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // state ที่อยู่ใน userReducer
    user: state.user,
    emp: state.emp
  };
}
export default connect(mapStateToProps)(App);
