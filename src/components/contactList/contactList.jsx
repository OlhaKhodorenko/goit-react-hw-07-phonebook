//import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { useDeleteContactMutation, useGetContactsQuery } from 'service/API';
//import { getFilter } from 'redux/selectors';

const ContactList = () => {
  //const filter = useSelector(getFilter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  console.log(useGetContactsQuery());

  // const filteredContacts =
  //   contacts &&
  //   contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div>
      {error && <p>Error!!!</p>}
      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <ul className={css.contactsList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.listItem}>
              <span className={css.marker}></span>
              <p className={css.itemName}>
                {name}: {number}
              </p>
              <button
                className={css.removeBtn}
                onClick={() => deleteContact(id)}
              >
                remove
              </button>
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
