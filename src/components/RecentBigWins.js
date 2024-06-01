import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MiniGameCard from '../components/MiniGameCard';
const RecentBigWins = ({}) =>{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    const recentslider = {
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 12,
		slidesToScroll: 1,
		responsive: [
            {
				breakpoint: 1199,
				settings: {
                    arrows: true,
					slidesToShow:6.5,
				}
			},
			{
				breakpoint: 991,
				settings: {
                    arrows: true,
					slidesToShow: 5.5,
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: true,
					slidesToShow: 4.5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 379,
				settings: {
					arrows: true,
					slidesToShow: 3.5,
					slidesToScroll: 1,
				}
			}
		]
	};
    return(
        <> 
            <section className="Recentbox padding-tb">
                <div className="container">
                    <div className="gamexxsheading d-flex align">
                        <span className="dot"></span>
                        Recent Big Wins
                    </div>
                    <div className="Recent-main">
                        <div className="Recent-tab d-flex align">
                            <div className={toggleState === 1 ? "tab-item hovertime active" : "tab-item hovertime"} onClick={() => toggleTab (1)}>
                                All
                            </div>
                            <div className={toggleState === 2 ? "tab-item hovertime active" : "tab-item hovertime"} onClick={() => toggleTab (2)}>
                                Original
                            </div>
                            <div className={toggleState === 3 ? "tab-item hovertime active" : "tab-item hovertime"} onClick={() => toggleTab (3)}>
                                Slots
                            </div>
                            <div className={toggleState === 4 ? "tab-item hovertime active" : "tab-item hovertime"} onClick={() => toggleTab (4)}>
                                Live Casino
                            </div>
                        </div>
                        <div className="Recent-content">
                            <div className={toggleState === 1 ? "Recent-content-tab active" : "Recent-content-tab"}>
                                <div className="slider-btn slider-rl">
                                    <Slider className="recentslider" {...recentslider}>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className={toggleState === 2 ? "Recent-content-tab active" : "Recent-content-tab"}>
                                <div className="slider-btn slider-rl">
                                    <Slider className="recentslider" {...recentslider}>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                        <div className="item">
                                            <MiniGameCard></MiniGameCard>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className={toggleState === 3 ? "Recent-content-tab active" : "Recent-content-tab"}></div>
                            <div className={toggleState === 4 ? "Recent-content-tab active" : "Recent-content-tab"}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RecentBigWins;