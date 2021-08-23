import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsAction from '../../redux/contacts/contacts-actions';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   // const normalizedFilter = filter.toLowerCase()
//   const visibleContacts = getFilteredContacts(items, filter);
//   // const visibleContacts = items.filter((contact) =>
//   //   contact.name.toLowerCase().includes(normalizedFilter),
//   // )

//   return {
//     contacts: visibleContacts,
//   };
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
