import React from 'react';
import { merge } from 'lodash';

type OnChangeHandler<FormFields> = <K extends keyof FormFields>(
  field: K,
  value: FormFields[K]
) => void;

interface Handlers<FormFields> {
  onChange: OnChangeHandler<FormFields>;
}

type FormComponentProps<FormFields> = { fields: FormFields } & Handlers<
  FormFields
>;

interface State<FormFields> {
  fields: FormFields;
}

interface Props<FormFields> {
  initialValues: FormFields;
  FormComponent: React.ComponentType<FormComponentProps<FormFields>>;
}

class Form<FormFields> extends React.Component<
  Props<FormFields>,
  State<FormFields>
> {

  constructor(props: Props<FormFields>) {
    super(props);
    this.state = { fields: props.initialValues };
  }

  public onChange: OnChangeHandler<FormFields> = (field, value) => {
    // Use your favorite method to merge objects
    this.setState({ fields: merge(this.state.fields, { [field]: value }) });
  };

  public render() {
    const { FormComponent } = this.props;
    const { fields } = this.state;

    return <FormComponent onChange={this.onChange} fields={fields} />;
  }
}

export default Form;
