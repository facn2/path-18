import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './nav_bar.jsx';

class CareerDetail extends Component {
  render() {
    const selected = this.props.selected;
    return (
      <div>
        <NavBar />
        <div className='detail'>
          <h1 className='detail-title'>{ selected.title }</h1>
          <img className='detail-image' src = { selected.icon } />
          <p className='detail-item'>{ selected.description }</p>
          <hr className='line' />
          <h2 className='detail-subtitle'>Grades you need: </h2>
          <p className='detail-item grade'>Bagrut: { selected.grade_bagrut } </p>
          <p className='detail-item grade'>Psychometric: { selected.grade_psychometric }</p>
          <hr className='line' />
          <h2 className='detail-subtitle'>Universities offering this degree: </h2>
          <p className='detail-item'>{ selected.universities }</p>
          <hr className='line' />
          <h2 className='detail-subtitle'>Salary: </h2>
          <p className='detail-item salary'>starting salary: { selected.salary_start }</p>
          <p className='detail-item salary last'>senior salary: { selected.salary_ten_year }</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ careers: state.careers });

CareerDetail.propTypes = {
  selected: PropTypes.object
};

export default connect(mapStateToProps)(CareerDetail);
