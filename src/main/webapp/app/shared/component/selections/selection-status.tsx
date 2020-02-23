import React, { Component } from 'react';
import { connect } from 'react-redux';

import i18next from 'app/shared/locales';
import { getTaskSelectionStatus } from 'app/redux/actions';
import { handleMappingAvailableOptions } from 'app/shared/utils';
import { SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model';

interface ISelectionState {
  selectedOption?: ISelectItem;
}

interface ISelectionProps extends StateProps, DispatchProps {
  name?: string;
  placeholder?: string;
  selectedOption?: ISelectItem;
  extendOptions?: ISelectItem[];
  currentStepId?: string;
  availableOptions?: string[];
  getOptionsAction: () => void;
  onChangeSelection?: (value) => void;
  classNameStyle?: string;
  menuPlacement?: string;
  noOptionsMessage?: () => string;
}
class SelectionStatus extends Component<ISelectionProps, ISelectionState> {
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

  handleChangeSelect = selectedOption => {
    const { onChangeSelection } = this.props;
    this.setState({
      selectedOption
    });

    onChangeSelection && onChangeSelection(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const { name, placeholder, options, classNameStyle, menuPlacement, extendOptions, availableOptions, noOptionsMessage } = this.props;
    if (!options) return null;
    const itemOptions = availableOptions ? handleMappingAvailableOptions(availableOptions, options) : options;
    return (
      <div className="selection-status-content">
        <SelectField
          name={name}
          value={selectedOption}
          options={itemOptions}
          extendOptions={extendOptions}
          onChange={this.handleChangeSelect}
          placeholder={placeholder}
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
  const { taskSelectionStatus } = appDataReducer;
  return {
    options: taskSelectionStatus
  };
};

const mapDispatchToProps = dispatch => ({
  getOptionsAction: () => dispatch(getTaskSelectionStatus())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const selectionStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionStatus);

export { selectionStatus as SelectionStatus };
