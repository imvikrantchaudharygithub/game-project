import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Search from '../components/Search';
import HomeBanner from '../components/HomeBanner';
import Banner from '../components/Banner';
import RecommendedGames from '../components/RecommendedGames';
import TopRatedGames from '../components/TopRatedGames';
import MultipleGame from '../components/MultipleGame';
import RecentBigWins from '../components/RecentBigWins';
import LatestBet from '../components/LatestBet';
import Homes from '../components/homes';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Homes></Homes>
      {/* <Search></Search>
      <HomeBanner></HomeBanner>
      <Banner></Banner>
      <MultipleGame></MultipleGame>
      <RecentBigWins></RecentBigWins>
      <TopRatedGames></TopRatedGames>
      <LatestBet></LatestBet>
      <RecommendedGames></RecommendedGames> */}
    </main>
  );
}
