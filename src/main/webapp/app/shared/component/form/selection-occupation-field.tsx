import React, { Component } from 'react';
import { Field } from 'react-final-form';
import { connect } from 'react-redux';
import { getOccupations } from 'app/redux/actions';

import { SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model/layout';
import _ from 'lodash';

interface ISelectionProps extends StateProps, DispatchProps {
  name?: string;
  label?: string;
  value?: ISelectItem;
  placeholder?: string;
  extendOptions?: ISelectItem[];
  getOptionsAction: () => void;
  onChange?: (value) => void;
  classNameStyle?: string;
  menuPlacement?: string;
  isRequired?: boolean;
}
class SelectionOccupationField extends Component<ISelectionProps> {
  componentDidMount() {
    const { options, getOptionsAction } = this.props;
    !options && getOptionsAction();
  }

  handleChangeSelect = value => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  getSelectedValue(field: ISelectItem, options: ISelectItem[]) {
    let selectedValue = null;
    if (field && !_.isEmpty(field.label)) {
      selectedValue = _.findLast(options, { label: (field || {}).label });
    }

    if (field && !_.isEmpty(field.value)) {
      selectedValue = _.findLast(options, { value: (field || {}).value });
    }
    return selectedValue;
  }

  render() {
    const { name, label, value, options, isRequired, placeholder, menuPlacement, extendOptions } = this.props;
    const fullOptions = extendOptions ? extendOptions.concat(options) : options;
    const selectedValue = this.getSelectedValue(value, fullOptions);
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
                value={selectedValue}
                name={name}
                options={options}
                extendOptions={extendOptions}
                placeholder={placeholder}
                menuPlacement={menuPlacement}
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
  const { occupations } = appDataReducer;
  return {
    options: occupations
  };
};

const mapDispatchToProps = dispatch => ({
  getOptionsAction: () => dispatch(getOccupations())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const selectionOccupationField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionOccupationField);

export { selectionOccupationField as SelectionOccupationField };
