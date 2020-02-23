import React, { Component } from 'react';
import { Field } from 'react-final-form';
import { connect } from 'react-redux';

import { getTaskAssignees } from 'app/redux/actions';
import { SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model';
import { composeValidators } from 'app/shared/utils';

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
  onRemove?: (index) => void;
  classNameStyle?: string;
  menuPlacement?: string;
  isRequired?: boolean;
  multi?: boolean;
  showList?: boolean;
  validates?: any;
}
class SelectionAssigneeField extends Component<ISelectionProps, ISelectionState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: props.selectedOption
    };
  }

  componentDidMount() {
    const { options, getOptionsAction } = this.props;
    !options && getOptionsAction();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedOption: nextProps.selectedOption
    });
  }

  handleChangeAssignee = value => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  render() {
    const { name, label, value, options, isRequired, classNameStyle, placeholder, multi, showList, onRemove, validates } = this.props;

    return (
      <div className="form-group">
        {label && (
          <label className="label-control">
            {label}
            {isRequired && <sup className="required">*</sup>}
          </label>
        )}
        <Field name={name} options={options} validate={validates ? composeValidators(...validates) : null}>
          {({ input, meta }) => {
            const hasError = meta.submitFailed && meta.error;
            return (
              <React.Fragment>
                <SelectField
                  {...input}
                  multi={multi}
                  value={value}
                  name={name}
                  options={options}
                  placeholder={placeholder}
                  className={classNameStyle}
                  showThumbnail
                  showList={showList}
                  onRemove={inputValue => {
                    input.onChange(inputValue && inputValue.length > 0 ? inputValue : '');
                    onRemove(inputValue);
                  }}
                  onChange={inputValue => {
                    input.onChange(inputValue);
                    this.handleChangeAssignee(inputValue);
                  }}
                />
                {hasError ? <span className="error"> {meta.error} </span> : ''}
              </React.Fragment>
            );
          }}
        </Field>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { appDataReducer } = state;
  const { taskAsignees } = appDataReducer;
  return {
    options: taskAsignees
  };
};

const mapDispatchToProps = dispatch => ({
  getOptionsAction: () => dispatch(getTaskAssignees())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const selectionAssigneeField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionAssigneeField);

export { selectionAssigneeField as SelectionAssigneeField };
