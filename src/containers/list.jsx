import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './../components/nav_bar.jsx';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      console.log(this.state)
      <div>
        <NavBar />
        <h1>Here are your liked careers</h1>
        <div>
          <ul>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  careers: state.careers
});

export default connect(mapStateToProps)(List);
