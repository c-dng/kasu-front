import React from 'react';
import {
  Button, Card, Divider, Form, Image, Input,
} from 'semantic-ui-react';

import './style.scss';

import alternativeBanner from 'src/assets/alternativeBanner.png';
import desktopImage from 'src/assets/desktopImage.jpg';

const ContactForm = () => {
  const options = [
    { key: 't', text: 'Problème technique', value: 'probleme' },
    { key: 'a', text: 'Ajouter un manga', value: 'manga' },
    { key: 'm', text: 'Médiation', value: 'mediation' },
    { key: 'l', text: 'Problème de connexion', value: 'login' },
    { key: 'o', text: 'Autre', value: 'other' },
  ];

  return (
    <div className="contactForm">
      <Image className="contactForm-banner" src={alternativeBanner} />
      <div className="contactForm-globalContentWrapper">
        <div className="contactForm-desktopImage"></div>
        <Card className="contactForm-card" centered>
          <Card.Content className="contactForm-cardContent">
            <Card.Header text-align="center" className="contactForm-cardHeader">Formulaire de contact</Card.Header>
            <Form className="contactForm-form">
              <Form.Field>
                <label className="contactForm-emailLabel">Saisissez votre email:</label>
                <Input fluid width="16" />
              </Form.Field>
              <Form.Field>
                <label className="contactForm-objectLabel">Choisissez un objet:</label>
                <Form.Select
                  fluid
                  options={options}
                />
              </Form.Field>
              <Form.Field>
                <label className="contactForm-msgLabel">Saisissez votre message:</label>
                <Form.TextArea />
              </Form.Field>
              <div className="contactForm-buttonWrapper"><Button className="contactForm-sendButton">Envoyer</Button></div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
