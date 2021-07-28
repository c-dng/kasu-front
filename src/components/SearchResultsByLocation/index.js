import React from 'react';
import {
  Card, Icon, Image, Button, Rating, Select,
} from 'semantic-ui-react';
import './style.scss';
import SearchBar from 'src/components/SearchBar';

const volumeOptions = [
  { key: 't1', value: 'T1', text: 'Tome 1' },
  { key: 't2', value: 'T2', text: 'Tome 2' },
  { key: 't3', value: 'T3', text: 'Tome 3' },
  { key: 't4', value: 'T4', text: 'Tome 4' },
  { key: 't5', value: 'T5', text: 'Tome 5' },
];

const SearchResultsByLocation = () => {
  let open = true;

  function toggle() {
    console.log('click');
    open = !open;
    console.log(open);
  }

  return (
    <div className="searchResultsByLocation">

      <div className="searchResultsByLocation-searchBarWrapper">
        <SearchBar />
      </div>
      <Card.Group className="searchResultsByLocation-cardGroup">
        <Card className="searchResultsByLocation-card">
          <Card.Content className="searchResultsByLocation-cardContentImgInfos">
            <Image
              size="medium"
              src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
            />

            <div className="searchResultsByLocation-infoscard">
              <Card.Header className="searchResultsByLocation-nameManga">Nom du manga</Card.Header>
              <div className="searchResultsByLocation-owner">
                <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar />
                Propriétaire
              </div>
              <Card.Meta className="searchResultsByLocation-localisation"> <Icon disabled name="map marker alternate" /> Localisation</Card.Meta>

              <Card.Description className="searchResultsByLocation-numberVolume">
                <Select placeholder="Tomes disponibles" options={volumeOptions} />
              </Card.Description>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic className="searchResultsByLocation-showMore" color="black" onClick={toggle}>
                Voir plus
              </Button>
              <Button basic color="blue" className="searchResultsByLocation-contactOwner">
                Contacter le propriétaire
              </Button>
            </div>
            <div className={open ? 'searchResultsByLocation-showMore--active' : 'searchResultsByLocation-showMore--hidden'}>
              <h3>Synopsis</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card.Content>
        </Card>

        <Card className="searchResultsByLocation-card">
          <Card.Content className="searchResultsByLocation-cardContentImgInfos">
            <Image
              size="medium"
              src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
            />

            <div className="searchResultsByLocation-infoscard">
              <Card.Header className="searchResultsByLocation-nameManga">Nom du manga</Card.Header>
              <div className="searchResultsByLocation-owner">
                <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar />
                Propriétaire
              </div>
              <Card.Meta className="searchResultsByLocation-localisation"> <Icon disabled name="map marker alternate" /> Localisation</Card.Meta>

              <Card.Description className="searchResultsByLocation-numberVolume">
                <Select placeholder="Tomes disponibles" options={volumeOptions} />
              </Card.Description>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic className="searchResultsByLocation-showMore" color="black" onClick={toggle}>
                Voir plus
              </Button>
              <Button basic color="blue" className="searchResultsByLocation-contactOwner">
                Contacter le propriétaire
              </Button>
            </div>
            <div className={open ? 'searchResultsByLocation-showMore--active' : 'searchResultsByLocation-showMore--hidden'}>
              <h3>Synopsis</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Card.Content>
        </Card>

      </Card.Group>
    </div>
  );
};

export default SearchResultsByLocation;
