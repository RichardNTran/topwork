import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobOffers } from 'app/redux/actions';

import { SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model/layout';

interface ISelectionState {
  selectedOption?: ISelectItem;
}

interface ISelectionProps extends StateProps, DispatchProps {
  name?: string;
  placeholder?: string;
  selectedOption?: ISelectItem;
  getOptionsAction: () => void;
  onChangeSelection?: (value) => void;
  classNameStyle?: string;
  menuPlacement?: string;
  extendOptions?: ISelectItem[];
}
class SelectionJobOffer extends Component<ISelectionProps, ISelectionState> {
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
    const { onChangeSelection, classNameStyle } = this.props;
    this.setState({
      selectedOption
    });
    onChangeSelection && onChangeSelection(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const { name, placeholder, options, classNameStyle, menuPlacement, extendOptions } = this.props;
    return (
      <SelectField
        name={name}
        value={selectedOption}
        options={options}
        extendOptions={extendOptions}
        onChange={this.handleChangeSelect}
        placeholder={placeholder}
        className={classNameStyle}
        menuPlacement={menuPlacement}
      />
    );
  }
}

const mapStateToProps = state => {
  const { appDataReducer } = state;
  const { jobOffers } = appDataReducer;
  return {
    options: jobOffers
  };
};

const mapDispatchToProps = dispatch => ({
  getOptionsAction: () => dispatch(getJobOffers())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const selectionJobOffer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionJobOffer);

export { selectionJobOffer as SelectionJobOffer };
