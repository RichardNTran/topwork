import React from 'react';

interface IHeaderFormProps {
  label?: string;
}

const HeaderFormContainer: React.SFC<IHeaderFormProps> = props => {
  const { label } = props;
  return (
    <div className="header-form">
      <div className="container">
        <h2 className="main-title title-1">{label}</h2>
      </div>
    </div>
  );
};

export { HeaderFormContainer };
