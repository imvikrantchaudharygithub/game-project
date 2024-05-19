import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Breadcrumb from '../components/Breadcrumb';
export default function fastparity() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: SetStateAction<number>) =>{
        setToggleState(index);
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
                                            <button className="anchor-button">Join Green</button>
                                            <p>1.95X</p>
                                        </div>
                                        <div className="fastparity-join-box">
                                            <button className="anchor-button anchor-pink-button">Join Violet</button>
                                            <p>1.95X</p>
                                        </div>
                                        <div className="fastparity-join-box">
                                            <button className="anchor-button">Join Red</button>
                                            <p>1.95X</p>
                                        </div>
                                    </div>
                                    <div className="fastparity-num-list d-grid">
                                        <button className="fastparity-num-item hovertime disabled">
                                            1
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            2
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            3
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            4
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            5
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            1
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            2
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            3
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            4
                                        </button>
                                        <button className="fastparity-num-item hovertime">
                                            5
                                        </button>
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
                                        <div className="continuous-option d-flex">
                                            <div className="continuous continuous-option-left">Old</div>
                                            <div className="continuous continuous-option-right">new</div>
                                        </div>
                                        <div className="continuous-main">
                                            <div className="continuous-item">
                                                <div className="continuous-num">3</div>
                                                <div className="continuous-num"></div>
                                                <div className="continuous-num"></div>
                                                <div className="continuous-num">5</div>
                                                <div className="continuous-num">6</div>
                                            </div>
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