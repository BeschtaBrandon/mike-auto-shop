import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.scss';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState('');

  const handleNavSelect = eventKey => {
    setActiveKey(eventKey);
  }

  return (
    <Nav
      activeKey={activeKey}
      as="ul"
      defaultActiveKey="/"
      onSelect={handleNavSelect}
    >
      <Nav.Item as="li">
        <Nav.Link href="/">
          {t('nav.home')}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="about" href="/about">
          {t('nav.about')}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/services" eventKey="services">
          {t('nav.services')}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/gallery" eventKey="gallery">
          {t('nav.gallery')}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <span>{t('contact.call-us')}</span>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
