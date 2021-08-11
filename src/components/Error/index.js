import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, Icon } from 'semantic-ui-react';
import ErrorImage from 'src/assets/images/error.png';
import homeBanner from 'src/assets/images/homeBanner.jpg';
import './style.scss';

const Error = () => {
  // automatically scrolls to the home button on page display
  const homeButtonRef = useRef(null);
  const scrollToBottom = () => {
    homeButtonRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="error">
      <Image className="error-banner" src={homeBanner} fluid />
      <Image className="error-image" src={ErrorImage} alt="" />
      <div className="error-mainWrapper">
        <div className="error-description">
          <p>Ma lecture s'est interrompue !</p>
        </div>

        <div ref={homeButtonRef} className="error-TwoButtons">
          <Link to="/" exact={+true}>
            <Button
              icon
              size="mini"
              className="error-ButtonLeft"
              labelPosition="left"
            >
              <Icon className="error-IconHome" name="reply" /> Accueil
            </Button>
          </Link>
          <Link to="/contact" exact={+true}>
            <Button
              icon
              size="mini"
              className="error-ButtonRight"
              labelPosition="right"
            >
              <Icon className="error-IconMail" name="mail" />
              Contact
            </Button>

          </Link>
        </div>

      </div>
    </div>

  );
};

export default Error;
