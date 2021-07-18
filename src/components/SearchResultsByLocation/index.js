import React from 'react';
import { Card, Icon, Image, Button, Rating, Divider, Select} from 'semantic-ui-react'

import './style.scss';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
]

const SearchResultsByLocation = () => (
  <Card.Group className='container'>
    <Card>
      <Card.Content>
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
            Contacter l'utilisateur
          </Button>
        </div>
      </Card.Content>
    </Card>
   
    <Card>
      <Card.Content>
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
            Contacter l'utilisateur
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
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
            Contacter l'utilisateur
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
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
            Contacter l'utilisateur
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
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
            Contacter l'utilisateur
          </Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
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
            Contacter l'utilisateur
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
)

export default SearchResultsByLocation;
