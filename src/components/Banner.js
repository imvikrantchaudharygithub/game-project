import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const Banner = ({}) =>{
    const bannerslider = {
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2.2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: true,
					slidesToShow: 1.5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 379,
				settings: {
					arrows: true,
					slidesToShow: 1.2,
					slidesToScroll: 1,
				}
			}
		]
	};
    return(
        <>
            <section className="banner-box">
                <div className="container">
                    <div className="slider-btn slider-rl">
                        <Slider className="bannerslider" {...bannerslider}>
                            <div className="item">
                                <div className="banner-card ">
                                    <Link href='#' className="relative">
                                        <Image width={563} height={243} className="w-full hovertime" src={'/assets/images/banner.jpg'} alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="banner-card ">
                                    <Link href='#' className="relative">
                                        <Image width={563} height={243} className="w-full hovertime" src={'/assets/images/banner.jpg'} alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="banner-card ">
                                    <Link href='#' className="relative">
                                        <Image width={563} height={243} className="w-full hovertime" src={'/assets/images/banner.jpg'} alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="banner-card ">
                                    <Link href='#' className="relative">
                                        <Image width={563} height={243} className="w-full hovertime" src={'/assets/images/banner.jpg'} alt=""/>
                                    </Link>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section> 
        </>
    )
}
export default Banner;