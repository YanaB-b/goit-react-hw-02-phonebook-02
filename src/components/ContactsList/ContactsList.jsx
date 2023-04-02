import PropTypes from 'prop-types';
import ContactsItem from  'components/ContactsItem/ContactsItem'
import css from './ContactsList.module.css';

 const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};


ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactsList;
