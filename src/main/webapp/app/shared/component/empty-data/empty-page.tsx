import React from 'react';
const topworkIcon = 'content/images/not-found.svg';

const EmptyPage = props => (
  <div className={`d-flex align-items-stretch ${props.className || ''}`}>
    <div className={`w-100 d-flex align-items-center justify-content-center flex-column text-center`}>
      <img src={topworkIcon} className="image-emptypage" alt="" />
      <h3 className="tx-gray-03 mg-t-20 tx-18 tx-sfdisplay-semibold mg-b-0">{props.title}</h3>
    </div>
  </div>
);

export { EmptyPage };
