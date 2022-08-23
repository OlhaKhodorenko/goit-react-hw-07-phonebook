import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { changeFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <label>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        className={css.input}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
