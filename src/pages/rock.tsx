import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { SetStateAction, useEffect, useState, useRef } from "react";
import Breadcrumb from '../components/Breadcrumb';
import React from "react";
export default function Rock() {
    const monkeyRef = useRef<HTMLDivElement>(null);
    const boxesRef = useRef<HTMLDivElement[]>([]);
    useEffect(() => {
        const monkey = monkeyRef.current;
        const boxes = boxesRef.current;
        if (monkey && boxes) {
        boxes.forEach((box) => {
            box.addEventListener("click", () => {
            const boxRect = box.getBoundingClientRect();
        
            monkey.style.top = `${boxRect.top + boxRect.height / 2 - 40}px`;
            monkey.style.left = `${boxRect.left + boxRect.width / 2 - 40}px`;

            });
        });
        }
    },[]);
    useEffect(() => {
        boxesRef.current[21];
    },[]);
    return (
        <>
            <Breadcrumb page={"Rock"}></Breadcrumb>
            <section className="rock">
                <div className="container">
                    <div className="rock-main d-flex align">
                        <div className="rock-btn first-btn" id="box22" ref={(el) => (boxesRef.current[21] = el)}>
                            <Image  width={80} height={80} className="" src={'/assets/images/monkey-icon.png'}  alt=""></Image>
                        </div>
                        <div className="rock-btn second-btn" id="monkey" ref={monkeyRef}>
                            <Image  width={80} height={80} className="" src={'/assets/images/monkey-icon.png'}  alt=""></Image>
                        </div>
                        {/* <div className="rock-btn">
                            <div id="monkey" ref={monkeyRef}>
                                <Image  width={100} height={100} className="" src={'/assets/images/monkey-icon.png'}  alt=""></Image>
                            </div>
                        </div> */}
                        <div className="rock-list d-grid align">
                            <div className="rock-card">
                                <div className="rock-box" id="box1" ref={(el) => (boxesRef.current[0] = el)}></div>
                                <div className="rock-box" id="box2" ref={(el) => (boxesRef.current[1] = el)}></div>
                                <div className="rock-box" id="box3" ref={(el) => (boxesRef.current[2] = el)}></div>
                                <div className="rock-box" id="box4" ref={(el) => (boxesRef.current[3] = el)}></div>
                            </div>
                            <div className="rock-card">
                                <div className="rock-box" id="box5" ref={(el) => (boxesRef.current[4] = el)}></div>
                                <div className="rock-box" id="box6" ref={(el) => (boxesRef.current[5] = el)}></div>
                                <div className="rock-box" id="box7" ref={(el) => (boxesRef.current[6] = el)}></div>
                                <div className="rock-box" id="box8" ref={(el) => (boxesRef.current[7] = el)}></div>
                            </div>
                            <div className="rock-card">
                                <div className="rock-box" id="box9" ref={(el) => (boxesRef.current[8] = el)}></div>
                                <div className="rock-box" id="box10" ref={(el) => (boxesRef.current[9] = el)}></div>
                                <div className="rock-box" id="box11" ref={(el) => (boxesRef.current[10] = el)}></div>
                                <div className="rock-box" id="box12" ref={(el) => (boxesRef.current[11] = el)}></div>
                            </div>
                            <div className="rock-card">
                                <div className="rock-box" id="box13" ref={(el) => (boxesRef.current[12] = el)}></div>
                                <div className="rock-box" id="box14" ref={(el) => (boxesRef.current[13] = el)}></div>
                                <div className="rock-box" id="box15" ref={(el) => (boxesRef.current[14] = el)}></div>
                                <div className="rock-box" id="box16" ref={(el) => (boxesRef.current[15] = el)}></div>
                            </div>
                            <div className="rock-card">
                                <div className="rock-box" id="box17" ref={(el) => (boxesRef.current[16] = el)}></div>
                                <div className="rock-box" id="box18" ref={(el) => (boxesRef.current[17] = el)}></div>
                                <div className="rock-box" id="box19" ref={(el) => (boxesRef.current[18] = el)}></div>
                                <div className="rock-box" id="box20" ref={(el) => (boxesRef.current[19] = el)}></div>
                            </div>
                        </div>
                        <div className="rock-btn" id="box21" ref={(el) => (boxesRef.current[20] = el)}>
                            <Image width={200} height={200} className="w-full" src={'/assets/images/banana-icon.png'}  alt=""></Image>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="fastparity-bet-content fastparity-bet-bottom">
                <div className={toggleBet === 1 ? "content-tab active" : "content-tab"}>
                    <div className="fastparity-bet-box d-flex">
                        <div className="fastparity-bets-amount">
                            <div className="count d-flex">
                                <button className="count-btn" onClick={dec}>-</button>
                                <input className="count-num" type="number" onChange={oncountChange} value={count} />
                                <button className="count-btn" onClick={inc}>+</button>
                            </div>
                            <div className="fastparity-num-list d-grid">
                                <button className="fastparity-num-item hovertime" onClick={() => setCount(50)}>50</button>
                                <button className="fastparity-num-item hovertime" onClick={() => setCount(100)}>100</button>
                                <button className="fastparity-num-item hovertime" onClick={() => setCount(200)}>200</button>
                                <button className="fastparity-num-item hovertime" onClick={() => setCount(500)}>500</button>
                            </div>
                        </div>
                        <div className="fastparity-bet-amount">
                            <button className="anchor-button bet-btn hovertime" onClick={handleBet}>
                                Bet
                                <span>₹{count} RS</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}