import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { redirect } from "next/dist/server/api-utils";
import toast, { Toaster } from 'react-hot-toast';


const AccountModal = ({ isOpen, onClose ,userdata ,user,logout,gotowithdrawal}) => {

  const shareOnWhatsApp = () => {
    const text = `Hii Friends,\n Play and Earn Money with me on Money Monkey.\n Sign Up with my referral_code : ${userdata.referral_code} . \n Link : www.moneymonkey.online`
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Referral code Copied", { position: "top-right" })
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        toast.error("Failed to copy text", { position: "top-right" })

      });
  };

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
                    {/* <Image width={40} height={40} className="w-full" src={'/assets/images/user.png'} alt=""></Image> */}
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 4234.344 3916.094" viewBox="0 0 4234.344 3916.094" id="monkey"><circle cx="554.598" cy="752.335" r="546.33" fill="#843c28"></circle><circle cx="554.598" cy="752.335" r="341.477" fill="#af6e5a"></circle><circle cx="3671.475" cy="752.335" r="546.33" fill="#843c28"></circle><circle cx="3671.475" cy="752.335" r="341.477" fill="#af6e5a"></circle><path fill="#843c28" d="M1863.249,12.355c141.137-14.142,363.393-28.643,617.508,33.081c0,0,99.711,21.334,186.946,57.322c524.91,216.556,894.606,732.855,894.606,1335.954v0.008c0,139.039,40.026,274.197,109.746,394.487c105.99,182.898,165.519,387.343,165.519,603.346c0,779.128-770.246,1410.733-1720.402,1410.733c-950.158,0-1720.404-631.613-1720.404-1410.733c0-216.003,59.529-420.448,165.529-603.346c69.709-120.29,109.738-255.448,109.738-394.487c0-689.695,483.517-1265.569,1129.809-1409.595L1863.249,12.355z"></path><path fill="#fff" d="M2117.172,3572.012c570.09,0,1032.238-369.72,1032.238-825.789c0-94.611-20.122-185.368-56.957-269.882c-53.417-122.556-35.231-263.216,50.581-365.733c109.448-130.76,165.892-307.305,136.103-496.949c-40.921-260.487-251.513-470.716-512.058-511.264c-199.097-30.988-383.639,33.064-515.846,153.661c-37.58,34.28-85.837,51.416-134.052,51.416c-48.249,0-96.505-17.136-134.085-51.416c-132.208-120.588-316.749-184.649-515.846-153.661c-260.545,40.549-471.137,250.778-512.058,511.265c-29.789,189.644,26.655,366.188,136.103,496.949c85.812,102.518,103.998,243.177,50.581,365.733c-36.836,84.513-56.957,175.271-56.957,269.882C1084.934,3202.292,1547.081,3572.012,2117.172,3572.012z"></path><path fill="#f4ba73" d="M643.767,850.492c-71.413-95.215-221.336-64.938-250.207,50.523l-155.976,623.93c-31.385,125.542-47.264,254.466-47.264,383.878v906.208h481.715V935.294C672.035,904.72,662.119,874.963,643.767,850.492z"></path><path fill="#843c28" d="M672.035,2677.406h-365.75c-105.197,0-193.564,79.096-205.184,183.648L0.858,3763.26c-9.056,81.528,54.757,152.833,136.789,152.833h465.572c76.012,0,137.633-61.621,137.633-137.633V2746.223C740.851,2708.213,710.045,2677.406,672.035,2677.406z"></path><path fill="#f4ba73" d="M3590.576,850.492c71.413-95.215,221.336-64.938,250.207,50.523l155.976,623.93c31.385,125.542,47.264,254.466,47.264,383.878v906.208h-481.715V935.294C3562.309,904.72,3572.225,874.963,3590.576,850.492z"></path><path fill="#843c28" d="M3562.309,2677.406h365.75c105.197,0,193.564,79.096,205.184,183.648l100.243,902.206c9.056,81.528-54.757,152.833-136.789,152.833h-465.572c-76.011,0-137.633-61.621-137.633-137.633V2746.223C3493.492,2708.213,3524.299,2677.406,3562.309,2677.406z"></path><path fill="#282d35" d="M2114.112,3296.75c-346.231,0-627.914-281.683-627.914-627.914c0-31.594,25.611-57.205,57.191-57.205H2684.82c31.594,0,57.205,25.612,57.205,57.205C2742.025,3015.067,2460.343,3296.75,2114.112,3296.75z"></path><linearGradient id="a" x1="1625.957" x2="2602.266" y1="3067.219" y2="3067.219" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e84d00"></stop><stop offset=".363" stop-color="#d43917"></stop><stop offset=".721" stop-color="#c62c27"></stop><stop offset="1" stop-color="#c1272d"></stop></linearGradient><path fill="url(#a)" d="M2114.112,2837.688c-184.912,0-357.918,80.082-488.155,225.618c115.215,142.289,291.234,233.444,488.155,233.444s372.939-91.154,488.155-233.444C2472.03,2917.77,2299.024,2837.688,2114.112,2837.688z"></path><ellipse cx="1976.578" cy="2196.875" fill="#282d35" rx="86.459" ry="136.452"></ellipse><ellipse cx="2241.225" cy="2196.875" fill="#282d35" rx="86.459" ry="136.452"></ellipse><circle cx="1385.407" cy="1708.661" r="196.011" fill="#282d35"></circle><circle cx="2821.807" cy="1708.661" r="197.573" fill="#282d35"></circle></svg>
                  </div>
                  <div className="user-name-box">
                    <div className="user-name">{userdata?.username}</div>
                    <div className="text-2xl text-black">{userdata?.phone}</div>
                  </div>
                  
                  <button className="anchor-button payment-btn d-flex align" onClick={shareOnWhatsApp}>
                    <span className="whatsapp-icon"><svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="_x36__stroke"><g id="WhatsApp"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"></rect><path clip-rule="evenodd" d="M46.114,32.509    c-1.241-2.972-2.182-3.085-4.062-3.161c-0.64-0.037-1.353-0.074-2.144-0.074c-2.446,0-5.003,0.715-6.546,2.295    c-1.88,1.919-6.545,6.396-6.545,15.576c0,9.181,6.695,18.06,7.598,19.303c0.941,1.24,13.053,20.354,31.86,28.144    c14.707,6.095,19.071,5.53,22.418,4.816c4.89-1.053,11.021-4.667,12.564-9.03c1.542-4.365,1.542-8.09,1.09-8.88    c-0.451-0.79-1.693-1.24-3.573-2.182c-1.88-0.941-11.021-5.456-12.751-6.058c-1.693-0.639-3.31-0.413-4.588,1.393    c-1.806,2.521-3.573,5.08-5.003,6.622c-1.128,1.204-2.972,1.355-4.514,0.715c-2.069-0.864-7.861-2.898-15.008-9.256    c-5.53-4.928-9.291-11.06-10.381-12.904c-1.091-1.881-0.113-2.973,0.752-3.988c0.941-1.167,1.843-1.994,2.783-3.086    c0.941-1.091,1.467-1.655,2.069-2.935c0.64-1.241,0.188-2.521-0.263-3.462C51.418,45.414,47.657,36.233,46.114,32.509z M63.981,0    C28.699,0,0,28.707,0,63.999c0,13.996,4.514,26.977,12.187,37.512L4.212,125.29l24.6-7.862C38.93,124.125,51.004,128,64.019,128    C99.301,128,128,99.291,128,64.001c0-35.292-28.699-63.999-63.981-63.999h-0.037V0z" fill="#67C15E" fill-rule="evenodd" id="WhatsApp_1_"></path></g></g></svg></span>
                    Invite Friends
                  </button>
                  <div className="text-black w-[80%] text-center mt-2"> <p className="text-sm">Invite your frineds with your referral_code and get 20 Rs. instant.</p></div>
                  <div className="mt-2">
                <button onClick={()=>copyTextToClipboard(userdata?.referral_code)} className="flex items-center justify-center w-auto h-8 px-3 py-1 text-xs bg-white border rounded-md cursor-pointer border-neutral-200/60 hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none text-neutral-500 hover:text-neutral-600 group">
        <span >{userdata?.referral_code}</span>
        <svg  className="w-4 h-4 ml-1.5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>                  
         </button>
                </div>
                </div>
               
                <div className="user-price-list d-grid">
                    {/* <div className="user-amount-card">
                      <p>From <span className="">Available <strong>100.00</strong></span></p>
                      <div className="gamemdheading">100.00</div>
                    </div> */}
                    <div className="user-amount-card">
                      <p>Friends:{userdata?.referral_friends} <span className="">Withdrawl Available : <strong>₹{user?.amount - userdata?.referral_friends*20}</strong></span></p>
                      <div className="gamemdheading">₹{user?.amount}</div>
                      <button type="button" className="edit-btn d-flex align cursor-pointer" onClick={gotowithdrawal}>
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
                    {/* <ul>
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
                       
                    </ul> */}
                    <div className="flex justify-center items-center mb-4 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={50}  height={50} id="shutdown"><path fill="#FFF" d="M32 3C15.984 3 3 15.984 3 32s12.984 29 29 29 29-12.984 29-29S48.016 3 32 3zm-2 9.48a1.98 1.98 0 0 1 1.98-1.98h.04A1.98 1.98 0 0 1 34 12.48v12.04a1.98 1.98 0 0 1-1.98 1.98h-.04A1.98 1.98 0 0 1 30 24.52V12.48zM32 51c-10.201 0-18.5-8.299-18.5-18.5 0-8.099 5.239-14.982 12.5-17.482v7.69c-3.292 2.025-5.5 5.651-5.5 9.792C20.5 38.841 25.659 44 32 44s11.5-5.159 11.5-11.5c0-4.141-2.208-7.767-5.5-9.792v-7.69c7.261 2.5 12.5 9.383 12.5 17.482C50.5 42.701 42.201 51 32 51z"></path><path fill="#F15439" d="M38 15.018v7.69c3.292 2.025 5.5 5.651 5.5 9.792C43.5 38.841 38.341 44 32 44s-11.5-5.159-11.5-11.5c0-4.141 2.208-7.767 5.5-9.792v-7.69c-7.261 2.5-12.5 9.383-12.5 17.482C13.5 42.701 21.799 51 32 51s18.5-8.299 18.5-18.5c0-8.099-5.239-14.982-12.5-17.482z"></path><path fill="#399BB9" d="M31.98 26.5h.04A1.98 1.98 0 0 0 34 24.52V12.48a1.98 1.98 0 0 0-1.98-1.98h-.04A1.98 1.98 0 0 0 30 12.48v12.04a1.98 1.98 0 0 0 1.98 1.98z"></path><path d="M32 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30zm0-58C16.561 4 4 16.561 4 32s12.561 28 28 28 28-12.561 28-28S47.439 4 32 4z"></path><path d="M32 52c-10.752 0-19.5-8.748-19.5-19.5 0-8.31 5.295-15.715 13.175-18.427L27 13.617v9.649l-.477.293c-3.146 1.936-5.023 5.277-5.023 8.94C21.5 38.29 26.21 43 32 43s10.5-4.71 10.5-10.5c0-3.663-1.878-7.005-5.023-8.94L37 23.267v-9.649l1.325.456C46.205 16.785 51.5 24.19 51.5 32.5 51.5 43.252 42.752 52 32 52zm-7-35.52c-6.335 2.77-10.5 9.039-10.5 16.02C14.5 42.149 22.351 50 32 50s17.5-7.851 17.5-17.5c0-6.98-4.165-13.25-10.5-16.02v5.683c3.455 2.339 5.5 6.162 5.5 10.337C44.5 39.393 38.893 45 32 45s-12.5-5.607-12.5-12.5c0-4.175 2.045-7.998 5.5-10.337V16.48z"></path><path d="M32.02 27.5h-.04A2.983 2.983 0 0 1 29 24.52V12.48a2.983 2.983 0 0 1 2.98-2.98c1.683 0 3.02 1.337 3.02 2.98v12.04a2.984 2.984 0 0 1-2.98 2.98zm0-16c-.58 0-1.02.439-1.02.98v12.04c0 .541.439.98.98.98h.039a.98.98 0 0 0 .98-.98V12.48a.979.979 0 0 0-.979-.98z"></path></svg>
                   </div>
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