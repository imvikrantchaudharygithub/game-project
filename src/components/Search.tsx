import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import GameCard from '../components/GameCard';
import RecommendedGames from '../components/RecommendedGames';
export default function Search({onClose}:any) {


    return (
      <>
        <section className="search-box">
            <div className="game-popup-overlay"></div>
            <div className="search-main">
                <div className="container">
                    <div className="search-input-wrap d-flex align">
                        <div className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.9999 19L14.6499 14.65" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <input type="text" className="search-control" placeholder="Game name | Provider"></input>
                        <button className="clear-btn"></button>
                        <div className="search-cancel" onClick={onClose}>Cancel</div>
                    </div>
                    <div className="search-result">
                        <p>Search requires at least 3 characters</p>
                        <div className="search-list">
                            <div className="history-top d-flex align">
                                <p className="title">Search history</p>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                                </svg>
                            </div>
                            <ul className="history-list">
                                <li>
                                    cas
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="result">
                        <div className="result-title d-flex align">
                            <p className="title">Search Result</p>
                            <p className="result-num">About <span>99</span> results</p>
                        </div>
                        <div className="result-card">
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                        </div>
                        <RecommendedGames></RecommendedGames>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}