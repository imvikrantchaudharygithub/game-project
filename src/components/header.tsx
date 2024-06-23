import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, } from "react";
import AccountModal from '../components/AccountModal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { apipost,get } from "../pages/services/apiService";
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setToken,clearToken } from '../slices/tokenSlice';
import { getToken ,setToken as setLocaltoken ,clearTokenlocal} from "../pages/services/tokenservice";
import { setUser, clearUser } from '../slices/userSlice';

import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function Header() {

  const dispatch = useAppDispatch();
  const isTokenSet = useAppSelector((state:any) => state.token.isTokenSet);
  const user = useAppSelector((state:any) => state.user);

  const router = useRouter();
  useEffect(() => {
      const token = getToken()
      if (token && !isTokenSet) {
        dispatch(setToken(token));
      }
      console.log("mytoken",isTokenSet,token)
    }, [dispatch, isTokenSet]);
    const [loader, setloader] = useState(false)
  
  const [refeActive, setRefeActive] = useState(false);
  const refeToggle = () => {
    setRefeActive(!refeActive);
  };
  const [userActive, setUserActive] = useState(false);
  const userToggle = () => {
    setUserActive(!userActive);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSigninPopup, setIsSigninPopup] = useState(0);
  // const [isSignupPopup, setIsSignupPopup] = useState(0);
  // const [isResetPopup, setIsResetPopup] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(false);
  };
  const signUPPopup = () => {
    setIsPopupVisible(true);
    setIsSigninPopup(3)
  };
  const signinPopup = () => {
    setIsPopupVisible(true);
    setIsSigninPopup(1)
  };
  // const signupPopup = () => {
  //   setIsSignupPopup(true);
  //   setIsResetPopup(false);
  //   setIsSigninPopup(false);
  // };
  const resetPopup = () => {
    setIsPopupVisible(true);
    setIsSigninPopup(2)
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  // const [accountActive, setAccountMenuActive] = useState(false);
  // const accountMenu = () => {
  //   setAccountMenuActive(!accountActive);
  // };
  const [userData, setUserData] = useState();

  useEffect(() => {
      if(isTokenSet){
      getuserData()
      console.log("userState",user)
      }
      // console.log("userid",id)
     

  }, [isTokenSet]);

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
  // const setEditvalue =(data:any)=>{
  //     formik.setFieldValue('name',data?.username)
  //     formik.setFieldValue('email',data?.email)
  //     formik.setFieldValue('phone',data?.phone)
  // }


  const signin = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
    }),
    onSubmit: async(values: any) => {
        setloader(true)
        const payload ={
            email:values.email,
            password:values.password
        }
        try{
            await apipost("/signin",payload).then((res:any)=>{
                console.log("user-signin", res.data)
                setloader(false)
                signin.resetForm()
                toast.success("Sign in Succesfull",{position:"top-right"})
                setLocaltoken(res?.data?.token)
                dispatch(setToken(res?.data?.token));
                togglePopup()
                // router.push(`/account`);
            }).catch((err:any)=>{
                toast.error(err.response.data.message,{position:"top-right"})
             setloader(false)
             console.log("signin api err",err)
            })
         }catch(err){
            setloader(false)
             console.log("user-sigin", err)
         }
    },
});
const singup = useFormik ({
  initialValues: {
      name: '',
      email: '',
      phone: '',
      password: ''
  },
  validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
  }),
  onSubmit: async(values: any) => {
      setloader(true)
      console.log("form values", values)
      const payload ={
          username:values.name,
          email:values.email,
          phone:values.phone,
          password:values.password
      }
      try{
     await apipost("/signup",payload).then((res:any)=>{
         console.log("user-signup", res.data)
         setloader(false)
         singup.resetForm()
         setLocaltoken(res?.data?.token)
         dispatch(setToken(res?.data?.token));
         togglePopup()
     }).catch((err:any)=>{
     
      setloader(false)
      console.log("sign api err",err)
     })
  }catch(err){
      console.log("user-signup", err)
  }
  },
});
const logout=()=>{
  dispatch(clearToken());
  clearTokenlocal()
}
  
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
              <div className={menuActive ? 'header-menu active' : 'header-menu'}>
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
               {!isTokenSet && ( <button className="anchor-button" onClick={signinPopup}>Sign in</button>)}
               {!isTokenSet && ( <button className="anchor-button" onClick={signUPPopup}>Sign up</button>)}
               {isTokenSet && ( <div className={userActive ? 'user-right-box active' : 'user-right-box'} onClick={openModal}>
                  <div className="user-img">
                    <Image width={40} height={40} className="w-full" src={'/assets/images/user.png'} alt=""></Image>
                  </div>
                
                      <div className="user-name-box">
                        {/* onClick={userToggle} */}
                    <span className="profile-dropdowen">
                      <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L6.5 6L1 1" stroke="#474A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>

                    <div className="user-name">{userData?.username}</div>
                    {/* <div className="user-designation">Sales Representative</div> */}
                  </div>

                  <div className="user-dropdowen">
                    <ul>
                      <li>
                        <Link href="#" >Account</Link>
                      </li>
                      <li>
                        <button onClick={logout} >Log out</button>
                      </li>
                    </ul>
                  </div>
                </div>)}
                {isTokenSet && ( 
                <div className="amount-tag">
                  <div className="amount-icon">
                    <Image width={48} height={48} className="icon" src={'/assets/images/icons/amount-icon.png'} alt=""></Image>
                  </div>
                  <div className="amountnum">
                  {userData?.balance}
                  </div>
                </div>
              )}
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
                {isSigninPopup ==1 && (
                <div className="game-signin">
                  <div className="gamexxsheading">Sign In</div>
                  <div className="form-box">
                    <form onSubmit={signin.handleSubmit}>
                      <div className="form-group">
                        <input type="email" name="email" value={signin.values.email} onChange={signin.handleChange} className="form-control" placeholder="Email"></input>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" value={signin.values.password} onChange={signin.handleChange} className="form-control" placeholder="Login Password"></input>
                      </div>
                      <div className="forgot-btn" onClick={resetPopup}>Forgot your password?</div>
                      <div className="form-group">
                        <button type="submit" className="anchor-button" disabled={loader}>{loader? "Loading....":"Sign In"} </button>
                      </div>
                    </form>
                    <div className="create-txt">
                      <p>New to bc.ai?</p>
                      <div className="create-btn" onClick={signUPPopup}>Create account</div>
                    </div>
                  </div>
                </div>
                )}
                {isSigninPopup == 2 && (
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
                {isSigninPopup == 3 && (
                <div className="game-signin">
                  <div className="gamexxsheading">Sign Up</div>
                  <div className="form-box">
                    <form onSubmit={singup.handleSubmit}>
                      <div className="form-group">
                        <input type="text" name="name" value={singup.values.name} onChange={singup.handleChange}  className="form-control" placeholder="User Name"></input>
                      </div>
                      <div className="form-group">
                        <input type="phone" name="phone" value={singup.values.phone} onChange={singup.handleChange}  className="form-control" placeholder="Phone"></input>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" value={singup.values.email} onChange={singup.handleChange} className="form-control" placeholder="Email"></input>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" value={singup.values.password} onChange={singup.handleChange}  className="form-control" placeholder="Login Password"></input>
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
                      <div className="create-btn" onClick={signinPopup}> Sign in</div>
                      
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
        <AccountModal isOpen={isModalOpen} onClose={closeModal} userdata={userData}></AccountModal>
        <section className="mobile-sticky-links">
          <ul>
            <li>
              <Link href='javascript:void(0)' className={menuActive ? 'toggle-menu active' : 'toggle-menu'} onClick={toggleMenu}>
                <div className="icon open-icon">
                  <svg _ngcontent-ng-c3384484568="" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3384484568="" d="M1 7H19" stroke="#58595B" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3384484568="" d="M1 1H19" stroke="#58595B" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3384484568="" d="M1 13H19" stroke="#58595B" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className="icon close-icon">
                  <svg _ngcontent-ng-c3384484568="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3384484568="" d="M20.9615 2.86865L20.9614 2.86858L20.9531 2.87687L13.2675 10.5892L12.8105 11.0479L13.2674 11.5067L20.9416 19.2127C21.1616 19.4534 21.2816 19.7701 21.2758 20.0977C21.27 20.4286 21.1363 20.7439 20.9036 20.9773C20.671 21.2107 20.3576 21.344 20.0295 21.3498C19.7049 21.3555 19.3902 21.236 19.1505 21.0156L11.4713 13.3097L11.0111 12.8479L10.5507 13.3095L2.86624 21.0129C2.62651 21.2334 2.31181 21.353 1.98711 21.3472C1.65903 21.3414 1.3456 21.2081 1.11297 20.9748C0.880274 20.7413 0.74663 20.426 0.74081 20.0951C0.73505 19.7676 0.854928 19.4509 1.07487 19.2103L8.75412 11.5069L9.21135 11.0482L8.75435 10.5893L1.07129 2.87446L1.06309 2.86622L1.05459 2.85828C0.929846 2.74168 0.829673 2.60095 0.760152 2.44443C0.690629 2.28791 0.653214 2.11886 0.650198 1.9474C0.647182 1.77593 0.678629 1.60566 0.742613 1.44675C0.806593 1.28785 0.901769 1.14365 1.02236 1.02268C1.14294 0.901719 1.28646 0.806474 1.4443 0.742521C1.60213 0.678569 1.77112 0.647188 1.94119 0.650198C2.11127 0.653208 2.27906 0.69055 2.43457 0.760057C2.59008 0.829565 2.73018 0.929844 2.84645 1.05502L2.85426 1.06342L2.86235 1.07154L10.5505 8.78386L11.0108 9.24557L11.4711 8.78394L19.1619 1.07162L19.1619 1.07169L19.1696 1.0637C19.2868 0.94208 19.4269 0.845209 19.5816 0.778636C19.7363 0.712065 19.9026 0.677094 20.0708 0.675708C20.2389 0.674322 20.4058 0.706548 20.5615 0.770556C20.7173 0.834568 20.8589 0.929111 20.9781 1.04877C21.0972 1.16843 21.1916 1.31082 21.2555 1.46768C21.3194 1.62454 21.3515 1.79267 21.3499 1.96223C21.3484 2.13179 21.3132 2.29929 21.2465 2.45494C21.1797 2.61059 21.0828 2.75121 20.9615 2.86865Z" fill="#F04E30" stroke="white" stroke-width="1.3"></path></svg>
                </div>
                Menu
              </Link>
            </li>
            <li>
              <Link href='javascript:void(0)'>
                <div className="icon">
                  <svg _ngcontent-ng-c3384484568="" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3384484568="" d="M10.3344 19.6675C15.4896 19.6675 19.6688 15.4884 19.6688 10.3332C19.6688 5.17793 15.4896 0.998779 10.3344 0.998779C5.17915 0.998779 1 5.17793 1 10.3332C1 15.4884 5.17915 19.6675 10.3344 19.6675Z" stroke="#7D7D7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c3384484568="" d="M22.0014 22.0014L16.9258 16.9258" stroke="#7D7D7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                Search
              </Link>
            </li>
            <li>
              <Link href='javascript:void(0)' onClick={userToggle}>
                <div className="icon">
                  <svg className="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                Account
              </Link>
            </li>
            <li>
              <Link href='javascript:void(0)' className="account-price">
                <div className="icon">
                  <Image width={48} height={48} src={'/assets/images/icons/amount-icon.png'} alt=""></Image>
                </div>
               {userData?.balance}
              </Link>
            </li>
          </ul>
        </section>
      </>
    );
}