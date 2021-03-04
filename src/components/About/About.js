import React from 'react';
import './About.scss'
import { useTranslation } from 'react-i18next';

const iframeSource = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185719.9470820307!2d-89.52001938359376!3d43.33782199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806e2b80415832d%3A0xf0f0be92d328ce95!2sPaint%20Doctor!5e0!3m2!1sen!2sus!4v1614653259444!5m2!1sen!2sus`;

const About = () => {
  const { t } = useTranslation();

  const renderAbout = () => {
    return (
      <div className='well'>
        <h3>{ t('about.header') }</h3>
        <hr/ >
        <p className='lead'>
          { t('about.intro') }
        </p>
      </div>
    );
  }

  const renderGoogleMapFrame = () => {
    return (
      <iframe
        title="google-maps"
        src={iframeSource}
        width="400"
        height="300"
        allowfullscreen=""
        loading="lazy"
      />
    )
  }

  return (
    <>
      { renderAbout() }
      { renderGoogleMapFrame() }
    </>
  );
}

export default About;
