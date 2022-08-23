import { ContactForm } from './contactForm/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';

export const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="wrap">
        <div>
          <ContactForm />
          <Filter />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList />
        </div>
      </div>
    </div>
  );
};
