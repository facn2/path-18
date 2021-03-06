import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './../components/nav_bar.jsx';
import CareerDetail from '../components/career_detail.jsx';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const filteredCareer = this.props.careers.filter(career =>
      career.title === this.props.match.params.title);
    this.setState({ selectedCareer: filteredCareer });
  }

  render() {
    return (
      <div>
        <CareerDetail selected={ this.state.selectedCareer[0] }/>
      </div>
    );
  }
}

Details.propTypes = {
  careers: PropTypes.array
};

const mapStateToProps = state => ({
  careers: state.careers
});

Details.propTypes = {
  match: PropTypes.func
};

export default connect(mapStateToProps)(Details);
