import { nanoid } from 'nanoid';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './contactsForm.module.css';
import { useGetContactsQuery, useAddContactMutation } from 'service/API';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const loginInputId = nanoid();

  const onSubmit = e => {
    e.preventDefault();
    const includedСontact = contacts.find(contact => contact.name.toLowerCase() === name);
    if (includedСontact) {
      alert(name + 'is already in contacts.');
      return;
    }

    addContact({
      id: nanoid(),
      name,
      number,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          className={css.input}
          onChange={e => setName(e.currentTarget.value)}
          id={loginInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          className={css.input}
          onChange={e => setNumber(e.currentTarget.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="input" className={css.submitBtn}>
        Add contacts
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
