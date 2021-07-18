import React from 'react';
import { Card, Icon, Image, Button, Rating, Divider, Select, Transition} from 'semantic-ui-react'
import './style.scss';

const volumeOptions = [
  { key: 't1', value: 'T1', text: 'Tome 1' },
  { key: 't2', value: 'T2', text: 'Tome 2' },
  { key: 't3', value: 'T3', text: 'Tome 3' },
  { key: 't4', value: 'T4', text: 'Tome 4' },
  { key: 't5', value: 'T5', text: 'Tome 5' },
]

const SearchResultsByLocation = () => {
  let open = true;

  function toggle() {
    console.log('click');
    open = !open;
    console.log(open);
  }
  
    return (
    <Card.Group className='container'>
      <Card>
        <Card.Content className='test'>
          <Image
            floated='right'
            size='medium'
            src='https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg'
          />
          
          <div className='infoscard'>
          <Card.Header className='nameManga'> Nom du manga </Card.Header>
          <div className='owner'>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          Propriétaire <Rating icon='star' defaultRating={4} maxRating={5} /> 
          </div>  
          <Card.Meta className='localisation'> <Icon disabled name='map marker alternate' /> Localisation</Card.Meta>

          <Card.Description className='numberVolume'>
          <Select placeholder='Tomes disponibles' options={volumeOptions} />
          </Card.Description>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic className="showMore" color='black' onClick={toggle}>
              Voir plus
            </Button>
            <Button basic color='blue' className="contactOwner">
              Contacter le propriétaire
            </Button>
          </div>
          <div className={open ? 'showMore-active' : 'showMore-hidden'}>
            <h3>Synopsis</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content className='test'>
          <Image
            floated='right'
            size='medium'
            src='https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg'
          />
          
          <div className='infoscard'>
          <Card.Header className='nameManga'> Nom du manga </Card.Header>
          <div className='owner'>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          Propriétaire <Rating icon='star' defaultRating={4} maxRating={5} /> 
          </div>  
          <Card.Meta className='localisation'> <Icon disabled name='map marker alternate' /> Localisation</Card.Meta>

          <Card.Description className='numberVolume'>
          <Select placeholder='Tomes disponibles' options={volumeOptions} />
          </Card.Description>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic className="showMore" color='black' onClick={toggle}>
              Voir plus
            </Button>
            <Button basic color='blue' className="contactOwner">
              Contacter le propriétaire
            </Button>
          </div>
          <div className={open ? 'showMore-active' : 'showMore-hidden'}>
            <h3>Synopsis</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content className='test'>
          <Image
            floated='right'
            size='medium'
            src='https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg'
          />
          
          <div className='infoscard'>
          <Card.Header className='nameManga'> Nom du manga </Card.Header>
          <div className='owner'>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          Propriétaire <Rating icon='star' defaultRating={4} maxRating={5} /> 
          </div>  
          <Card.Meta className='localisation'> <Icon disabled name='map marker alternate' /> Localisation</Card.Meta>

          <Card.Description className='numberVolume'>
          <Select placeholder='Tomes disponibles' options={volumeOptions} />
          </Card.Description>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic className="showMore" color='black' onClick={toggle}>
              Voir plus
            </Button>
            <Button basic color='blue' className="contactOwner">
              Contacter le propriétaire
            </Button>
          </div>
          <div className={open ? 'showMore-active' : 'showMore-hidden'}>
            <h3>Synopsis</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content className='test'>
          <Image
            floated='right'
            size='medium'
            src='https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg'
          />
          
          <div className='infoscard'>
          <Card.Header className='nameManga'> Nom du manga </Card.Header>
          <div className='owner'>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          Propriétaire <Rating icon='star' defaultRating={4} maxRating={5} /> 
          </div>  
          <Card.Meta className='localisation'> <Icon disabled name='map marker alternate' /> Localisation</Card.Meta>

          <Card.Description className='numberVolume'>
          <Select placeholder='Tomes disponibles' options={volumeOptions} />
          </Card.Description>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic className="showMore" color='black' onClick={toggle}>
              Voir plus
            </Button>
            <Button basic color='blue' className="contactOwner">
              Contacter le propriétaire
            </Button>
          </div>
          <div className={open ? 'showMore-active' : 'showMore-hidden'}>
            <h3>Synopsis</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Card.Content>
      </Card>
      


    
    </Card.Group>
  );
};

export default SearchResultsByLocation;
