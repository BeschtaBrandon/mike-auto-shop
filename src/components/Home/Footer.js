import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const renderFooter = () => {
    return (
      <div className="wrapper footerTwo">
      <div className="row">
        <div className="col-md-4">
          <h2>{t('contact.contact')}</h2>
          <p>
            {t('contact.contact-card')}
            <br/>
            Arlington, WI &nbsp;53911 Stay connected!
          </p>
          <div class="footerSocialLinks">
            <a href="/contact">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </div>
          <br/>
        </div>
        <div className="col-md-4">
          <h2>{t('contact.hours')}</h2>
          <span>Monday - Friday:&nbsp;</span>8am - 5pm CST<br/>
          <span>Saturday - Sunday</span> Closed
        </div>
        <div className="col-md-4">
            <h2>Store Information</h2>
            <strong>{t('contact.paint-doctor')}</strong>
            <br/>
            209 Main Street<br/>
            Arlington, WI &nbsp;53911<br/>
            Phone:&nbsp;&nbsp;608-635-0323<br/>
        </div>
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
