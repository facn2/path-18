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
    // console.log(this.props);
    const FilteredCareer = this.props.careers.filter((career) => {
      return career.title === this.props.match.params.title;
    });
    this.setState({ selectedCareer: FilteredCareer });
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

export default connect(mapStateToProps)(Details);
