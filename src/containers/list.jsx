import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './../components/nav_bar.jsx';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    const filtered = [];
    const listItems = this.props.careers;
    const likedCareers = JSON.parse(localStorage.liked);
    listItems.forEach((career) => {
      likedCareers.forEach((liked) => {
        if (liked === career.title) {
          filtered.push(career);
        }
      });
    });
    return filtered.map((career, i) => (
      <div key={i}>
        <img src="career.image" alt="lil image goes here"/>
        <h3>{ career.title }</h3>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Here are your liked careers</h1>
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  careers: state.careers
});

List.propTypes = {
  careers: PropTypes.array // array of objects
};

export default connect(mapStateToProps)(List);
