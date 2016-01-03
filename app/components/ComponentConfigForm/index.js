import { reduxForm } from 'redux-form/native';
import ComponentConfigForm from './component';

const mapStateToProps = () => ({});

const actionCreators = {};

export default reduxForm({
  form: 'componentConfig',
  fields: [
    // propTypes config
    'props[].name',
    'props[].type',
    'props[].component',
    'props[].input',

  ],
  onSubmit: (formData) => {
    console.log('ComponentConfigForm form submit... formData:', formData);
  },
}, mapStateToProps, actionCreators)(ComponentConfigForm);
export { ComponentConfigForm };
