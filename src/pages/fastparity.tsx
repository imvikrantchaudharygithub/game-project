import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import Breadcrumb from '../components/Breadcrumb';
import React from "react";
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import toast, { Toaster } from 'react-hot-toast';
import filterBetOn from "./services/colorPridiction";
import WinModal from "@/components/winModal";
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
import io from 'socket.io-client';
import useSocket from "@/hooks/useSocket";
import apiService, { apipost, get } from "./services/apiService";
import { setUser } from "@/slices/userSlice";
import { error } from "console";
export default function Fastparity() {
    const dispatch = useAppDispatch();
    // const socket = io('http://localhost:4000');
    const socket = useSocket();
    const user = useAppSelector((state: any) => state.user);
    const [timer, setTimer] = useState<number>(30);
    const [timeperiod, setTimeperiod] = useState<string>();
    const [betnumber, setBetnumber] = useState<number>()
    const [count, setCount] = React.useState<number>(5);
    const [beton, setBeton] = useState(false)
    const [winResult, setWinResult] = useState<any>({})
    const [winResultdata, setWinResultdata] = useState<any>([])
    const [betwinHistory, setBetwinHistory] = useState<any>([])
    const widthPercent = (timer / 30) * 100;

    const [userwinHistory, setUserwinHistory] = useState<any>([])


    const initialObjectState = {
        timeperiod: null,
        beton: '',
        amount: count,
        user_id: user.id
    };

    const [object, setObject] = useState(initialObjectState);
    const [list, setList] = useState([]);

    // Function to update the individual object state
    const updateObject = (key: any, value: any) => {
        setObject(prevState => ({
            ...prevState,
            [key]: value,
        }));

    };
    // Function to add the object to the list

    const addObjectToList = () => {
        setList((prevList): any => {
            const newList = [...prevList, object];
            console.log("Object added:", newList);
            return newList;
        });
        setObject(initialObjectState); // Reset the form
        console.log("object added", list)
    };
    const handleBet = () => {
        if (user.id) {
            if (!object.beton) {
                toast.error("Select any Number or Color")
            } else {
                if (count <= user.amount) {

                    setBeton(true)
                    setList((prevList): any => {
                        const newList = [...prevList, object];
                        console.log("Object added:", newList);
                        return newList;
                    });
                    socket.emit('ontimesendJsonData', object)

                    console.log("bet list", list)

                    const payload = {
                        id: user?.id,
                        amount: count,
                        condition: "minusamount"
                    }
                    apipost('/update-useramount', payload).then((res: any) => {
                        console.log("updated amount res", res)
                        dispatch(setUser({ id: res?.data?.user?._id, amount: res?.data?.user?.balance }));
                    }).catch((err: any) => {
                        // toast.error(err)
                        console.log(err)
                    })


                } else {
                    toast.error("Insufficient Balance")
                }
            }
        } else {
            dispatch(openSignIn())
        }
    }
    useEffect(() => {
        console.log("object", object)
    }, [object]);
    useEffect(() => {
        updateObject("amount", count)
    }, [count]);

    const savewinHistory = async (data: any) => {
        await apipost("/wininghistory", data).then((res: any) => {
            console.log("wininghistory", res.data)
            getwinHistory()

        }).catch((err: any) => {
            console.log("wininghistory  api err", err)
        })
    }
    const getwinHistory = async () => {
        await get(`/wininghistory/${user?.id}`).then((res: any) => {
            console.log("get-wininghistory", res?.data?.winingHistory)
            setUserwinHistory(res?.data?.winingHistory)

        }).catch((err: any) => {
            console.log("getwininghistory  api err", err)
        })
    }

    useEffect(() => {
        if (timer == 3) {
            console.log("you can send data", list)
            socket.on('declaredresult', (result: any) => {
                console.log('declaredresult -result', result, list)
                setWinResult(result)
                if (list.length > 0) {

                } else if (list.length === 0) {
                    console.log('declaredresult -filter data list 0')
                    setWinResultdata([])
                }

            });

        }
        if (timer === 0) {
            socket.on('previousresults', (previousResults: any) => {
                setBetwinHistory(previousResults)
                // console.log('winhistory',previousResults,betwinHistory)
            })

            setObject(initialObjectState)
            setBetnumber(0)
            setCount(50)
            if (list.length > 0) {
                filterBetOn(list, winResult?.smallestColor, winResult?.smallestNumber).then(async (filterdata: any) => {
                    console.log('declaredresult -filter data', filterdata)
                    setWinResultdata(filterdata)
                    if (filterdata.length != 0) {
                        savewinHistory(filterdata)
                    }
                    const totalAmount = await filterdata?.reduce((total: any, item: any) => total + item.amount, 0);

                    const payload = { id: user?.id, amount: totalAmount, condition: "addamount" }
                    await apiService.post('/update-useramount', payload).then((res: any) => {
                        console.log("updated addamount res", res)
                        dispatch(setUser({ id: res?.data?.user?._id, amount: res?.data?.user?.balance }));
                        setList([])
                    }).catch((err: any) => {
                        toast.error(err)
                    })


                }).catch((error) => {
                    console.log(error)
                })

            }
        }
        if (timer === 30) {
            setWinResult(null)
            setWinResultdata([])
            setList([])
        }

    }, [timer]);
    useEffect(() => {
        if (!socket) return;

        // socket.on('receiveJsonData', (data: any) => {
        //   console.log('Received broadcast data:', data);
        //   setReceivedData(data);
        // });

        socket.on('timer', (countdown: number) => {
            //   console.log('Timer countdown:', countdown);
            setTimer(countdown);
        });


        // socket.on('declaredresult', (result:any) => {
        //     const filterdata= filterBetOn(list,result.smallestColor,result.smallestNumber)
        //      console.log('declaredresult',filterdata,result,list)
        //  });
        socket.on('timeperiod', (period: string) => {
            console.log('timeperiod:', period);
            setTimeperiod(period)
            updateObject('timeperiod', period)
            setBeton(false)
            setList([])
            setWinResultdata([])
        });

        //    return socket.disconnect();
        return () => {
            //  socket.disconnect()
            socket.off('receiveJsonData');
            socket.off('timer');
            socket.off('timeperiod');

        };
    }, [socket]);
    useEffect(() => {
        if (!socket) return;
        if (object?.timeperiod == null) {
            socket.on('gettimeperiod', (period: string) => {
                // console.log('gettimeperiod:', period);
                setTimeperiod(period)
                updateObject('timeperiod', period)
            });

        }
        if (betwinHistory.length === 0) {
            socket.on('previousresults', (previousResults: any) => {
                setBetwinHistory(previousResults)
                // console.log('winhistory',previousResults,betwinHistory)
            })
        }
    }, [socket]);


    const handleClick = () => {
        socket.emit('sendJsonData', list);
        console.log("data send", list)
    };

    const number = [{ value: 0, label: "0" },
    { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" },
    { value: 5, label: "5" }, { value: 6, label: "6" }, { value: 7, label: "7" }, { value: 8, label: "8" }, { value: 9, label: "9" }
    ]
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: SetStateAction<number>) => {
        setToggleState(index);
    };
    const [toggleBet, setToggleBetState] = useState(1);
    const toggleBetTab = (index: SetStateAction<number>) => {
        setToggleBetState(index);
    };


    const inc = (event: any) => {
        setCount(count + 1);
    };

    const dec = () => {
        setCount(count - 1);
    }
    const oncountChange = (event: any) => {
        const val: number = Number(event.target.value)
        setCount(val)
    }

    const getSelectednumber = (numvalue: any) => {
        console.log("selected number value", numvalue)
        setBetnumber(numvalue)
        updateObject('beton', String(numvalue))
    }
    const switchWinHistory = () => {
        toggleTab(3)
        getwinHistory()

    }


    return (
        <>
            <Breadcrumb page={"Color Casino"}></Breadcrumb>
            {timer == 0 && (<WinModal resultdata={winResult} resultFilteritems={winResultdata} />)}
            <section className="fastparity">
                <div className="container">
                    <div className="fastparity-main d-flex justify-center">
                        <div className="fastparity-left">
                            <div className="fastparity-view">
                                <div className="fastparity-view-top">
                                    <div className="fastparity-view-mid">
                                        <div className="fastparity-time d-flex">
                                            <div className="fastparity-time-left">
                                                <p>Period</p>
                                                <div className="gamexxsheading">{object?.timeperiod ? object?.timeperiod : timeperiod}</div>
                                                {/* <button onClick={handleClick}>send data</button> */}
                                                {/* {timer == 0 && (<p>WINNER WINNER</p>)} */}
                                            </div>
                                            <div className="fastparity-time-right">
                                                {/* <p>Countdown - <span className="time-num">{timer}</span></p> */}
                                                <div className="time-box d-flex align">
                                                    {/* <div className="time-num">0</div>
                                                    <div className="time-num">0</div>
                                                    <span>:</span>
                                                    <div className="time-num">0</div> */}
                                                    <p>Countdown :</p>
                                                    <div className="time-num">{timer}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fastparity-join d-grid">
                                            <div className={`fastparity-join-box  ${timer <= 10 ? 'disabled' : ''}`}>
                                                <button className="anchor-button" disabled={timer <= 10} onClick={() => updateObject("beton", "Green")}>Green</button>
                                                <p>2x</p>
                                            </div>
                                            <div className={`fastparity-join-box  ${timer <= 10 ? 'disabled' : ''}`}>
                                                <button className="anchor-button anchor-pink-button" disabled={timer <= 10} onClick={() => updateObject("beton", "Violet")}>Violet</button>
                                                <p>3x</p>
                                            </div>
                                            <div className={`fastparity-join-box  ${timer <= 10 ? 'disabled' : ''}`}>
                                                <button className="anchor-button anchor-red-button" disabled={timer <= 10} onClick={() => updateObject("beton", "Red")}>Red</button>
                                                <p>2x</p>
                                            </div>
                                        </div>
                                        <div className="fastparity-num-list fastparity-num-toplist d-grid">
                                            {number?.map((num: any) => (
                                                <button key={num.value} disabled={timer <= 10} onClick={() => getSelectednumber(num?.value)} className={`fastparity-num-item hovertime disabled ${num.value === betnumber ? 'anchor-green-button' : ''}`}>
                                                    {num?.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="fastparity-view-bottom">
                                        <p>{timer <= 10 ? 'No More Bets' : 'Place your bets'}</p>
                                        <div className={`progress transition-all duration-700 ease-in-out ${timer <= 10 ? 'bg-red-600' : 'bg-[#3bc016]'}`} style={{ width: `${widthPercent}%` }}></div>
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
                                                                <th>Bet</th>
                                                                {/* <th>Result</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {list && list?.slice().reverse().map((item: any) => (
                                                                <tr key={item._id}>
                                                                    <td className="">
                                                                        {item?.timeperiod}
                                                                    </td>
                                                                    <td className="">
                                                                        ₹ {item?.amount}
                                                                    </td>
                                                                    <td className="result">
                                                                        <div className={`flex justify-center items-center rounded-full w-10 h-10 ${item?.beton === 'Green' ? 'bg-[#3bc016]' :
                                                                            item?.beton === 'Violet' ? 'bg-[#814cf4]' :
                                                                                item?.beton === 'Red' ? 'bg-[#f42525]' :
                                                                                    'bg-white text-black text-xl font-bold'
                                                                            }`}>{item?.beton}</div>
                                                                    </td>

                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    {!list.length && (<div className="text-center">No bet yet

                                                    </div>)}
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
                                                {betwinHistory?.map((item: any, index: any) => (
                                                    <div className="text-center transition-all duration-700 ease-in-out" key={item?.timestamp}>
                                                        <div className="record-txt">{index + 1}</div>
                                                        <div className={`flex justify-center items-center rounded-full w-10 h-10 text-black text-xl font-bold mx-auto ${item?.smallestColor === 'Green' ? 'bg-[#3bc016]' :
                                                            item?.smallestColor === 'Violet' ? 'bg-[#814cf4]' :
                                                                item?.smallestColor === 'Red' ? 'bg-[#f42525]' :
                                                                    'bg-white'
                                                            }`}>{item?.smallestNumber}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={toggleState === 3 ? "fastparity-panel active" : "fastparity-panel"}>
                                            <div className="probability-title">Your Wins</div>
                                            <div className="continuous-main">
                                                <div className="table-responsive">

                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Period</th>
                                                                <th>Bet Price</th>
                                                                <th>Win Price</th>
                                                                <th>Bet</th>
                                                                {/* <th>Result</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {userwinHistory && userwinHistory?.slice().reverse().map((item: any) => (
                                                                <tr key={item._id}>
                                                                    <td className="">
                                                                        {item?.timeperiod}
                                                                    </td>
                                                                    <td className="">
                                                                        ₹ {item?.beton === 'Violet' ? item?.amount / 3 : item?.amount / 2}
                                                                    </td>
                                                                    <td className="">
                                                                        ₹ {item?.amount}
                                                                    </td>
                                                                    <td className="result">
                                                                        <div className={`flex justify-center items-center rounded-full w-10 h-10 ${item?.beton === 'Green' ? 'bg-[#3bc016]' :
                                                                            item?.beton === 'Violet' ? 'bg-[#814cf4]' :
                                                                                item?.beton === 'Red' ? 'bg-[#f42525]' :
                                                                                    'bg-white text-black text-xl font-bold'
                                                                            }`}>{item?.beton}</div>
                                                                    </td>

                                                                </tr>
                                                            ))}

                                                        </tbody>
                                                    </table>
                                                    {!userwinHistory.length && (<p className="text-center">No Win yet</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fastparity-panel-tab d-flex">
                                        <div className={toggleState === 1 ? "fastparity-tab-item hovertime active" : "fastparity-tab-item hovertime"} onClick={() => toggleTab(1)}>Continuous</div>
                                        <div className={toggleState === 2 ? "fastparity-tab-item hovertime active" : "fastparity-tab-item hovertime"} onClick={() => toggleTab(2)}>Record</div>
                                        <div className={toggleState === 3 ? "fastparity-tab-item hovertime active" : "fastparity-tab-item hovertime"} onClick={() => switchWinHistory()}>Win History</div>
                                    </div>
                                </div>
                                <div className="fastparity-bet d-flex">
                                    {/* <div className="fastparity-bet-left relative"> */}
                                        {/* <button className="plus-btn" onClick={addObjectToList}>+</button>
                                        <div className="fastparity-bet-tab custom-tab d-flex">
                                            <div className={toggleBet === 1 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleBetTab(1)}>Latest bets</div>
                                            <div className={toggleBet === 2 ? "tabs hovertime active" : "tabs hovertime"} onClick={() => toggleBetTab(2)}>High rollers</div>
                                        </div> */}
                                        {/* <div className="fastparity-bet-content">
                                            <div className={toggleBet === 1 ? "content-tab active" : "content-tab"}>
                                                <div className="fastparity-bet-box d-flex">
                                                    <div className="fastparity-bet-amount">
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
                                    {/* </div> */}
                                    {/* <div className="fastparity-bet-right relative">
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
                                </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="fastparity-right">

                        </div> */}
                    </div>
                    <div className="col bottom-col mt-4">
                        <div className="deposit-card bank-text">
                            <div className="gamemdheading">Game Laws</div>
                            <ul>
                                <li>
                                    1. You have own risk for play this game.
                                </li>
                                <li>
                                    2. ⁠You can choose the colour, number.
                                </li>
                                <li>
                                    3. You may even get addicted to this game.
                                </li>
                                <li>
                                    4. You can win easily real cash in this game.
                                </li>
                                <li>
                                    5. ⁠Won chances in this game colour have 33%, number have 10% and big/ small have 50% to win
                                </li>
                                <li>
                                    6. ⁠Without investment you cannot withdraw the amount.
                                </li>
                                <li>
                                    7. If you join the people then have a good bonus for play this game.
                                </li>
                                <li>
                                    8. Your Deposit and withdraw can get within 15-20min
                                </li>
                                <li>
                                    9. You can deposit your amount by bank and UPI.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <div className="fastparity-bet-content fastparity-bet-bottom">
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
            </div>
        </>
    );
}