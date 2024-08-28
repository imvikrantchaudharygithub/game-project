import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { SetStateAction, useEffect, useState } from "react";
import Breadcrumb from '../components/Breadcrumb';
import React from "react";
export default function Dragon() {
    const dragonpriceslider = {
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
    return (
        <>
            <Breadcrumb page={"Dragon"}></Breadcrumb>
            <section className="dragon">
                <div className="container">
                    <div className="dragon-main">
                        <div className="time-circle">
                            60
                        </div>
                        <div className="dragon-card d-flex">
                            <div className="dragon-card-left">
                                <div className="dragon-card-top d-flex justify-content align">
                                    <div className="dragon-card-percent">
                                        25%
                                    </div>
                                    <ul className="dragon-card-price">
                                        <li className="d-flex justify-content align">
                                            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z" /></svg>
                                            10,000
                                        </li>
                                        <li className="d-flex justify-content align">
                                            <svg className="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                            33
                                        </li>
                                    </ul>
                                </div>
                                <div className="dragon-card-bottom">
                                    <div className="gamexxsheading">1:1</div>
                                    <div className="gamemdheading">Dragon</div>
                                </div>
                            </div>
                            <div className="dragon-card-right">
                                <div className="dragon-card-top d-flex justify-end align">
                                    <ul className="dragon-card-price">
                                        <li className="d-flex justify-end align">
                                            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z" /></svg>
                                            10,000
                                        </li>
                                        <li className="d-flex justify-end align">
                                            <svg className="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                            33
                                        </li>
                                    </ul>
                                    <div className="dragon-card-percent">
                                        25%
                                    </div>
                                </div>
                                <div className="dragon-card-bottom">
                                    <div className="gamexxsheading">1:1</div>
                                    <div className="gamemdheading">Tiger</div>
                                </div>
                            </div>
                            <div className="dragon-card-mid">
                                <div className="dragon-mid-top">
                                    <div className="gamexxsheading">11:1</div>
                                    <div className="gamesmheading">Tie</div>
                                </div>
                                <div className="dragon-mid-circle">
                                    5%
                                </div>
                                <div className="dragon-mid-bottom">
                                    <div className="gamesmheading">Suited Tie</div>
                                    <div className="gamexxsheading">50:1</div>
                                </div>
                            </div>

                        </div>

                        <div className="dragon-price-list">
                            <div className="slider-btn slider-rl">
                                <Slider className="dragonpriceslider" {...dragonpriceslider}>
                                    <div className="item">
                                        <div className="d-price-btn bg-[#f42525]">
                                            100
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="d-price-btn bg-[#814cf4]">
                                            200
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="d-price-btn bg-[#3bc016]">
                                            300
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="d-price-btn bg-[#3bc016]">
                                            400
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="d-price-btn bg-[#3bc016]">
                                            500
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="d-price-btn bg-[#3bc016]">
                                            600
                                        </div>
                                    </div>
                                </Slider>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}