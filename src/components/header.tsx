import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AccountModal from '../components/AccountModal';
export default function Header() {
  const [refeActive, setRefeActive] = useState(false);
  const refeToggle = () => {
    setRefeActive(!refeActive);
  };
  const [userActive, setUserActive] = useState(false);
  const userToggle = () => {
    setUserActive(!userActive);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSigninPopup, setIsSigninPopup] = useState(true);
  const [isSignupPopup, setIsSignupPopup] = useState(false);
  const [isResetPopup, setIsResetPopup] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  
  const signInPopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setIsSigninPopup(true);
    setIsSignupPopup(false);
  };
  const signUPPopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setIsSignupPopup(true);
    setIsSigninPopup(false);
  };
  const signinPopup = () => {
    setIsSigninPopup(true);
    setIsResetPopup(false);
    setIsSignupPopup(false);
  };
  const signupPopup = () => {
    setIsSignupPopup(true);
    setIsResetPopup(false);
    setIsSigninPopup(false);
  };
  const resetPopup = () => {
    setIsResetPopup(true);
    setIsSigninPopup(false);
    setIsSignupPopup(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
      <>
        <section className="header">
          <div className="container">
            <div className="header-main d-flex align">
              <div className="header-logo">
                <Link href='#'>
                  <Image width={942} height={248} className="w-full" src={'/assets/images/header-logo.png'} alt=""></Image>
                </Link>
              </div>
              <div className="header-menu">
                <ul className="menu">
                  <li>
                    <Link href='#'>
                      Casino
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href='#'>
                          Casino
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href='#'>
                      Casino
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      Casino
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      Casino
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-right d-flex align">
                <div className="header-search">
                  <button className="search-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M18.9999 19L14.6499 14.65" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
                <button className="anchor-button" onClick={signInPopup}>Sign in</button>
                <button className="anchor-button" onClick={signUPPopup}>Sign up</button>
                <div className={userActive ? 'user-right-box active' : 'user-right-box'}>
                  <div className="user-img">
                    <Image width={40} height={40} className="w-full" src={'/assets/images/user.png'} alt=""></Image>
                  </div>
                  <div className="user-name-box">
                    <span className="profile-dropdowen" onClick={userToggle}>
                      <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L6.5 6L1 1" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>

                    <div className="user-name">Ashish Sharma</div>
                    {/* <div className="user-designation">Sales Representative</div> */}
                  </div>

                  <div className="user-dropdowen">
                    <ul>
                      <li>
                        <Link href="#" onClick={openModal}>Account</Link>
                      </li>
                      <li>
                        <Link href="#">Log out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="amount-tag">
                  <div className="amount-icon">
                    <Image width={48} height={48} className="icon" src={'/assets/images/icons/amount-icon.png'} alt=""></Image>
                  </div>
                  <div className="amountnum">
                    3000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {isPopupVisible && (
        <div className="game-popup login-popup">
          <div className="game-popup-overlay" onClick={togglePopup}></div>
          <div className="game-popup-wrapper">
            <button className="game-popup-close" onClick={togglePopup}></button>
            <div className="game-popup-body">
                {isSigninPopup && (
                <div className="game-signin">
                  <div className="gamexxsheading">Sign In</div>
                  <div className="form-box">
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"></input>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Login Password"></input>
                      </div>
                      <div className="forgot-btn" onClick={resetPopup}>Forgot your password?</div>
                      <div className="form-group">
                        <button type="submit" className="anchor-button">Sign In</button>
                      </div>
                    </form>
                    <div className="create-txt">
                      <p>New to bc.ai?</p>
                      <div className="create-btn" onClick={signupPopup}>Create account</div>
                    </div>
                  </div>
                </div>
                )}
                {isResetPopup && (
                <div className="game-signin">
                  <div className="gamexxsheading">Reset Password</div>
                  <div className="form-box">
                    <form>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Login Password"></input>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="anchor-button">Reset Password</button>
                      </div>
                    </form>
                    <div className="create-txt">
                      <p>Already have an account?</p>
                      <div className="create-btn" onClick={signinPopup}>Sign in</div>
                    </div>
                  </div>
                </div>
                )}
                {isSignupPopup && (
                <div className="game-signin">
                  <div className="gamexxsheading">Reset Password</div>
                  <div className="form-box">
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="User Name"></input>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"></input>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Login Password"></input>
                      </div>
                      <div className={refeActive ? 'form-group refer-title active' : 'form-group refer-title'}>
                        <p onClick={refeToggle}>Enter Referral/Promo Code <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L6.5 6L1 1" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></p>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Referral/Promo Code (Optional)"></input>
                        </div>
                      </div>
                      <div className="form-group checkbox">
                        <input type="checkbox" id="agree1" name="agree1" value="Bike"></input>
                        <label htmlFor="agree1"> I agree to the i am at least 18 years old</label>
                      </div>
                      <div className="form-group checkbox">
                        <input type="checkbox" id="agree2" name="agree2" value="Bike"></input>
                        <label htmlFor="agree2"> I agree to receive marketing promotions from bc.ai.</label>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="anchor-button">Sign Up</button>
                      </div>
                    </form>
                    <div className="create-txt">
                      <p>Already have an account?</p>
                      <div className="create-btn" onClick={signinPopup}>Sign in</div>
                    </div>
                  </div>
                </div>
                )}
                <div className="other-sign-wrap">
                  <p>Log in directly with</p>
                  <ul className="login-list d-flex align">
                    <li>
                      <Link href='#'>
                        <svg width="12" height="12" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z"></path><path d="M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <svg width="12" height="12" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z"></path><path d="M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z"></path></svg>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        )}
        <AccountModal isOpen={isModalOpen} onClose={closeModal}></AccountModal>
      </>
    );
}