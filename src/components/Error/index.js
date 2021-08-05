import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';
import ErrorImage from 'src/assets/images/error.png';
import homeBanner from 'src/assets/images/homeBanner.jpg';
import './style.scss';

const Error = () => (

  <div className="error">
    <Image className="error-banner" src={homeBanner} fluid />
    <Image className="error-image" src={ErrorImage} alt="" />
    <div className="error-mainWrapper">
      <div className="error-description">
        <p>Ma lecture s'est interrompue !</p>
      </div>
      <div className="error-buttonWrapper">
        <Button className="lined thin" as={Link} to="/">Accueil</Button>
        <div className="error-buttonArtificalMargin" />
        <Button className="lined thin" as={Link} to="/contact">Contact</Button>
      </div>
    </div>
  </div>

);

export default Error;
