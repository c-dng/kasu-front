import React from 'react';
import { Button, Card, Divider, Form } from 'semantic-ui-react';

import './style.scss';

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
      <Card className="contactForm-card" centered>
        <Card.Content>
          <Card.Header text-align="center" className="contactForm-cardHeader">Formulaire de contact</Card.Header>
          <Divider />
          <Form className="contactForm-form">
            <Form.Input fluid label="Saisissez votre email:" width="16" />
            <Form.Select
              fluid
              label="Choisissez un objet:"
              options={options}
            />
            <Form.TextArea label="Saisissez votre message:" />
            <div className="contactForm-buttonWrapper"><Button className="contactForm-sendButton">Envoyer</Button></div>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ContactForm;
