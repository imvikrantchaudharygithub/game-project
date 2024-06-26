import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import Deposit from '../components/Deposit';
import Withdrawal from '../components/Withdrawal';
import toast, { Toaster } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useRouter } from 'next/router';


export default function useraccount() {
    const router = useRouter();

    const user = useAppSelector((state:any) => state.user);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: SetStateAction<number>) => {
        setToggleState(index);
    }
  
    useEffect(() => {
       if(!user?.id){
        router.push('/');
       }
        }, [user?.id]);
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
                                <Deposit userData={user}/>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "content-tab active" : "content-tab"}>
                            <div className="user-cash-main">
                                <Withdrawal userData={user}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

