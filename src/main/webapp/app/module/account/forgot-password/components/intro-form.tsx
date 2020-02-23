import React, { Component } from 'react';

import i18next from 'app/shared/locales';

class IntroFormContainer extends Component {
  render() {
    return (
      <div className="intro-form tx-color-03">
        <p className="desc">{i18next.t('forgotPasswordContainer.note.note_1')}</p>
        <p className="desc">{i18next.t('forgotPasswordContainer.note.note_2')}</p>
      </div>
    );
  }
}

export { IntroFormContainer };
