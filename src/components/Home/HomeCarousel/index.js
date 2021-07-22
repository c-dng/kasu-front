import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeCard from '../HomeCard';

const HomeCarousel = () => {
  const mangasList = [
    {
      key: 1,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 2,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 3,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 4,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 5,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 6,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 7,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 8,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 9,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
    {
      key: 10,
      image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg',
      mangaName: 'Attack on Titan',
      ownerAvatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
      ownerName: 'Propriétaire',
      location: 'Localisation',
      synopsys: 'lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur lorem ipsum blbl blbl bl lorem ipsum consectitur',
      volumeOptions: [
        { key: 't1', value: 'T1', text: 'Tome 1' },
        { key: 't2', value: 'T2', text: 'Tome 2' },
        { key: 't3', value: 'T3', text: 'Tome 3' },
        { key: 't4', value: 'T4', text: 'Tome 4' },
        { key: 't5', value: 'T5', text: 'Tome 5' },
      ],
    },
  ];

  return (
    <div className="homeCarousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {
          mangasList.map((admin) => (
            <HomeCard
              key={admin.key}
              image={admin.image}
              mangaName={admin.mangaName}
              ownerAvatar={admin.ownerAvatar}
              ownerName={admin.ownerName}
              location={admin.location}
              synopsys={admin.synopsys}
              volumeOptions={admin.volumeOptions}
            />
          ))

        }
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
