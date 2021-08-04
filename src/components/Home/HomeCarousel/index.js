/* eslint-disable linebreak-style */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ResultCard from '../../SearchResultsByLocation/ResultCard';

const HomeCarousel = ({ carouselUsers, handleLoadUser, createNewChat }) => (


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
      slidesToSlide={1}
      swipeable
    >
      {
        Object.values(carouselUsers).map((user) => {
          const results = Object.values(user.mangas);
          return (
            results.map((result) => (
              <ResultCard
                mangaName={result.mangaInfo.title}
                mangaPicture={result.mangaInfo.picture}
                mangaSynopsis={result.mangaInfo.synopsis}
                ownerName={user.user.pseudo}
                ownerPicture={user.user.picture}
                ownerCity={user.user.city}
                ownerZipCode={user.user.zip_code}
                mangaVolumes={result.userVolumes}
                ownerId={user.user.id}
                handleLoadUser={handleLoadUser}
                createNewChat={createNewChat}
              />
            ))
          );
        })
      }
    </Carousel>
  </div>
);

export default HomeCarousel;
