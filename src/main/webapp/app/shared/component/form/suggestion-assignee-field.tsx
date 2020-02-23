import React, { Component } from 'react';
import { Field } from 'react-final-form';
import { connect } from 'react-redux';
import { getTaskAssignees } from 'app/redux/actions';

import { Suggestion } from 'app/shared/component';
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
  multi?: boolean;
  showThumbnail?: boolean;
}
class SuggestionAssigneeField extends Component<ISelectionProps, ISelectionState> {
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
    const { name, label, value, options, isRequired, classNameStyle, placeholder, multi } = this.props;

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
              <Suggestion
                {...input}
                multi={multi}
                name={name}
                options={options}
                placeholder={placeholder}
                className={classNameStyle}
                showThumbnail
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

const suggestionAssigneeField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionAssigneeField);

export { suggestionAssigneeField as SuggestionAssigneeField };
