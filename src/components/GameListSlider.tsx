import React from 'react'
import Slider from "react-slick";
import Link from "next/link";
import GameCards from './GameCards';

export default function GameListSlider () {
    const gamecardsslider = {
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
            {
				breakpoint: 1199,
				settings: {
                    arrows: true,
					slidesToShow: 4.2,
				}
			},
			{
				breakpoint: 991,
				settings: {
                    arrows: true,
					slidesToShow: 3.2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: true,
					slidesToShow: 3.2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 379,
				settings: {
					arrows: true,
					slidesToShow: 2.2,
					slidesToScroll: 1,
				}
			}
		]
	};
  return (
    <>
          <div className="slider-btn slider-rl">
              <Slider className="gamecardsslider" {...gamecardsslider}>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div><div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
                  <div className="item">
                      <GameCards></GameCards>
                  </div>
              </Slider>
          </div>
    </>
  )
}
