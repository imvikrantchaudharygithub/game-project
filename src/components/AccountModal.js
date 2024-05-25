import Link from "next/link";
import Image from "next/image";
import React from 'react';
const AccountModal = ({ isOpen, onClose }) => {
      
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
                    <div className="user-name">Ashish Sharma</div>
                  </div>
                </div>
                <div className="user-amount d-flex align">
                    <div className="gamexxsheading">Amount</div>
                    <p>2,000,00,00</p>
                </div>
                <div className="account-list">
                    <div className="gamexsheading">Account</div>
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
                </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default AccountModal;