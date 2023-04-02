import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ contact, onDelete }) => (
  <li className={css.contactsItem}>
    {contact.name} {contact.number}
    <button
      className={css.button}
      type="button"
      onClick={() => onDelete(contact.id)}
    >
      Dalete
    </button>
  </li>
);

ContactsItem.propTypes ={
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    
};


export default ContactsItem;
