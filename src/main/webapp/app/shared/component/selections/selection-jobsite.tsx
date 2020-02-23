import React, { Component } from 'react';
import { connect } from 'react-redux';

import i18next from 'app/shared/locales';
import { getJobsites } from 'app/redux/actions';
import { SelectField } from 'app/shared/component';
import { ISelectItem } from 'app/shared/model';

interface ISelectionState {
  selectedOption?: ISelectItem;
}

interface ISelectionProps extends StateProps, DispatchProps {
  selectedOption?: ISelectItem;
  getOptionsAction: () => void;
  onChangeSelection?: (value) => void;
  classNameStyle?: string;
  extendOptions?: ISelectItem[];
}
class SelectionJobsite extends Component<ISelectionProps, ISelectionState> {
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
    const { options, classNameStyle, extendOptions } = this.props;
    return (
      <SelectField
        value={selectedOption}
        extendOptions={extendOptions}
        options={options}
        onChange={this.handleChangeSelect}
        className={classNameStyle}
        placeholder={i18next.t('taskInbox.fields.job_site.placeholder')}
        showThumbnail
      />
    );
  }
}

const mapStateToProps = state => {
  const { appDataReducer } = state;
  const { jobsites } = appDataReducer;
  return {
    options: jobsites
  };
};

const mapDispatchToProps = dispatch => ({
  getOptionsAction: () => dispatch(getJobsites())
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const selectionJobsite = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionJobsite);

export { selectionJobsite as SelectionJobsite };
