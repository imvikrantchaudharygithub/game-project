import React from 'react'
import { useState } from "react";
export default function GameBetTab () {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: React.SetStateAction<number>) =>{
        setToggleState(index);
    }
  return (
    <>
        <div className='bet-tab-main'>
              <div className="bet-tab">
                  <div className={toggleState === 1 ? "bet-tabs hovertime active" : "bet-tabs hovertime"} onClick={() => toggleTab(1)}>Manual</div>
                  <div className={toggleState === 2 ? "bet-tabs hovertime active" : "bet-tabs hovertime"} onClick={() => toggleTab(2)}>Auto</div>
              </div>
              <div className="bets-content">
                  <div className='bet-input'>
                    <label className='form-label bet-input-top'>
                        <span>Bet Amount</span>
                        <span>$0.00</span>
                    </label>
                    <div className='bet-input-box bet-amount-input'>
                        <div className='form-group'>
                            <input type='number' className='form-control' placeholder='0.00' min={1.0} max={10000}></input>
                            {/* <span><svg fill="none" viewBox="0 0 96 96" className="svg-icon "> <title></title> <path d="M95.895 48.105C95.895 74.557 74.451 96 48 96 21.548 96 .105 74.556.105 48.105.105 21.653 21.548.21 48 .21c26.451 0 47.895 21.443 47.895 47.895Z" fill="#F7931A"></path><path d="M69.525 42.18c.93-6.27-3.84-9.645-10.38-11.895l2.115-8.505-5.16-1.29-2.1 8.28c-1.365-.345-2.76-.66-4.14-.975l2.1-8.295-5.175-1.29-2.115 8.49c-1.125-.255-2.235-.51-3.3-.78l-7.14-1.785-1.365 5.52s3.84.885 3.75.93a2.763 2.763 0 0 1 2.414 3.011l.001-.01-2.415 9.69c.213.049.394.106.568.174l-.028-.01-.54-.135-3.39 13.5a1.879 1.879 0 0 1-2.383 1.226l.013.004-3.765-.93L24.525 63l6.735 1.665 3.69.96-2.145 8.595 5.175 1.29 2.115-8.505c1.41.375 2.775.735 4.125 1.065l-2.115 8.475 5.175 1.29 2.13-8.58c8.835 1.665 15.465.99 18.255-6.99 2.25-6.42-.105-10.125-4.755-12.54 3.39-.72 5.925-2.955 6.615-7.545ZM57.69 58.755c-1.59 6.435-12.405 3-15.915 2.085L44.61 49.5c3.51.825 14.76 2.565 13.08 9.255Zm1.605-16.665c-1.5 5.85-10.5 2.865-13.38 2.145l2.58-10.32c2.91.72 12.315 2.085 10.8 8.175Z" fill="#fff"></path></svg></span> */}
                        </div>
                        <button type='button' className='number-btn'>½</button>
                        <button type='button' className='number-btn'>2x</button>
                    </div>
                  </div>
                  <div className={toggleState === 1 ? "bets-tab active" : "bets-tab"}>
                      <div className="latest-bets-box">
                          <div className='bet-input'>
                              <label className='form-label bet-input-top'>
                                  <span>Profit on Win</span>
                                  <span>$0.00</span>
                              </label>
                              <div className='bet-input-box bet-amount-input'>
                                  <div className='form-group'>
                                      <input type='number' className='form-control' placeholder='0.00' min={1.0} max={10000}></input>
                                      {/* <span><svg fill="none" viewBox="0 0 96 96" className="svg-icon "> <title></title> <path d="M95.895 48.105C95.895 74.557 74.451 96 48 96 21.548 96 .105 74.556.105 48.105.105 21.653 21.548.21 48 .21c26.451 0 47.895 21.443 47.895 47.895Z" fill="#F7931A"></path><path d="M69.525 42.18c.93-6.27-3.84-9.645-10.38-11.895l2.115-8.505-5.16-1.29-2.1 8.28c-1.365-.345-2.76-.66-4.14-.975l2.1-8.295-5.175-1.29-2.115 8.49c-1.125-.255-2.235-.51-3.3-.78l-7.14-1.785-1.365 5.52s3.84.885 3.75.93a2.763 2.763 0 0 1 2.414 3.011l.001-.01-2.415 9.69c.213.049.394.106.568.174l-.028-.01-.54-.135-3.39 13.5a1.879 1.879 0 0 1-2.383 1.226l.013.004-3.765-.93L24.525 63l6.735 1.665 3.69.96-2.145 8.595 5.175 1.29 2.115-8.505c1.41.375 2.775.735 4.125 1.065l-2.115 8.475 5.175 1.29 2.13-8.58c8.835 1.665 15.465.99 18.255-6.99 2.25-6.42-.105-10.125-4.755-12.54 3.39-.72 5.925-2.955 6.615-7.545ZM57.69 58.755c-1.59 6.435-12.405 3-15.915 2.085L44.61 49.5c3.51.825 14.76 2.565 13.08 9.255Zm1.605-16.665c-1.5 5.85-10.5 2.865-13.38 2.145l2.58-10.32c2.91.72 12.315 2.085 10.8 8.175Z" fill="#fff"></path></svg></span> */}
                                  </div>
                              </div>
                          </div>
                          <div className='bet-input'>
                            <div className="form-group"><button type="submit" className="anchor-button w-full">Sign In </button></div>
                          </div>
                          
                      </div>
                  </div>
                  <div className={toggleState === 2 ? "bets-tab active" : "bets-tab"}>
                      <div className="latest-bets-box">
                          
                      </div>
                  </div>
              </div>
        </div>
    </>
  )
}