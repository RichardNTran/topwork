import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import i18next from 'app/shared/locales';
import { getTaskSelectionSteps } from 'app/redux/actions';
import { SelectField } from 'app/shared/component';
import { handleMappingAvailableOptions } from 'app/shared/utils';

import { ISelectItem } from 'app/shared/model/layout';

interface ISelectionState {
  selectedOption?: ISelectItem;
}

interface ISelectionProps extends StateProps, DispatchProps {
  name?: string;
  availableOptions?: string[];
  selectedOption?: ISelectItem;
  selectionStepId?: string;
  getOptionsAction: () => void;
  onChangeSelection?: (value) => void;
  editMode?: boolean;
  classNameStyle?: string;
  menuPlacement?: string;
  noOptionsMessage?: () => string;
}
class SelectionStep extends Component<ISelectionProps, ISelectionState> {
  constructor(props) {
    super(props);
    if (props.selectionStepId) {
      this.state = {
        selectedOption: _.findLast(props.options, { value: props.selectionStepId }) as ISelectItem
      };
    } else {
      this.state = { selectedOption: props.selectedOption };
    }
  }

  componentDidMount() {
    const { options, getOptionsAction } = this.props;
    !options && getOptionsAction();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedOption: _.findLast(nextProps.options, { value: nextProps.selectionStepId }) as ISelectItem
    });
  }

  handleChangeSelect = selectedOption => {
    const { onChangeSelection } = this.props;
    this.setState({
      selectedOption
    });
    onChangeSelection && onChangeSelection(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const { name, options, editMode, classNameStyle, availableOptions, menuPlacement, noOptionsMessage } = this.props;
    if (!editMode) {
      return (
        <p className={`step-value mg-b-0 pd-t-5 ${selectedOption ? '' : ' tx-color-04'}`}>
          {selectedOption ? selectedOption.label : i18next.t('taskInbox.fields.selection_step.placeholder')}
        </p>
      );
    }
    if (!options) return null;
    return (
      <div className="selection-step-content">
        <SelectField
          name={name}
          value={selectedOption}
          options={availableOptions ? handleMappingAvailableOptions(availableOptions, options) : options}
          onChange={this.handleChangeSelect}
          placeholder={i18next.t('taskInbox.fields.selection_step.placeholder')}
          className={classNameStyle}
          menuPlacement={menuPlacement}
          noOptionsMessage={noOptionsMessage ? noOptionsMessage : () => i18next.t('component.selectionField.noOptionsMessage')}
        />
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

const selectionStep = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionStep);
export { selectionStep as SelectionStep };
