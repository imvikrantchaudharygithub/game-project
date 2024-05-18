import Image from "next/image";
import Link from "next/link";
const HomeBanner = ({}) =>{
    return(
        <>
			<section className="home-banner">
                <div className="container d-flex">
                    <div className="homebanner-left">
                        <div className="home-title gamexsheading">
                            Sign Up &amp; <span>Get</span> Reward <br/> Up to
                        </div>
                        <div className="gameheading">$20,000.00</div>
                        <div className="homebanner-content d-flex align">
                            <Link href='#' className="anchor-button anchor-pink-button">
                                Sign Up Now
                            </Link>
                            <div className="homebanner-login d-flex align">
                                <div className="txt">or</div>
                                <ul className="login-list d-flex align">
                                    <li>
                                        <Link href='#'>
                                            <svg width="12" height="12" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z"></path><path d="M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z"></path></svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='#'>
                                            <svg width="12" height="12" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z"></path><path d="M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z"></path></svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="homebanner-right">
                        <Image width={1664} height={1076} className="w-full" src={'/assets/images/home-banner.png'} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeBanner;