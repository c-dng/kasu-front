import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Image,
} from 'semantic-ui-react';
import './style.scss';
import homeBanner from './homeBanner.jpg';
import SearchExplained from './SearchExplained';

const Home = () => (
  <div className="home">
    <div className="home-mainWrapper">
      <Image className="home-banner" src={homeBanner} />
      <div className="home-BannerTextButton">
        <h1 className="home-h1">BIENVENUE CHEZ KASU</h1>
        <p className="home-description">
          <strong>Kasu</strong>, qui veut dire "prêter" en japonais, est une plateforme offrant
          la possibilité aux passionnés de s'échanger mutuellement et temporairement leurs mangas.
        </p>
        <div className="home-buttonWrapper">
          <Button className="home-button" as={Link} to="/login">Se connecter</Button>
          <Button className="home-button" as={Link} to="/register">S'inscrire</Button>
        </div>
      </div>
    </div>
    <SearchExplained />
  </div>
);

export default Home;
