import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.filterInput} htmlFor=" "></label>
      Filter contacts by name:
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default Filter;
