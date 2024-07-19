import Link from "next/link";
import Image from "next/image";
import React from 'react';
const WinModal = ({resultdata,resultFilteritems}:any) => {
    console.log("resultdata",resultFilteritems)
    const totalAmount = resultFilteritems?.reduce((total:any, item:any) => total + item.amount, 0);

    return (
      <>
        <div className="game-popup win-popup">
          <div className="game-popup-overlay"></div>
          <div className="game-popup-wrapper bg-gradient-to-r from-green-500 to-green-800">
            {/* <button className="game-popup-close" onClick={onClose}></button> */}
            <div className="game-popup-body">
                <div className="gamelgheading">Congratulations</div>
                <div className="win-number d-flex align">
                  <div className="gamexsheading">Lottery results</div>
                  <div className="win-num-list d-flex">
                    <div className="num-text">{resultdata?.smallestColor}</div>
                    <div className="num-text num">{resultdata?.smallestNumber}</div>
                    {/* <div className="num-text">Small</div> */}
                  </div>
                </div>
                {resultFilteritems?.length>0 && (
                <div className="win-price">
                    <div className="gamesmheading">Bonus</div>
                    <div className="gamemdheading">₹ {totalAmount}</div>
                    <p>Period Win 1 minute 20240626011264</p>
                </div>
                )}
                <p>6 Seconds auto close</p>
            </div>
          </div>
        </div>
      </>
    );
};
export default WinModal;