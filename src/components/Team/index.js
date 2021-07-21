import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import './style.scss';

const Team = () => (
  <div className="team">
    <h2>Notre équipe</h2>
    <p>Loremloremloremloremlorem Loremloremlorem</p>

    <div className="team-cardGlobal">
      <Card className="team-card">
        <Image className="team-cardImage" src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header className="team-cardName">Olivier Y.</Card.Header>
          <Card.Description className="team-cardNameRole">
            Lead Developer Front-end
          </Card.Description>
        </Card.Content>
        <Card.Content className="team-cardNameExtra" extra>
          <Icon name="github" />
          <a href="https://github.com/oyatrides">GitHub</a>
        </Card.Content>
      </Card>

      <Card className="team-card">
        <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header className="team-cardName">Laetitia D.</Card.Header>
          <Card.Description className="team-cardNameRole">
            Lead Developer Back-end
          </Card.Description>
        </Card.Content>
        <Card.Content className="team-cardNameExtra" extra>
          <Icon name="github" />
          <a href="https://github.com/laetitiadeschamps">GitHub</a>
        </Card.Content>
      </Card>

      <Card className="team-card">
        <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header className="team-cardName">Laetitia R.</Card.Header>
          <Card.Description className="team-cardNameRole">
            Product Owner
          </Card.Description>
        </Card.Content>
        <Card.Content className="team-cardNameExtra" extra>
          <Icon name="github" />
          <a href="https://github.com/Listeriaa">GitHub</a>
        </Card.Content>
      </Card>

      <Card className="team-card">
        <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header className="team-cardName">Mathieu G.</Card.Header>
          <Card.Description className="team-cardNameRole">
            Git Master
          </Card.Description>
        </Card.Content>
        <Card.Content className="team-cardNameExtra" extra>
          <Icon name="github" />
          <a href="https://github.com/Mathieu-PromoS">GitHub</a>
        </Card.Content>
      </Card>

      <Card className="team-card">
        <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} size="small" />
        <Card.Content>
          <Card.Header className="team-cardName">Camille D.</Card.Header>
          <Card.Description className="team-cardNameRole">
            Scrum Master
          </Card.Description>
        </Card.Content>
        <Card.Content className="team-cardNameExtra" extra>
          <Icon name="github" />
          <a href="https://github.com/c-dng">GitHub</a>
        </Card.Content>
      </Card>
    </div>
  </div>

);

export default Team;
