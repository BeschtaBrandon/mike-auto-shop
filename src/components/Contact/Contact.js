import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'react-bootstrap';

import './Contact.scss';

const Contact = () => {
  const { t } = useTranslation();
  const renderContactHeader = () => {
    return (
      <h2>
        {t('contact.contact-us')}
        <i className="fas fa-envelope" />
    </h2>
    );
  }

  const renderContactContent = () => {
    return (
      <div>
        <p className="lead">{t('contact.contact-description')}</p>
        <Breadcrumb>
          <Breadcrumb.Item href="mailto:example@gmail.com">
            {t('contact.email')}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {t('contact.phone')}&nbsp;608-635-0323
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }

  return (
    <div>
      { renderContactHeader() }
      { renderContactContent() }
    </div>
  );

}

export default Contact;
