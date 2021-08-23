import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { connect } from 'react-redux';
// import { FaRegMap } from 'react-icons/fa'
import * as actions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
