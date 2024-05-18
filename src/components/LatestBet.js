import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Table from '../components/Table';
const LatestBet = ({}) =>{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return(
        <>
            <section className="latest-bet">
                <div className="container">
                    <div className="gamesmheading">Latest bet & Race</div>
                    <div className="custom-tab d-flex">
                        <div className={toggleState === 1 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab (1)}>Latest bets</div>
                        <div className={toggleState === 2 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab (2)}>High rollers</div>
                        <div className={toggleState === 3 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab (3)}>Wager contest</div>
                    </div>
                    <div className="latest-content">
                        <div className={toggleState === 1 ? "content-tab active" : "content-tab"}>
                            <div className="latest-bet-box">
                                <Table></Table>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "content-tab active" : "content-tab"}>
                            <div className="latest-bet-box">
                                <Table></Table>
                            </div>
                        </div>
                        <div className={toggleState === 3 ? "content-tab active" : "content-tab"}>
                            <div className="latest-bet-box">
                                <Table></Table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LatestBet;