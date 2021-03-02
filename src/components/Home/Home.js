import React from 'react';
import {
  Card,
  Jumbotron,
  Button,
  Col,
  Container,
  Image,
  Row,
  ListGroup
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import moment from 'moment';
import { HOME_CARDS } from './constants';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

import './Home.scss';

const Home = () => {
  const { t } = useTranslation();

  const renderAboutSection = () => {
    return (
      <Row className="home-content">
        <Col xs={12}>
        {HOME_CARDS.map(card => {
          return (
            <Card>
              <Card.Img
                variant="top"
                src={card.imageUrl}
              />
              <Card.Body>
                <Card.Title>
                  {card.title}
                </Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
                <Link
                  className='btn btn-primary'
                  to={card.ahref}
                >
                  {card.buttonText}
                </Link>
              </Card.Body>
            </Card>
          )
        })}
        </Col>
      </Row>
    );
  }

  const renderHomeHeader = () => {
    return (
      <h3>
        <small>{t('home.header')}</small>
      </h3>
    );
  }

  const renderHomeContent = () => {
    return (
       <Row className="home-content middle">
         <Col xs={5} md={4}>
          <Image
            className='img-fluid'
            src='src/images/classic_cars.jpeg'
            thumbnail
          />
         </Col>
         <Col xs={7} md={8}>
            <p className="lead">
              { renderHomeHeader() }
              {t("home.main-paragraph")}
            </p>
         </Col>
       </Row>
    );
  }

  const renderIntro = () => {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>{t('contact.paint-doctor')}</h1>
          <p>
            {t('home.intro-body')}
          </p>
        </Container>
      </Jumbotron>
    )
  }

  return (
    <Container>
      { renderIntro() }
      { renderAboutSection() }
      { renderHomeContent() }
      <Footer />
    </Container>
  );
}


export default Home;
