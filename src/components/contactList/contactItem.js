import { useDeleteContactMutation } from 'service/API';
import css from './contactList.module.css';

export const ContactItem = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <span className={css.marker}></span>
      <p className={css.itemName}>
        {item.name}: {item.number}
      </p>
      <button
        className={css.removeBtn}
        onClick={() => deleteContact(item.id)}
        disabled={isLoading}
      >
        remove
      </button>
    </>
  );
};
