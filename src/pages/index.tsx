import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import HomeBanner from '../components/HomeBanner';
import Banner from '../components/Banner';
import RecommendedGames from '../components/RecommendedGames';
import TopRatedGames from '../components/TopRatedGames';
import MultipleGame from '../components/MultipleGame';
import RecentBigWins from '../components/RecentBigWins';
import LatestBet from '../components/LatestBet';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [accordionState, setAccordionState] = useState(0);
    const accordion = (any: SetStateAction<number>) => {
        setAccordionState(any);

}
  return (
    <main>
      <HomeBanner></HomeBanner>
      <Banner></Banner>
      <MultipleGame></MultipleGame>
      <RecentBigWins></RecentBigWins>
      <TopRatedGames></TopRatedGames>
      <LatestBet></LatestBet>
      <RecommendedGames></RecommendedGames>
      <footer className="footer">
        <div className="container">
          <div className="footer-top padding-tb d-grid">
            <div className={accordionState === 1 ? "footer-col active" : "footer-col"}>
              <h6 onClick={()=>accordion(1)} className={accordionState === 1 ? "gamexxsheading" : "gamexxsheading" }>
                Casino
                <span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.49995L0.499998 1.99995L1.55 0.949951L8 7.39995L14.45 0.949951L15.5 1.99995L8 9.49995Z" fill="#B0D235" />
                  </svg>                
                </span>
              </h6>
              <ul className="footer-list">
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
              </ul>
            </div>
            <div className={accordionState === 2 ? "footer-col active" : "footer-col"}>
              <h6 onClick={()=>accordion(2)} className={accordionState === 2 ? "gamexxsheading" : "gamexxsheading" }>
                Casino
                <span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.49995L0.499998 1.99995L1.55 0.949951L8 7.39995L14.45 0.949951L15.5 1.99995L8 9.49995Z" fill="#B0D235" />
                  </svg>                
                </span>
              </h6>
              <ul className="footer-list">
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h6 className="gamexxsheading">Casino</h6>
              <ul className="footer-list">
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h6 className="gamexxsheading">Casino</h6>
              <ul className="footer-list">
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h6 className="gamexxsheading">Casino</h6>
              <ul className="footer-list">
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
                <li>
                  <a href="#">Casino Home</a>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-social">
              <h6 className="gamexxsheading">Join our Community</h6>
              <ul className="footer-list">
                <li>
                  <a href="#">
                    <Image width={80} height={80} className="w-full" src={'/assets/images/icons/facebook-icon.png'} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width={80} height={80} className="w-full" src={'/assets/images/icons/facebook-icon.png'} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width={80} height={80} className="w-full" src={'/assets/images/icons/facebook-icon.png'} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image width={80} height={80} className="w-full" src={'/assets/images/icons/facebook-icon.png'} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-partner padding-tb">
            <div className="gamesmheading">Sponsorship and Gaming Responsibilities</div>
            <div className="footer-partner-list d-grid">
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
              <div className="item">
                <Link href='#'>
                  <Image width={256} height={144} className="w-full" src={'/assets/images/sigma.jpg'} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom padding-tb">
            <div className="footer-logo">
              <Link href='#'>
                <Image width={810} height={199} className="w-full" src={'/assets/images/footer-logo.png'} alt=""/>
              </Link>
            </div>
            <div className="footer-content d-grid">
              <div className="footer-content-left">
                <p>A multi-award winning crypto casino. With a player-centric approach, bc.ai is able to satisfy millions of gamblers across the globe. bc.ai has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience.</p>
                <p>Your use of and access to bc.ai signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy.</p>
                <p>Crypto trading is not gambling by definition, therefore it is not covered by our gaming license.</p>
                <p>COPYRIGHT ©2024 BLOCKDANCE B.V. ALL RIGHTS RESERVED</p>
                <p>1BTC=$61,416.98</p>
              </div>
              <div className="footer-content-right">
                <p>BC.AI is operated under a non-exclusive license by Small House B.V, a company registered in Curacao with Company Number 164979 and with Registered Address at: Zuikertuintjeweg Z/N, Curacao.</p>
                <div className="footer-licensed d-flex">
                  <Link href='#' className="licensed-logo">
                    <Image width={160} height={144} className="w-full" src={'/assets/images/licensed.png'} alt=""/>
                  </Link>
                  <p>Small House B.V., is licensed and regulated by the Gaming Control Board (GCB) with Licence Number: OGL/2023/118/0060 Issued in 22nd February 2024. Trust Service by <Link href='https://wyze-trust.com'>https://wyze-trust.com</Link> and Represented by <Link href='https://igagroup.com'>https://igagroup.com</Link></p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
