import React from 'react';
import { Button, Card, Icon, Image, Select } from 'semantic-ui-react';

const HomeCard = ({ image,
  mangaName,
  ownerAvatar,
  ownerName,
  location,
  synopsys,
  volumeOptions, }) => (
  <div className="homeCard">
    <Card className="homeCard-card">
      <Card.Content className="homeCard-cardContentImgInfos">
        <Image
          size="medium"
          src={image}
        />

        <div className="homeCard-infoscard">
          <Card.Header className="homeCard-nameManga">{mangaName}</Card.Header>
          <div className="homeCard-owner">
            <Image src={ownerAvatar} avatar />
            {ownerName}
          </div>
          <Card.Meta className="homeCard-localisation"> <Icon disabled name="map marker alternate" />{location}</Card.Meta>

          <Card.Description className="homeCard-numberVolume">
            <Select placeholder="Tomes disponibles" options={volumeOptions} />
          </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic className="homeCard-showMore" color="black">
            Voir plus
          </Button>
          <Button basic color="blue" className="homeCard-contactOwner">
            Contacter le propriétaire
          </Button>
        </div>
        <div className="homeCard-showMore--active">
          <h3>Synopsis</h3>
          <p>{synopsys}</p>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default HomeCard;
