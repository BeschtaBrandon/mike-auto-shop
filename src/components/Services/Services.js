import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListGroup } from 'react-bootstrap';

const Services = () => {
  const { t } = useTranslation();
  const renderServices = () => {
    return (
      <div className='well'>
        <ListGroup>
          <ListGroup.Item>
            <i className='fas fa-car' />
            {' '}
            {t('services.detail')}
          </ListGroup.Item>
          <ListGroup.Item>
            <i className='fas fa-tools' />
            {' '}
            {t('services.repairs')}
          </ListGroup.Item>
          <ListGroup.Item>
            <i className='fas fa-car-crash' />
            {' '}
            {t('services.claims')}
          </ListGroup.Item>
          <ListGroup.Item>
            <i className='fas fa-paint-roller' />
            {' '}
            {t('services.painting')}
          </ListGroup.Item>
          <ListGroup.Item>
            <i className='fas fa-redo' />
            {' '}
            {t('services.restore')}
          </ListGroup.Item>
          <ListGroup.Item>
            <i className='fas fa-anchor' />
            {' '}
            {t('services.marine')}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }

  return (
    <>
      { renderServices() }
    </>
  );
}

export default Services;
