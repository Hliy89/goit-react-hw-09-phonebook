import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './phonebook-actions';


export const fetchContactsOperations = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    };   
}


export const addContactOperations = (name, number) => dispatch => {
    const contact = { name, number, completed: false };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => {
            dispatch(addContactSuccess(data))
        })
        .catch(error => dispatch(addContactError(error.message)));
};


export const deleteContactOperations = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));
};



// axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    //     .catch(error => dispatch(fetchContactsError(error)));