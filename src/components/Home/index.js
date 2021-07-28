/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Divider, Image,
} from 'semantic-ui-react';
import './style.scss';

import homeBanner from 'src/assets/images/homeBanner.jpg';
import SearchExplained from './SearchExplained';
import HomeCarousel from './HomeCarousel';

const Home = ({ isLogged }) => (
  <div className="home">
    <div className="home-mainWrapper">
      <Image className="home-banner" src={homeBanner} />
      <div className="home-BannerTextButton">
        <h1 className="home-h1">BIENVENUE CHEZ KASU</h1>
        <div className="home-description">
          <p>
            <strong>Kasu</strong>, qui veut dire "prêter" en japonais, est une plateforme offrant
            la possibilité aux passionnés de s'échanger mutuellement et temporairement leurs mangas.
            Vous souhaitez lire une série que vous ne pouvez vous permettre d'acheter ?
            Trouvez un propriétaire de cette série autour de vous, et entrez en contact !
          </p>
        </div>
        {!isLogged && (
          <div className="home-buttonWrapper">
            <Button className="home-button" as={Link} to="/login">Se connecter</Button>
            <div className="home-buttonArtificalMargin"></div>
            <Button className="home-button" as={Link} to="/register">S'inscrire</Button>
          </div>
        )}
      </div>
    </div>
    <div className="home-ParisResultsTitleWrapper">
      <h2 className="home-ParisResultsTitle">Voici les mangas disponibles dans un rayon de 30 kilomètres autour de Paris</h2>
    </div>
    <HomeCarousel />
    <SearchExplained />
  </div>
);

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Home;
