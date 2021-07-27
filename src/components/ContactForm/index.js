import React, { useEffect } from 'react';
import {
  Button, Card, Divider, Form, Image, Input,
} from 'semantic-ui-react';

import './style.scss';

import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import desktopImage from 'src/assets/images/desktopImage.jpg';

const ContactForm = ({
  email,
  object,
  content,
  message,
  changeEmail,
  changeObject,
  changeContent,
  handleMessage,
  onContactFormUnmount
}) => {

  useEffect(() => (
    function cleanup() {
    onContactFormUnmount();
  }),
  []);

  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
    // console.log(evt.target.value);
  };
  const handleChangeObject = (evt) => {
     changeObject(evt.target.value);
     //console.log(evt.target.value);
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
                <label className="contactForm-emailLabel">Saisissez votre email:</label>
                <Input fluid width="16" id="email" name="email" onChange={handleChangeEmail} value={email} />
              </Form.Field>
              <Form.Field>
                <label className="contactForm-objectLabel">Choisissez un objet:</label>
                <Form.Field control='select' onChange={handleChangeObject} value={object} >
                  <option value='Problème'>Problème</option>
                  <option value='Ajouter un manga'>Ajouter un manga</option>
                  <option value='Médiation'>Médiation</option>
                  <option value='Problème de connexion'>Problème de connexion</option>
                  <option value='Autre'>Autre</option>
                </Form.Field>
              </Form.Field>
              <Form.Field >
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
