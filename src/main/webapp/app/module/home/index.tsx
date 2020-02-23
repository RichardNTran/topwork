import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserInfo } from 'app/redux/actions';
import { UserInfoContainer, TeamManagementContainer } from './components';

interface IHomeContainerProps extends StateProps, DispatchProps {
  getCurrentUserInfoAction: (params?: any) => void;
  getMembersAction: () => void;
  loadingRef?: string;
}

class HomeContainer extends Component<IHomeContainerProps> {
  componentDidMount() {
    const { getCurrentUserInfoAction, getMembersAction } = this.props;
    // todo
    // getCurrentUserInfoAction();
    // getMembersAction();
  }
  render() {
    // const { members } = this.props;

    return (
      <div className="container pd-x-0">
        <div className="row row-xs">
          <div className="col-sm-12 col-lg-12 pd-t-10">{/* <UserInfoContainer /> */}</div>
        </div>
        <div className="row row-xs">
          <div className="col-sm-12 col-lg-12 pd-t-10">{/* <TeamManagementContainer members={members} /> */}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUserInfoAction: () => dispatch(getCurrentUserInfo())
});

const mapStateToProps = storeState => {
  // todo
  const { authReducer } = storeState;
  const { error, result } = authReducer;
  // const { members } = membersReducer;
  return {
    error,
    result
    // members
  };
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
