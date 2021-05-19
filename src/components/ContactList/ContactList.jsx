import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactOperations } from '../../redux/phonebook/phonebook-operations';
import {
  getFilter,
  getContacts,
} from '../../redux/phonebook/phonebook-selectors';
import PropTypes from 'prop-types';

import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteContactOperations(id));

  const normalizedFilter = filter.toLowerCase();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  const contactElement = filterContacts.map(({ name, number, id }) => (
    <li key={id} className={style.contactListItem}>
      {name}: {number}
      <span onClick={() => onDelete(id)} className={style.closeButton}>
        X
      </span>
    </li>
  ));

  return (
    <div className={style.contactContainer}>
      <ul className={style.contactList}>{contactElement}</ul>
    </div>
  );
};

ContactList.defaultProps = {
  contacts: [],
  onDelete: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;

// import React from 'react';
// import { connect } from 'react-redux';
// import { deleteContactOperations } from '../../redux/phonebook/phonebook-operations';
// import {
//   getFilter,
//   getContacts,
// } from '../../redux/phonebook/phonebook-selectors';
// import PropTypes from 'prop-types';

// import style from './ContactList.module.css';

// const ContactList = ({ contacts, filter, onDelete }) => {
//   const normalizedFilter = filter.toLowerCase();

//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   const contactElement = filterContacts.map(({ name, number, id }) => (
//     <li key={id} className={style.contactListItem}>
//       {name}: {number}
//       <span onClick={() => onDelete(id)} className={style.closeButton}>
//         X
//       </span>
//     </li>
//   ));

//   return (
//     <div className={style.contactContainer}>
//       <ul className={style.contactList}>{contactElement}</ul>
//     </div>
//   );
// };

// ContactList.defaultProps = {
//   contacts: [],
//   onDelete: () => {},
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   onDelete: PropTypes.func,
// };

// const mapStateToProps = state => ({
//   contacts: getContacts(state),
//   filter: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(deleteContactOperations(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
