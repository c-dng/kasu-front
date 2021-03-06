import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import Olivier from 'src/assets/images/olivier.png';
import Laetitia from 'src/assets/images/laetitia.png';
import Listeria from 'src/assets/images/listeria.jpg';
import Mathieu from 'src/assets/images/mathieu.jpg';
import Camille from 'src/assets/images/camille.png';

import './style.scss';

const Team = () => (
  <div className="team">
    <Image className="team-banner" src={alternativeBanner} />
    <div className="team-globalContentWrapper">
      <h2>Notre équipe</h2>
      <p className="team-description">Pendant 4 mois nous avons appris le métier de développeur web, en mêlant théorie et pratique. Dans le cadre du projet de fin de formation, nous avons réalisé ce site en 1 mois : 1 semaine pour définir le cahier des charges, et 3 semaines à coder.</p>
      <div className="team-cardGlobal">
        <Card className="team-card">
          <Image className="picture-ourTeam" src={Olivier} wrapped ui={false} size="small" />
          <Card.Content className="team-cardContent">
            <Card.Header className="team-cardName">Olivier Y.</Card.Header>
            <Card.Description className="team-cardNameRole">
              Lead Developer Front-end
            </Card.Description>
          </Card.Content>
          <Card.Content className="team-cardNameExtra" extra>
            <Icon name="github" />
            <a className="team-githubLink" href="https://github.com/oyatrides">GitHub</a>
          </Card.Content>
        </Card>
        <Card className="team-card">
          <Image className="picture-ourTeam" src={Mathieu} wrapped ui={false} size="small" />
          <Card.Content className="team-cardContent">
            <Card.Header className="team-cardName">Mathieu G.</Card.Header>
            <Card.Description className="team-cardNameRole">
              Git Master
            </Card.Description>
          </Card.Content>
          <Card.Content className="team-cardNameExtra" extra>
            <Icon name="github" />
            <a className="team-githubLink" href="https://github.com/Mathieu-PromoS">GitHub</a>
          </Card.Content>
        </Card>
        <Card className="team-card">
          <Image className="picture-ourTeam" src={Camille} wrapped ui={false} size="small" />
          <Card.Content className="team-cardContent">
            <Card.Header className="team-cardName">Camille D.</Card.Header>
            <Card.Description className="team-cardNameRole">
              Scrum Master
            </Card.Description>
          </Card.Content>
          <Card.Content className="team-cardNameExtra" extra>
            <Icon name="github" />
            <a className="team-githubLink" href="https://github.com/c-dng">GitHub</a>
          </Card.Content>
        </Card>
        <Card className="team-card">
          <Image className="picture-ourTeam" src={Laetitia} wrapped ui={false} size="small" />
          <Card.Content className="team-cardContent">
            <Card.Header className="team-cardName">Laetitia D.</Card.Header>
            <Card.Description className="team-cardNameRole">
              Lead Developer Back-end
            </Card.Description>
          </Card.Content>
          <Card.Content className="team-cardNameExtra" extra>
            <Icon name="github" />
            <a className="team-githubLink" href="https://github.com/laetitiadeschamps">GitHub</a>
          </Card.Content>
        </Card>
        <Card className="team-card">
          <Image className="picture-ourTeam" src={Listeria} wrapped ui={false} size="small" />
          <Card.Content className="team-cardContent">
            <Card.Header className="team-cardName">Laetitia R.</Card.Header>
            <Card.Description className="team-cardNameRole">
              Product Owner
            </Card.Description>
          </Card.Content>
          <Card.Content className="team-cardNameExtra" extra>
            <Icon name="github" />
            <a className="team-githubLink" href="https://github.com/Listeriaa">GitHub</a>
          </Card.Content>
        </Card>
      </div>
    </div>
  </div>

);

export default Team;
