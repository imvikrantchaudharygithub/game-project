import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const homes = ({}) =>{
    const bannerslider = {
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};
    return(
        <>
            <section className="monky-banner">
                <div className="monky-banner-mid">
                    <Image width={1715} height={1582} className="w-full" src={'/assets/images/header-logo.png'} alt=""></Image>
                    <Link href={'#'} className="monky-play">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="play"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path></svg>
                    </Link>
                </div>
            </section>
            <section className="banner-box padding-tb-lg">
                <div className="container">
                    <div className="slider-btn slider-rl">
                        <Slider className="bannerslider" {...bannerslider}>
                            <div className="item">
                                <div className="banner-card ">
                                    <Link href='#' className="relative">
                                        <Image width={563} height={243} className="w-full hovertime" src={'/assets/images/banner.jpg'} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="banner-card ">
                                    <Link href='#' className="relative">
                                        <Image width={563} height={243} className="w-full hovertime" src={'/assets/images/banner.jpg'} alt="" />
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
export default homes;