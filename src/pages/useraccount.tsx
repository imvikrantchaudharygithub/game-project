import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import Deposit from '../components/Deposit';
import Withdrawal from '../components/Withdrawal';
import toast, { Toaster } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useRouter } from 'next/router';
import { get } from "./services/apiService";
import { setUser } from "@/slices/userSlice";


export default function Useraccount() {
    const router = useRouter();
    const dispatch = useAppDispatch();

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
    const [userData, setUserData] = useState<any>();
    useEffect(() => {
        // if(isTokenSet){
        getuserData()
        // console.log("userState",user)
        // }
    }, []);

    const getuserData = async () => {
            await get(`/getuserdata`).then((res: any) => {
                console.log("userdata", res.data)
                setUserData(res?.data?.user)
                dispatch(setUser({ id: res?.data?.user?._id, amount: res?.data?.user?.balance}));
                // setEditvalue(res?.data?.user)
            }).catch((err: any) => {
                console.log(err)
            })
    }

    const refreshuserdata=()=>{
        getuserData()
        console.log("refresh function hit")
    }
    return (
        <>
            <section className="user-cash padding-tb-lg">
                <div className="container">
                    <div className="cash-tab custom-tab d-flex">
                        <div className={toggleState === 1 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab(1)}>
                            <span className="user-cash-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="deposit"><path d="M46.88 34.39A2.27 2.27 0 0 0 44 33l-6.24 1.93C36.18 36.37 35.58 36 24 36a1 1 0 0 1 0-2c12 0 11.59.23 12.47-.65A2.05 2.05 0 0 0 37 32a2 2 0 0 0-2-2H24.3c-1.39 0-2.55-2-6.6-2H11v10.42l1.29.73a27.78 27.78 0 0 0 24.38 1.65l9-3.63a2.26 2.26 0 0 0 1.21-2.78zM1 41h8V26H1zm3.08-4.38a1 1 0 1 1 1.63 1.09 1 1 0 0 1-1.63-1.09zM31 25a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm1-9h-2a3 3 0 0 1 0-6V9a1 1 0 0 1 2 0v1h2a1 1 0 0 1 0 2h-4a1 1 0 0 0 0 2h2a3 3 0 0 1 0 6v1a1 1 0 0 1-2 0v-1h-2a1 1 0 0 1 0-2h4a1 1 0 0 0 0-2z"></path></svg>
                            </span>
                            Deposit
                        </div>
                        <div className={toggleState === 2 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleTab(2)}>
                            <span className="user-cash-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Withdrawal"><path d="M22,2H2A1,1,0,0,0,1,3v8a1,1,0,0,0,1,1H5v9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V12h3a1,1,0,0,0,1-1V3A1,1,0,0,0,22,2ZM7,20V18a2,2,0,0,1,2,2Zm10,0H15a2,2,0,0,1,2-2Zm0-4a4,4,0,0,0-4,4H11a4,4,0,0,0-4-4V8H17Zm4-6H19V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v3H3V4H21Zm-9,5a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,12,11Z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                            </span>
                            Withdrawal
                        </div>
                    </div>
                    <div className="latest-content">
                        <div className={toggleState === 1 ? "content-tab active" : "content-tab"}>
                            <div className="user-cash-main">
                                <Deposit userData={user} useralldata={userData} refreshuserdata={refreshuserdata}/>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "content-tab active" : "content-tab"}>
                            <div className="user-cash-main">
                                <Withdrawal userData={user} useralldata={userData} refreshuserdata={refreshuserdata}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

