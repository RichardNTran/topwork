import React, { Component } from 'react';
import i18next from 'app/shared/locales';
import { connect } from 'react-redux';

import { getTaskAssignees } from 'app/redux/actions';
import { Suggestion, SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model/layout';

interface ISelectionState {
  selectedOption?: ISelectItem;
}

interface ISelectionProps extends StateProps, DispatchProps {
  selectedOption?: ISelectItem;
  getOptionsAction: () => void;
  onChangeSelection?: (value) => void;
  classNameStyle?: string;
  classNameDropDownStyle?: string;
  menuPlacement?: string;
  extendOptions?: ISelectItem[];
}
class SelectionAssignee extends Component<ISelectionProps, ISelectionState> {
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
    const { options, classNameStyle, menuPlacement, extendOptions, classNameDropDownStyle } = this.props;
    return (
      <div className="selection-assignee-content">
        <Suggestion
          value={selectedOption}
          extendOptions={extendOptions}
          options={options}
          onChange={this.handleChangeSelect}
          placeholder={i18next.t('taskInbox.fields.user.placeholder')}
          className={classNameStyle}
          menuPlacement={menuPlacement}
          showThumbnail
          classNameDropDown={classNameDropDownStyle}
        />
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

const selectionAssignee = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionAssignee);

export { selectionAssignee as SelectionAssignee };
