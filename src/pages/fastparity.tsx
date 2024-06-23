import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Breadcrumb from '../components/Breadcrumb';
import React from "react";
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import {
    openSignIn,
    closeSignIn,
    openSignUp,
    closeSignUp,
    openUserInfo,
    closeUserInfo,
    openResetPassword,
    closeResetPassword,
    closeParentPopup,
  } from '../slices/popupSlice';
export default function fastparity() {
    const dispatch = useAppDispatch();

    const number =[{value:0,label:"0"},
        {value:1,label:"1"}, {value:2,label:"2"},{value:3,label:"3"}, {value:4,label:"4"},
        {value:5,label:"5"}, {value:6,label:"6"}, {value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}
    ]
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: SetStateAction<number>) =>{
        setToggleState(index);
    };
    const [toggleBet, setToggleBetState] = useState(1);
    const toggleBetTab = (index: SetStateAction<number>) =>{
        setToggleBetState(index);
    };
    const [count, setCount] = React.useState<number>(0);
  
  const inc = (event: any) => {
    setCount(count + 1);
  };
  
  const dec = () => {
    setCount(count - 1);
  }

  const getSelectednumber=(numvalue:any)=>{
    console.log("selected number value",numvalue)
  }
    return (
      <>
        <Breadcrumb></Breadcrumb>
        <section className="fastparity">
            <div className="container">
                <div className="fastparity-main d-flex">
                    <div className="fastparity-left">
                        <div className="fastparity-view">
                            <div className="fastparity-view-top">
                                <div className="fastparity-view-mid">
                                    <div className="fastparity-time d-flex">
                                        <div className="fastparity-time-left">
                                            <p>Period</p>
                                            <div className="gamexxsheading">2405201157696</div>
                                        </div>
                                        <div className="fastparity-time-right">
                                            <p>Countdown</p>
                                            <div className="time-box d-flex align">
                                                <div className="time-num">0</div>
                                                <div className="time-num">0</div>
                                                <span>:</span>
                                                <div className="time-num">0</div>
                                                <div className="time-num">0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fastparity-join d-grid">
                                        <div className="fastparity-join-box disabled">
                                            <button className="anchor-button">Green</button>
                                            <p>1.95X</p>
                                        </div>
                                        <div className="fastparity-join-box">
                                            <button className="anchor-button anchor-pink-button" >Violet</button>
                                            <p>1.95X</p>
                                        </div>
                                        <div className="fastparity-join-box">
                                            <button className="anchor-button anchor-red-button">Red</button>
                                            <p>1.95X</p>
                                        </div>
                                    </div>
                                    <div className="fastparity-num-list d-grid">
                                        {number?.map((num:any)=>(
                                        <button key={num.value} onClick={()=>getSelectednumber(num?.value)} className="fastparity-num-item hovertime disabled">
                                            {num?.label}
                                        </button>
                                       ))}
                                    </div>
                                </div>
                                <div className="fastparity-view-bottom">
                                    <p>Place your bets</p>
                                    <div className="progress"></div>
                                </div>
                            </div>
                            <div className="fastparity-panel-box">
                                <div className="fastparity-panel-content">
                                    <div className={toggleState === 1 ? "fastparity-panel active" : "fastparity-panel"}>
                                        {/* <div className="continuous-option d-flex">
                                            <div className="continuous continuous-option-left">Old</div>
                                            <div className="continuous continuous-option-right">new</div>
                                        </div> */}
                                        <div className="continuous-main">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Period</th>
                                                                <th>Price</th>
                                                                <th>Number</th>
                                                                <th>Result</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="period">
                                                                    101720221827
                                                                </td>
                                                                <td className="period">
                                                                    8887
                                                                </td>
                                                                <td className="number">
                                                                    0
                                                                </td>
                                                                <td>
                                                                    <div className="result">
                                                                        <span className="result-bg"></span>
                                                                        <span className="result-bg"></span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="period">
                                                                    101720221827
                                                                </td>
                                                                <td className="period">
                                                                    8887
                                                                </td>
                                                                <td className="number">
                                                                    0
                                                                </td>
                                                                <td>
                                                                    <div className="result">
                                                                        sdfsdfdsf
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="period">
                                                                    101720221827
                                                                </td>
                                                                <td className="period">
                                                                    8887
                                                                </td>
                                                                <td className="number">
                                                                    0
                                                                </td>
                                                                <td>
                                                                    <div className="result">
                                                                        <span className="result-bg"></span>
                                                                        <span className="result-bg"></span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="period">
                                                                    101720221827
                                                                </td>
                                                                <td className="period">
                                                                    8887
                                                                </td>
                                                                <td className="number">
                                                                    0
                                                                </td>
                                                                <td>
                                                                    <div className="result">
                                                                        sdfsdfdsf
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            {/* <div className="continuous-item">
                                                <div className="continuous-num">3</div>
                                                <div className="continuous-num"></div>
                                                <div className="continuous-num"></div>
                                                <div className="continuous-num">5</div>
                                                <div className="continuous-num">6</div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className={toggleState === 2 ? "fastparity-panel active" : "fastparity-panel"}>
                                        <div className="record-title">
                                            <p>Fast Parity Record</p>
                                        </div>
                                        <div className="record-main d-grid">
                                            <div className="text-center">
                                                <div className="record-txt">4465</div>
                                                <div className="record-num">2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={toggleState === 3 ? "fastparity-panel active" : "fastparity-panel"}>
                                        <div className="probability-title">1000 rounds</div>
                                        <div className="probability-main">
                                            <div className="probability-grid d-grid">
                                                <div className="grid-wrapper">
                                                    <div className="probability-num">G</div>
                                                    <div className="probability-progress">
                                                        <div className="progress-color green"></div>
                                                        <div className="progress-num">429</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="probability-table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                        <td>
                                                            <div className="table-num">2</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                        <td className="tdnum">
                                                            113
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="fastparity-panel-tab d-flex">
                                    <div className={toggleState === 1 ? "fastparity-tab-item hovertime active" : "fastparity-tab-item hovertime"} onClick={() => toggleTab (1)}>Continuous</div>
                                    <div className={toggleState === 2 ? "fastparity-tab-item hovertime active" : "fastparity-tab-item hovertime"} onClick={() => toggleTab (2)}>Record</div>
                                    <div className={toggleState === 3 ? "fastparity-tab-item hovertime active" : "fastparity-tab-item hovertime"} onClick={() => toggleTab (3)}>Probability</div>
                                </div>
                            </div>
                            <div className="fastparity-bet d-flex">
                                <div className="fastparity-bet-left relative">
                                    <button className="plus-btn">+</button>
                                    <div className="fastparity-bet-tab custom-tab d-flex">
                                        <div className={toggleBet === 1 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleBetTab (1)}>Latest bets</div>
                                        <div className={toggleBet === 2 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleBetTab (2)}>High rollers</div>
                                    </div>
                                    <div className="fastparity-bet-content">
                                        <div className={toggleBet === 1 ? "content-tab active" : "content-tab"}>
                                            <div className="fastparity-bet-box d-flex">
                                                <div className="fastparity-bet-amount">
                                                    <div className="count d-flex">
                                                        <button className="count-btn" onClick={dec}>-</button>
                                                        <input className="count-num" type="number" value={count}/>
                                                        <button className="count-btn" onClick={inc}>+</button>
                                                    </div>
                                                    <div className="fastparity-num-list d-grid">
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                    </div>
                                                </div>
                                                <div className="fastparity-bet-amount">
                                                    <button className="anchor-button bet-btn">
                                                        Bet
                                                        <span>1.00 Usd</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fastparity-bet-right relative">
                                    <button className="plus-btn">-</button>
                                    <div className="fastparity-bet-tab custom-tab d-flex">
                                        <div className={toggleBet === 1 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleBetTab (1)}>Latest bets</div>
                                        <div className={toggleBet === 2 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleBetTab (2)}>High rollers</div>
                                    </div>
                                    <div className="fastparity-bet-content">
                                        <div className={toggleBet === 1 ? "content-tab active" : "content-tab"}>
                                            <div className="fastparity-bet-box d-flex">
                                                <div className="fastparity-bet-amount">
                                                    <div className="count d-flex">
                                                        <button className="count-btn" onClick={dec}>-</button>
                                                        <input className="count-num" type="number" value={count}/>
                                                        <button className="count-btn" onClick={inc}>+</button>
                                                    </div>
                                                    <div className="fastparity-num-list d-grid">
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                        <button className="fastparity-num-item hovertime">20</button>
                                                    </div>
                                                </div>
                                                <div className="fastparity-bet-amount">
                                                    <button className="anchor-button bet-btn">
                                                        Bet
                                                        <span>1.00 Usd</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fastparity-right">
                        
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}