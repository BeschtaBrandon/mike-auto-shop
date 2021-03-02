import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const renderAbout = () => {
    return (
      <div className='well'>
        <p className='lead'>{t('home.about-us')}</p>
      </div>
    );
  }

  return (
    <>
      { renderAbout() }
    </>
  );
}

export default About;
