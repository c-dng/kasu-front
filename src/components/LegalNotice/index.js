import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';

const LegalNotice = () => (
  <div className="legalNotice">
    <Image className="legalNotice-banner" src={alternativeBanner} />
    <div className="legalNotice-globalContentWrapper">
      <Card className="legalNotice-card" centered>
        <Card.Content className="legalNotice-cardContent">
          <Card.Header text-align="center" className="legalNotice-cardHeader">Mentions légales</Card.Header>
          <Card.Description className="legalNotice-cardDescription legalNotice-cardDescription legalNotice-cardDescription">
            <p className="legalNotice-creationDate"><strong>En vigueur au 06/08/2021</strong></p>
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N.,
              il est porté à la connaissance des Utilisateurs du site www.kasu.com les présentes
              mentions légales. La connexion et la navigation sur le site (indiquer le nom du site)
              par l’Utilisateur implique acceptation intégrale et sans réserve des présentes
              mentions légales.
              Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».
            </p>
            <h2 className="legalNotice-h2">ARTICLE 1 : L’éditeur</h2>
            <p>
              L’édition et la direction de la publication du site www.kasu.com est assurée par
              ROLLAND Laetitia, domiciliée Toulouse 31000, dont le numéro de téléphone est
              06 10 20 30 40, et l'adresse e-mail laetitia.rolland@kasu.com.
            </p>
            <h2 className="legalNotice-h2">ARTICLE 2 : L’hébergeur</h2>
            <p>
              L'hébergeur du site www.kasu.com est la Société AWS, dont le siège social
              est situé au 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand ,
              avec le numéro de téléphone : 04 44 44 60 40.
            </p>
            <h2 className="legalNotice-h2">ARTICLE 3 : Accès au site</h2>
            <p>
              Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force
              majeure, interruption programmée ou non et pouvant découlant d’une
              nécessité de maintenance.
              En cas de modification, interruption ou suspension des services le site
              www.kasu.com ne saurait être tenu responsable.
            </p>
            <h2 className="legalNotice-h2">ARTICLE 4 : Collecte des données</h2>
            <p>
              Le site assure à l'Utilisateur une collecte et un traitement d'informations
              personnelles dans le respect de la vie privée conformément à la loi n°78-17
              du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
              Le site est déclaré à la CNIL sous le numéro 0000 0000 0000.
              En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
              l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression
              et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
            </p>
            <ul>
              <li>- via un formulaire de contact;</li>
              <li>- via son espace personnel ;</li>
            </ul>
            <h2 className="legalNotice-h2">ARTICLE 5 : Cookies</h2>
            <p>
              L’Utilisateur est informé que lors de ses visites sur le site, un cookie
              peut s’installer automatiquement sur son logiciel de navigation.
              En naviguant sur le site, il les accepte.
              Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais
              sert à enregistrer des informations relatives à la navigation de celui-ci sur
              le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire
              des paramètres figurant au sein de son logiciel de navigation.
            </p>
            <h2 className="legalNotice-h2">ARTICLE 6 : Propriété intellectuelle</h2>
            <p>
              Toute utilisation, reproduction, diffusion, commercialisation, modification
              de toute ou partie du site www.kasu.com,  sans autorisation de l’Editeur est
              prohibée et pourra entraînée des actions et poursuites judiciaires telles que
              notamment prévues par le Code de la propriété intellectuelle et le Code civil.
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </div>
);

export default LegalNotice;
