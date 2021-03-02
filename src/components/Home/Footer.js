import React from 'react';
import { useTranslation } from 'react-i18next';
import { PHONE_NUMBER } from '../../shared/constants';

const Footer = () => {
  const { t } = useTranslation();

  const renderFooter = () => {
    return (
      <div className="row">
        <div className="col-md-4">
          <h2>{t('contact.contact')}</h2>
          <hr />
          <p>
            {t('contact.contact-card')}
          </p>
          <div className="footerSocialLinks">
            <a href="/contact">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </div>
          <br/>
        </div>
        <div className="col-md-4">
          <h2>{t('contact.hours')}</h2>
          <hr />
          <span>
            {t('contact.store-open-hours')}
          </span>
          <br/>
          <span>
            {t('contact.store-closed-hours')}
          </span>
        </div>
        <div className="col-md-4">
            <h2>{t('contact.store-info')}</h2>
            <hr />
            <strong>
              {t('contact.paint-doctor')}
            </strong>
            <br />
            {t('contact.street-address')}
            <br />
            {t('contact.city')}
            <br />
            {t('contact.phone')}
            {' '}
            { PHONE_NUMBER }
        </div>
      </div>
    )
  }

  return (
    <>
      { renderFooter() }
    </>
  )
}

export default Footer;
