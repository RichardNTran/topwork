import React, { Component } from 'react';
import { FontIcon, ButtonIcon, ReduxLoading, LoadingButton } from 'app/shared/component';
import i18next from 'app/shared/locales';
import { ATTACHMENT_ACTION } from 'app/redux/constant';

interface IUploadFileProps {
  containerClassName?: any;
  fileType?: any;
  onUpload?: any;
  onRemove?: any;
  onHandleUploadError?: any;
  onHandleUploadSuccess?: any;
  index?: any;
  file?: any;
}

interface IUploadFileState {
  originalFile?: any;
  selectedFile?: any;
  isLoading?: boolean;
}

class UploadFile extends Component<IUploadFileProps, IUploadFileState> {
  constructor(props) {
    super(props);

    this.state = {
      originalFile: null,
      selectedFile: null
    };
  }

  onChangeHandler = e => {
    const { onUpload, index } = this.props;

    if (!e || !e.target || !e.target.files || !e.target.files[0]) {
      return;
    }

    this.setState(
      {
        selectedFile: e.target.files[0]
      },
      () => {
        onUpload &&
          onUpload({
            file: this.state.selectedFile,
            index,
            callback: () => this.handleUploadSuccess(),
            callbackError: () => this.handleUploadError()
          });
      }
    );
  };

  handleUploadSuccess = () => {
    const { onHandleUploadSuccess } = this.props;

    onHandleUploadSuccess && onHandleUploadSuccess();

    this.setState({
      originalFile: this.state.selectedFile
    });
  };

  handleUploadError = () => {
    const { onHandleUploadError } = this.props;

    onHandleUploadError && onHandleUploadError();

    this.setState({
      selectedFile: this.state.originalFile
    });
  };

  handleRemove = () => {
    const { onRemove } = this.props;

    onRemove && onRemove();
  };

  componentWillReceiveProps(nextProps) {
    const { file } = nextProps;

    this.setState({
      originalFile: file,
      selectedFile: file
    });
  }

  handleLoading = isLoading => {
    if (this.state.isLoading !== isLoading) this.setState({ isLoading });
  };

  render() {
    const { containerClassName, fileType, index } = this.props;
    const { selectedFile } = this.state;

    return (
      <ReduxLoading
        expectedKey={index}
        isLoadingComponent
        onChangeLoadingStatus={this.handleLoading}
        expectedAction={ATTACHMENT_ACTION.UPLOAD_ATTACHMENT}
      >
        <div className={`upload-file-container d-flex align-items-center justify-content-between ${containerClassName}`}>
          <div className="upload-file-content d-flex align-items-center">
            <div className="upload-file-button">
              <input type="file" className="input-file" accept={fileType} onChange={this.onChangeHandler} />
              <LoadingButton
                containerClass="btn btn-sm btn-primary tx-semibold tx-sfdisplay-semibold"
                title=""
                isLoading={this.state.isLoading}
                loadingTitle={i18next.t('comment.buttons.submitting')}
              >
                <span className="icon-left">
                  <FontIcon iconName="upload" className="snooze-icon" />
                </span>
                <label className="button-text tx-sfdisplay-medium">{i18next.t('attachment.file_selection')}</label>
              </LoadingButton>
            </div>
            <div className="file-info d-flex align-items-center pd-l-15">
              {selectedFile && selectedFile.name ? (
                <React.Fragment>
                  <FontIcon iconName="file" className="icon-16" />
                  <label className="button-text tx-sfdisplay-medium mg-b-0 pd-l-5 line-height-1">{selectedFile.name}</label>
                </React.Fragment>
              ) : (
                <label className="button-text tx-sfdisplay-medium mg-b-0 pd-l-5 line-height-1">
                  {i18next.t('attachment.not_selected')}
                </label>
              )}
            </div>
          </div>
          <ButtonIcon
            iconName="x-circle"
            containerClass="btn btn-icon button-remove-item pd-0"
            iconClass="icon-16"
            onClick={this.handleRemove}
          />
        </div>
      </ReduxLoading>
    );
  }
}

export { UploadFile };
