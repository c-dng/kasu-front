import React from 'react';
import { Form } from 'semantic-ui-react';

import './styles.scss';

const ContactForm = () => {
  
  const options = [
    { key: 'p', text: 'Problème technique', value: 'probleme' },
    { key: 'a', text: 'Ajouter un manga', value: 'manga' },
    { key: 'm', text: 'Médiation', value: 'mediation' },
    { key: 'o', text: 'Autre', value: 'other' },
  ];

  return (
    <div className="contactForm">
    <h1>Formulaire de contact</h1>
        <Form>
            <Form.Input fluid label='Saisissez un email:' width='16' />
            <Form.Select
              fluid
              label='Choisissez un objet:'
              options={options}
            />
          <Form.TextArea label='Saisissez votre message:' />
          <Form.Button>Envoyer</Form.Button>
        </Form>
    </div>
    ) 
};

export default ContactForm;
