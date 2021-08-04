/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { useEffect } from 'react';
import {
  Button, Card, Form, Image,
} from 'semantic-ui-react';

import './style.scss';

import alternativeBanner from 'src/assets/images/alternativeBanner.png';

const ContactForm = ({
  object,
  content,
  message,
  changeObject,
  changeContent,
  handleMessage,
  onContactFormUnmount,
}) => {
  useEffect(() => (
    function cleanup() {
      onContactFormUnmount();
    }),
    []);


  useEffect(() => {
    changeObject(object || 'Ajouter un manga');
  }, []);

  const handleChangeObject = (evt) => {
    changeObject(evt.target.value);
    // console.log(evt.target.value);
  };
  const handleChangeContent = (evt) => {
    changeContent(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(message.message);
    handleMessage();
  };

  return (
    <div className="contactForm">
      <Image className="contactForm-banner" src={alternativeBanner} />
      <div className="contactForm-message">{message.message}</div>
      <div className="contactForm-globalContentWrapper">
        <div className="contactForm-desktopImage" />
        <Card className="contactForm-card" centered>
          <Card.Content className="contactForm-cardContent">
            <Card.Header text-align="center" className="contactForm-cardHeader">Formulaire de contact</Card.Header>
            <Form className="contactForm-form" onSubmit={handleSubmit}>
              <Form.Field>
                <label className="contactForm-objectLabel">Choisissez un objet:</label>
                <Form.Field control="select" onChange={handleChangeObject} value={object}>
                  <option value="Ajouter un manga">Ajouter un manga</option>
                  <option value="Médiation">Médiation</option>
                  <option value="Problème technique">Problème technique</option>
                  <option value="Problème de connexion">Problème de connexion</option>
                  <option value="Supprimer mon compte">Supprimer mon compte</option>
                  <option value="Autre">Autre</option>
                </Form.Field>
              </Form.Field>
              <Form.Field>
                <label className="contactForm-msgLabel">Saisissez votre message:</label>
                <Form.TextArea id="message" name="message" onChange={handleChangeContent} value={content} />
              </Form.Field>
              <div className="contactForm-buttonWrapper">
                <Button className="contactForm-sendButton" type="submit">Envoyer</Button>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
