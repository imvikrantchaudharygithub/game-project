import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Deposit from '../components/Deposit';
import Withdrawal from '../components/Withdrawal';
export default function useraccount() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: SetStateAction<number>) => {
        setToggleState(index);
    }
    return (
        <>
            <section className="user-cash padding-tb-lg">
                <div className="container">
                    <div className="cash-tab custom-tab d-flex">
                        <div className={toggleState === 1 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab(1)}>Deposit</div>
                        <div className={toggleState === 2 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab(2)}>Withdrawal</div>
                    </div>
                    <div className="latest-content">
                        <div className={toggleState === 1 ? "content-tab active" : "content-tab"}>
                            <div className="user-cash-main">
                                <Deposit></Deposit>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "content-tab active" : "content-tab"}>
                            <div className="user-cash-main">
                                <Withdrawal></Withdrawal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}