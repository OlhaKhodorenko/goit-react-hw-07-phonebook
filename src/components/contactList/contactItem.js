import { useDeleteContactMutation } from 'service/API';
import css from './contactList.module.css';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <span className={css.marker}></span>
      <p className={css.itemName}>
        {name}:{number}
      </p>
      <button
        className={css.removeBtn}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        remove
      </button>
    </>
  );
};
