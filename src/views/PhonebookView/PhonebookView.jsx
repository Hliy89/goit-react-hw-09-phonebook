import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { fetchContactsOperations } from '../../redux/phonebook/phonebook-operations';
import { getLoading } from '../../redux/phonebook/phonebook-selectors';

import style from './PhonebookView.module.css';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <div className={style.phonebook}>
          <h1 className={style.title}>Phonebook</h1>
          <Form />
          <h2 className={style.contactsTitle}>Contacts</h2>
          {this.props.isLoading && (
            <h2 style={{ color: 'red' }}>Loading contacts...</h2>
          )}
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsOperations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
