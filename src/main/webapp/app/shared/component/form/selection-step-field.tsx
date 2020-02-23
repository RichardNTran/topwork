import React, { Component } from 'react';
import { Field } from 'react-final-form';
import { connect } from 'react-redux';

import { getTaskSelectionSteps } from 'app/redux/actions';
import { SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model/layout';

interface ISelectionState {
  selectedOption?: ISelectItem;
}

interface ISelectionProps extends StateProps, DispatchProps {
  name?: string;
  label?: string;
  value?: any;
  placeholder?: string;
  selectedOption?: ISelectItem;
  getOptionsAction: () => void;
  onChange?: (value) => void;
  classNameStyle?: string;
  menuPlacement?: string;
  isRequired?: boolean;
}
class SelectionStepField extends Component<ISelectionProps, ISelectionState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: props.value
    };
  }

  componentDidMount() {
    const { options, getOptionsAction } = this.props;
    !options && getOptionsAction();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedOption: nextProps.value
    });
  }

  handleChangeSelect = value => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  render() {
    const { name, label, value, options, isRequired, placeholder } = this.props;

    return (
      <div className="form-group">
        {label && (
          <label className="label-control">
            {label}
            {isRequired && <sup className="required">*</sup>}
          </label>
        )}
        <Field name={name} options={options} defaultValue={value}>
          {({ input, meta }) => {
            const hasError = meta.touched && meta.error;
            return (
              <SelectField
                {...input}
                value={value}
                name={name}
                options={options}
                placeholder={placeholder}
                onChange={this.handleChangeSelect}
              />
            );
          }}
        </Field>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { appDataReducer } = state;
  const { taskSelectionSteps } = appDataReducer;
  return {
    options: taskSelectionSteps
  };
};

const mapDispatchToProps = dispatch => ({
  getOptionsAction: () => dispatch(getTaskSelectionSteps())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const selectionStepField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionStepField);

export { selectionStepField as SelectionStepField };
