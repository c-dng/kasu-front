import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
  // erase the message received by the api in response to the form submit displayed to the client
  useEffect(() => (
    function cleanup() {
      onContactFormUnmount();
    }),
  []);
  // If the user doesn't change the form subject (so, if he wants to add a manga),
  // this useEffect won't allow a null subject being sent.
  useEffect(() => {
    changeObject(object || 'Ajouter un manga');
  }, []);
  // form subject as a controlled component
  const handleChangeObject = (evt) => {
    changeObject(evt.target.value);
  };
  // form content as a controlled component
  const handleChangeContent = (evt) => {
    changeContent(evt.target.value);
  };
  // sends the form to the api + save the message in response + erase the subject & content state
  const handleSubmit = (evt) => {
    evt.preventDefault();
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

ContactForm.propTypes = {
  object: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  changeObject: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
  handleMessage: PropTypes.func.isRequired,
  onContactFormUnmount: PropTypes.func.isRequired,
};

export default ContactForm;
