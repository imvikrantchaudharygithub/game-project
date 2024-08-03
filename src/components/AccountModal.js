import Link from "next/link";
import Image from "next/image";
import React from 'react';
const AccountModal = ({ isOpen, onClose ,userdata ,logout}) => {
      
    if (!isOpen) return null;
    return (
      <>
        <div className="game-popup accont-popup">
          <div className="game-popup-overlay" onClick={onClose}></div>
          <div className="game-popup-wrapper">
            <button className="game-popup-close" onClick={onClose}></button>
            <div className="game-popup-body">
                <div className="user-right-box">
                  <div className="user-img">
                    <Image width={40} height={40} className="w-full" src={'/assets/images/user.png'} alt=""></Image>
                  </div>
                  <div className="user-name-box">
                    <div className="user-name">{userdata?.username}</div>
                  </div>
                  <a class="anchor-button payment-btn d-flex align" href="#">
                    <span class="whatsapp-icon"><svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="_x36__stroke"><g id="WhatsApp"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"></rect><path clip-rule="evenodd" d="M46.114,32.509    c-1.241-2.972-2.182-3.085-4.062-3.161c-0.64-0.037-1.353-0.074-2.144-0.074c-2.446,0-5.003,0.715-6.546,2.295    c-1.88,1.919-6.545,6.396-6.545,15.576c0,9.181,6.695,18.06,7.598,19.303c0.941,1.24,13.053,20.354,31.86,28.144    c14.707,6.095,19.071,5.53,22.418,4.816c4.89-1.053,11.021-4.667,12.564-9.03c1.542-4.365,1.542-8.09,1.09-8.88    c-0.451-0.79-1.693-1.24-3.573-2.182c-1.88-0.941-11.021-5.456-12.751-6.058c-1.693-0.639-3.31-0.413-4.588,1.393    c-1.806,2.521-3.573,5.08-5.003,6.622c-1.128,1.204-2.972,1.355-4.514,0.715c-2.069-0.864-7.861-2.898-15.008-9.256    c-5.53-4.928-9.291-11.06-10.381-12.904c-1.091-1.881-0.113-2.973,0.752-3.988c0.941-1.167,1.843-1.994,2.783-3.086    c0.941-1.091,1.467-1.655,2.069-2.935c0.64-1.241,0.188-2.521-0.263-3.462C51.418,45.414,47.657,36.233,46.114,32.509z M63.981,0    C28.699,0,0,28.707,0,63.999c0,13.996,4.514,26.977,12.187,37.512L4.212,125.29l24.6-7.862C38.93,124.125,51.004,128,64.019,128    C99.301,128,128,99.291,128,64.001c0-35.292-28.699-63.999-63.981-63.999h-0.037V0z" fill="#67C15E" fill-rule="evenodd" id="WhatsApp_1_"></path></g></g></svg></span>
                    Invite Friends
                  </a>
                </div>
                <div className="user-price-list d-grid">
                    <div className="user-amount-card">
                      <p>From <span className="">Available <strong>100.00</strong></span></p>
                      <div className="gamemdheading">100.00</div>
                    </div>
                    <div className="user-amount-card">
                      <p>From <span className="">Available <strong>100.00</strong></span></p>
                      <div className="gamemdheading">100.00</div>
                      <button type="button" className="edit-btn d-flex align">
                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 1L6.5 6L1 1" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </button>
                    </div>
                </div>
                {/* <div className="user-amount d-flex align">
                    <div className="gamexxsheading">Amount</div>
                    <p>{userdata?.balance}</p>
                </div> */}
                <div className="account-list">
                    {/* <div className="gamexsheading">Account</div> */}
                    <ul>
                        <li>
                            <Link href='#' className="d-flex align">
                                <svg class="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                Personal Information
                            </Link> 
                        </li>
                        <li>
                            <Link href='#' className="d-flex align">
                                <svg className="fill" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M90,30H84V12a5.9966,5.9966,0,0,0-6-6H18A18.02,18.02,0,0,0,0,24V72A18.02,18.02,0,0,0,18,90H90a5.9966,5.9966,0,0,0,6-6V36A5.9966,5.9966,0,0,0,90,30ZM18,18H72V30H18a6,6,0,0,1,0-12Zm0,60a6.0078,6.0078,0,0,1-6-6V40.8948A17.7918,17.7918,0,0,0,18,42H84V78Z"/></svg>
                                Payment Settings
                            </Link> 
                        </li>
                        {/* <li>
                            <Link href='#' className="d-flex align">
                                <svg class="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                Resume
                            </Link> 
                        </li> */}
                    </ul>
                    <button onClick={logout} className="anchor-button">
                        Log Out
                    </button>
                </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default AccountModal;