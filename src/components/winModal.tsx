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
                <div className="congratulation-img">
                  <Image width={500} height={500} className="w-full" src={'/assets/images/congratulations-bg.png'} alt=""></Image>
                </div>
                
                <div className="win-number d-flex align">
                  <div className="gamexsheading">Lottery results</div>
                  <div className="win-num-list d-flex">
                    <div className={`num-text text-black text-2xl font-bold ${resultdata?.smallestColor === 'Green' ? 'bg-[#3bc016]' :
                                                                               resultdata?.smallestColor  === 'Violet' ? 'bg-[#814cf4]' :
                                                                               resultdata?.smallestColor  === 'Red' ? 'bg-[#f42525]' :
                                                                                        'bg-white'}`}>{resultdata?.smallestColor}</div>
                    <div className="num-text num bg-white text-black text-4xl font-bold">{resultdata?.smallestNumber}</div>
                    {/* <div className="num-text">Small</div> */}
                  </div>
                </div>
                {resultFilteritems?.length>0 && (
                <div className="win-price">
                    <div className="gamesmheading">Bonus</div>
                    <div className="gamemdheading">₹ {totalAmount}</div>
                    <p>Period Win 30 sec</p>
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