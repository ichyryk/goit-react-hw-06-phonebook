import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsAction from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h4>Find contacts by name</h4>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
