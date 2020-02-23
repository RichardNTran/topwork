import React from 'react';
import moment from 'moment';

import i18next from 'app/shared/locales';
import { DATE_FORMAT_TASK_NOTIFY } from 'app/shared/constant';
import { mapCloudFrontURL } from 'app/shared/utils';

const topworkIcon = 'content/images/logos/topwork-icon.png';

const NotifyTitle = props => (
  <div className="d-flex align-items-center notify-header-content">
    <img src={topworkIcon} className="rounded mg-r-10" alt="" height="20" width="20" />
    <strong className="tx-12 tx-semibold">Topwork</strong>
  </div>
);

const NotifyContent = props => {
  const { taskNotify } = props;
  const { candidate } = taskNotify || {};
  const avatarCandidate = mapCloudFrontURL(candidate.avatar);
  return (
    <div className="task-notify-content">
      <div className="notify-main-content">
        <div className="media media-candidate-info pd-b-18">
          <div className="avatar avatar-45 mg-r-15">
            {avatarCandidate && <img src={avatarCandidate} alt={candidate.fullName} className="rounded-circle" />}
            {!avatarCandidate && (
              <span className="avatar-initial rounded-circle bg-skin-candidate tx-sftext-semibold tx-16 lh-2">
                {candidate.fullName.charAt(0)}
              </span>
            )}
          </div>
          <div className="media-body">
            <div className="user-info-content">
              <p className="tx-12 tx-back-default tx-sftext-semibold mg-b-0">
                {taskNotify.jobOfferTitle || i18next.t('component.toastNotify.job_offer_title_not_set')}
              </p>
              <h5 className="d-inline-block head-link pd-t-5 mg-b-0">
                <span className="tx-18 tx-sftext-semibold">{candidate.fullName}</span>
                <span className="tx-age tx-12 tx-sftext mg-l-5"> ({candidate.age}) </span>
                <span className="tx-gender tx-12 tx-sftext"> {i18next.t(`taskInbox.gender.${candidate.gender}`)} </span>
              </h5>
            </div>
          </div>
        </div>
        <p className="tx-12 mg-b-0 mg-t-0">{taskNotify.stepName || i18next.t('component.toastNotify.step_name_not_set')}</p>
        <p className="tx-12 mg-b-0">{moment(taskNotify.snoozeTime).format(DATE_FORMAT_TASK_NOTIFY)} </p>
      </div>
      <div className="notify-footer">
        <button type="submit" className="btn btn-link tx-sftext-semibold btn-viewall">
          {i18next.t('component.toastNotify.view_all_messages')}
        </button>
      </div>
    </div>
  );
};

export { NotifyContent, NotifyTitle };
