import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import PropTypes from 'prop-types';

import style from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p className={style.contactText}>Find contacts by name</p>
      <input
        className={style.findInput}
        onChange={changeFilter}
        type="text"
        value={filter}
      />
    </>
  );
};

Filter.defaultProps = {
  filter: '',
  changeFilter: () => {},
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
