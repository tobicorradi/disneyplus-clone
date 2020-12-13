import React from "react";
import CollectionsCard from "./../CollectionsCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Collections.css";
const Collections = () => {
  const cards = [
    {
      brand: "disney",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4",
    },
    {
      brand: "pixar",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4",
    },
    {
      brand: "marvel",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4",
    },
    {
      brand: "star-wars",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/03/1585929840-star-wars.mp4",
    },
    {
      brand: "national-geographic",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4",
    },
  ];
  const config = {
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
      },
      {
        breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
        settings: "unslick",
      },
    ],
  };
  return (
    <section className="collections">
      <Slider {...config}>
        {cards.map((card) => (
          <Link key={card.brand} to={`/brand/${card.brand}`}>
            <CollectionsCard
              key={card.brand}
              brand={card.brand}
              video={card.video}
              image={card.image}
            />
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default Collections;
