import React from 'react';
import { Card, Icon, Image, Button, Rating, Divider, Select, Transition} from 'semantic-ui-react'

import './style.scss';

const countryOptions = [
  { key: 't1', value: 'T1', text: 'Tome 1' },
  { key: 't2', value: 'T2', text: 'Tome 2' },
  { key: 't3', value: 'T3', text: 'Tome 3' },
  { key: 't4', value: 'T4', text: 'Tome 4' },
  { key: 't5', value: 'T5', text: 'Tome 5' },
]

const SearchResultsByLocation = () => (
  <Card.Group className='container' centered>
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
        <Select placeholder='Tomes disponibles' options={countryOptions} />
        </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Voir plus
          </Button>
          <Button basic color='blue'>
            Contacter le propriétaire
          </Button>
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
        <Select placeholder='Tomes disponibles' options={countryOptions} />
        </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Voir plus
          </Button>
          <Button basic color='blue'>
            Contacter le propriétaire
          </Button>
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
        <Select placeholder='Tomes disponibles' options={countryOptions} />
        </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Voir plus
          </Button>
          <Button basic color='blue'>
            Contacter le propriétaire
          </Button>
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
        <Select placeholder='Tomes disponibles' options={countryOptions} />
        </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Voir plus
          </Button>
          <Button basic color='blue'>
            Contacter le propriétaire
          </Button>
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
        <Select placeholder='Tomes disponibles' options={countryOptions} />
        </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Voir plus
          </Button>
          <Button basic color='blue'>
            Contacter le propriétaire
          </Button>
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
        <Select placeholder='Tomes disponibles' options={countryOptions} />
        </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Voir plus
          </Button>
          <Button basic color='blue'>
            Contacter le propriétaire
          </Button>
        </div>
      </Card.Content>
    </Card>

  </Card.Group>
)

export default SearchResultsByLocation;
