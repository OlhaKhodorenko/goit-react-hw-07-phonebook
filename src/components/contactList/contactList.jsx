import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { useGetContactsQuery } from 'service/API';
import { ContactItem } from './contactItem';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const filteredContacts =
    contacts &&
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div>
      {error && <p>Error!!!</p>}
      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <ul className={css.contactsList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.listItem}>
              <ContactItem id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ContactList;
