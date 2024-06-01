import Slider from "react-slick";
import Link from "next/link";
import GameCard from '../components/GameCard'
const RecommendedGames = ({}) =>{
    const recommendedslider = {
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 6,
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
    return(
        <>
            <section className="recommended-box padding-tb-lg">
                <div className="container">
                    <div className="heading-top d-flex align">
                        <div className="gamesmheading">Recommended Games</div>
                        <Link href="#" className="anchor-button-noborder">View All</Link>
                    </div>
                    <div className="slider-btn slider-rl">
                        <Slider className="recommendedslider" {...recommendedslider}>
                            <div className="item">
                                <GameCard></GameCard>
                            </div>
                            <div className="item">
                                <GameCard></GameCard>
                            </div>
                            <div className="item">
                                <GameCard></GameCard>
                            </div><div className="item">
                                <GameCard></GameCard>
                            </div>
                            <div className="item">
                                <GameCard></GameCard>
                            </div>
                            <div className="item">
                                <GameCard></GameCard>
                            </div>
                            <div className="item">
                                <GameCard></GameCard>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section> 
        </>
    )
}
export default RecommendedGames;