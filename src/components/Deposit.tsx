import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from "../pages/services/apiService";
import apiService from "../pages/services/apiService";
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';


export default function Deposit({userData,useralldata,refreshuserdata}:any) {
    const dateformate = (date: any) => {
        return moment(date).format('LL LT')
      }
    const [toggleState, setToggleState] = useState(1);
    const [bankDetail, setBankDetail] = useState<any>()
    const [selectedBank, setSelectedBank] = useState<any>()

    const [imagePreview, setImagePreview] = useState<string | null>(null); 
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        getBanks()
    }, []);

    
    
    const getBanks = async () => {
        await api.get("/getbankaccounts").then((res: any) => {
            console.log("getbankaccounts", res.data[0])
            setBankDetail(res?.data)
            getselectedbank(res?.data[0]?._id)
            // getselectedbank(bankDetail[0]?._id)
        }).catch((err: any) => {
            console.log("getbankaccounts  api err", err)
        })
    }
    const getselectedbank =async (id:string) => {
        console.log("selected id",id)
        const data = await bankDetail?.find((item: any) => item._id === id);
        console.log("selected bank data", data)
        setSelectedBank(data)
    }
    useEffect(() => {
        if(bankDetail){
        getselectedbank(bankDetail[0]?._id)
        }
    }, [bankDetail]);

    const deposit = useFormik({
        initialValues: {
            transactionNumber: '',
            amount: '',
            couponcode:'',
            image: null,  // Add image field to initial values
        },
        validationSchema: Yup.object({
            transactionNumber: Yup.number().required('Required'),
            amount: Yup.string().required('Required'),
            image: Yup.mixed().required('Required'),  // Validate image field
        }),
        onSubmit: async (values) => {
            setLoader(true);
            const formData = new FormData();  // Create a FormData object
            formData.append('transactionNumber', values.transactionNumber);
            formData.append('amount', values.amount);
            formData.append('image', values.image || '');  // Append image to FormData
            formData.append('userId', userData?.id);
            formData.append('couponCode', values.couponcode);

            try {
                const res = await apiService.post('/add-transaction', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('add-transaction', res.data);
                setLoader(false);
                if (res.data) {
                deposit.resetForm();
                setImagePreview(null); // Reset image preview
                refreshuserdata()
                toast.success('Deposit Request sent Successfully', { position: 'top-right' });
                // router.push(`/account`);
                }
            } catch (err:any) {
                toast.error(err.response.data.message, { position: 'top-right' });
                setLoader(false);
                console.log('deposit api error', err);
            }
        },
    });
    const copyText = async (text:any)=>{
      await navigator.clipboard.writeText(text)
      toast.success('Copied', { position: 'top-right' });

    }

    return (
        <>
            <section className="deposit-box">
                <div className="deposit-tab custom-tab d-flex">
                    {bankDetail?.map((item: any) => (
                        <div key={item?._id} className={selectedBank?._id === item?._id ? "tabs hovertime active" : "tabs hovertime"} onClick={() => getselectedbank(item?._id)}><span className="account-icon"><svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none" /><path d="M8 20v14h6V20H8zm12 0v14h6V20h-6zM4 44h38v-6H4v6zm28-24v14h6V20h-6zM23 2L4 12v4h38v-4L23 2z" /></svg></span> Account</div>
                    ))}
                </div>
                <div className="latest-content">
                    <div className="content-tab active">
                        <div className="deposit-main d-flex">
                            <div className="col">
                                {selectedBank ? (
                                <div className="deposit-card bank-account">
                                    <div className="gamemdheading">Bank Account</div>
                                    {selectedBank?.imagePath && (
                                    <div className="flex gap-3 border-b border-stroke dark:border-strokedark mb-2">
                                                    <img src={`http://localhost:8000/${selectedBank?.imagePath}`} alt="Selected Image" style={{ height: 'auto' }} />

                                </div>
                                )}
                                    <ul>
                                    <li>
                                            <p><strong>UPI :</strong> {selectedBank?.upi}</p>
                                            <span className="copy-icon" onClick={()=>copyText(selectedBank?.upi)}>
                                                <svg className="feather feather-copy" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                            </span>
                                        </li>
                                        <li>
                                            <p><strong>Bank Account :</strong> {selectedBank?.bankname}</p>
                                            <span className="copy-icon" onClick={()=>copyText(selectedBank?.bankname)}>
                                                <svg className="feather feather-copy" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                            </span>
                                        </li>
                                        <li>
                                            <p><strong>A/C No :</strong> {selectedBank?.accountNumber}</p>
                                            <span className="copy-icon" onClick={()=>copyText(selectedBank?.accountNumber)}>
                                                <svg className="feather feather-copy" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                            </span>
                                        </li>
                                        <li>
                                            <p><strong>IFSC Code :</strong> {selectedBank?.ifscCode}</p>
                                            <span className="copy-icon" onClick={()=>copyText(selectedBank?.ifscCode)}>
                                                <svg className="feather feather-copy" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                            </span>
                                        </li>
                                        <li>
                                            <p><strong>Account Name :</strong> {selectedBank?.accountName}</p>
                                            <span className="copy-icon" onClick={()=>copyText(selectedBank?.accountName)}>
                                                <svg className="feather feather-copy" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                            </span>
                                        </li>
                                        <li>
                                            <p><strong>Min Amount :</strong> 100</p>
                                        </li>
                                        <li>
                                            <p><strong>Max Amount :</strong> 100000</p>
                                        </li>
                                    </ul>
                                </div>
                                ) : 
                                (
                                <div className="flex justify-center items-center flex-col"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" id="left-button"><path fill="#000" d="M23.65 34.438c0-5.522 4.478-10 10-10h66.172c5.523 0 10 4.478 10 10v35.018c0 5.523-4.477 10-10 10H33.65c-5.522 0-10-4.477-10-10V34.438Z"></path><path fill="#fff" d="M18 27a8 8 0 0 1 8-8h70.172a8 8 0 0 1 8 8v39.017a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8V27Z"></path><path fill="#000" fill-rule="evenodd" d="M26 17h70.172c5.523 0 10 4.477 10 10v39.017c0 5.523-4.477 10-10 10H26c-5.523 0-10-4.477-10-10V27c0-5.523 4.477-10 10-10Zm0 2a8 8 0 0 0-8 8v39.017a8 8 0 0 0 8 8h70.172a8 8 0 0 0 8-8V27a8 8 0 0 0-8-8H26Z" clip-rule="evenodd"></path><path fill="#000" d="M34.157 33.89a2 2 0 0 1 2-2h15.384a2 2 0 0 1 2 2v25.238a2 2 0 0 1-2 2H36.157a2 2 0 0 1-2-2V33.89Z"></path><path fill="#000" fill-rule="evenodd" d="M36.157 29.89h15.384a4 4 0 0 1 4 4v25.238a4 4 0 0 1-4 4H36.157a4 4 0 0 1-4-4V33.89a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v25.238a2 2 0 0 0 2 2h15.384a2 2 0 0 0 2-2V33.89a2 2 0 0 0-2-2H36.157Z" clip-rule="evenodd"></path><path fill="#fff" d="M68.631 33.89a2 2 0 0 1 2-2h15.384a2 2 0 0 1 2 2v25.238a2 2 0 0 1-2 2H70.63a2 2 0 0 1-2-2V33.89Z"></path><path fill="#000" fill-rule="evenodd" d="M70.631 29.89h15.384a4 4 0 0 1 4 4v25.238a4 4 0 0 1-4 4H70.63a4 4 0 0 1-4-4V33.89a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v25.238a2 2 0 0 0 2 2h15.384a2 2 0 0 0 2-2V33.89a2 2 0 0 0-2-2H70.63Z" clip-rule="evenodd"></path><path fill="#000" d="M50.42 105.721v-2.948c0-2.464 2.214-4.32 4.677-4.26 8.079.198 14.383-2.589 18.364-5.403 2.106-1.489 5.24-1.378 6.791.681l1.273 1.69c1.14 1.512 1.077 3.634-.28 4.955-10.103 9.843-21.378 10.096-27.908 8.955-1.751-.307-2.917-1.892-2.917-3.67Z"></path><path fill="#fff" d="M45.887 95.794c6.344 6.713 15.333 5.034 20.395 3.504 10.125-3.06 16.341-9.912 10.833-28.136-1.028-3.398-5.096-5.877-9.02-3.448a2.879 2.879 0 0 1-2.82.108c-3.334-1.742-5.889.084-7.307 1.643-.568.624-1.727.52-2.044-.263l-1.516-3.752-2.193-6.388c-1.147-3.796-4.826-6.828-8.622-5.68-3.797 1.147-3.533 6.592-2.086 11.377l6 18.115-4.944-2.649c-1.649-.883-5.628-2.166-8.36-.236-2.73 1.93-2.648 4.944-.617 7.093 2.03 2.148 8.24 4.415 12.301 8.712Z"></path><path fill="#000" fill-rule="evenodd" d="m43.507 78.462.524.28-4.423-13.354a1.723 1.723 0 0 1-.016-.05c-.76-2.514-1.266-5.366-.997-7.847.271-2.504 1.431-5.121 4.419-6.024 2.595-.785 5.096-.108 7.04 1.268 1.91 1.353 3.365 3.426 4.064 5.71l2.164 6.305 1.03 2.549c.765-.685 1.743-1.364 2.928-1.78 1.744-.614 3.793-.603 5.961.53.25.13.59.12.842-.036 2.542-1.573 5.245-1.59 7.473-.582a8.376 8.376 0 0 1 4.513 5.152c2.817 9.319 2.781 16.178.33 21.21-2.478 5.085-7.18 7.811-12.498 9.419-5.102 1.542-15.208 3.595-22.428-4.044-1.824-1.931-4.182-3.454-6.478-4.816-.37-.219-.745-.438-1.117-.655-.741-.433-1.469-.859-2.105-1.256-.946-.591-1.905-1.249-2.601-1.986-1.32-1.395-2.121-3.2-2.02-5.107.103-1.95 1.137-3.72 2.937-4.992 1.926-1.361 4.174-1.512 5.985-1.29 1.82.225 3.462.854 4.473 1.396ZM54.408 65.45l-2.193-6.388c-1.147-3.797-4.826-6.828-8.623-5.68-3.796 1.147-3.532 6.592-2.085 11.377l6 18.115-4.945-2.65c-1.648-.882-5.627-2.166-8.358-.235-2.732 1.93-2.65 4.944-.619 7.093.841.89 2.4 1.8 4.225 2.866 2.582 1.508 5.698 3.329 8.077 5.846 6.344 6.712 15.333 5.034 20.395 3.503 10.125-3.06 16.34-9.91 10.832-28.135-1.027-3.398-5.095-5.877-9.019-3.448a2.879 2.879 0 0 1-2.82.108c-3.334-1.742-5.889.083-7.307 1.642-.569.625-1.727.52-2.044-.262l-1.516-3.752Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M57.847 75.575a1 1 0 0 1 1.208.734l2.486 10.192a1 1 0 0 1-1.943.474l-2.486-10.192a1 1 0 0 1 .735-1.208zm10.02-1.23a1 1 0 0 1 1.074.92l.497 6.463a1 1 0 1 1-1.994.153l-.497-6.463a1 1 0 0 1 .92-1.073z" clip-rule="evenodd"></path></svg>
                                    <p className="text-center text-red-400">Select any bank</p>
                                    </div>
                                )
                                }
                            </div>
                            <div className="col">
                                <div className="deposit-card pay-form">
                                    <form onSubmit={deposit.handleSubmit}>
                                        <div className="form-group">
                                            <label className="form-label">Unique Transaction Reference <span className="red">*</span></label>
                                            <input name="transactionNumber"
                                                type="text"
                                                onChange={deposit.handleChange} className="form-control" placeholder="6 to 12 Digit UTR Number" ></input>
                                      </div>
                                        {deposit.touched.transactionNumber && deposit.errors.transactionNumber ? (
                    <div className="text-red-700">{deposit.errors.transactionNumber}</div>
                ) : null}
                                        
                                        <div className="form-group">
                                            <label className="form-label">Amount <span className="red">*</span></label>
                                            <input type="number" name="amount"
                                             onChange={deposit.handleChange} className="form-control" placeholder="Amount" ></input>
                                        </div>
                                       {deposit.touched.amount && deposit.errors.amount ? (
                    <div className="text-red-700">{deposit.errors.amount}</div>
                ) : null}

                                        <div className="form-group">
                                            <label className="form-label">Coupon Code</label>
                                            <input type="text" name="couponcode"
                                             onChange={deposit.handleChange} className="form-control" placeholder="Coupon Code" ></input>
                                        </div>
            
                                      
                                        
                                        <div className="form-group">
                                            <label className="form-label">Upload Your Payment Proof <span className="red">*</span></label>
                                            <input id="image"
                                                name="image"
                                                type="file"
                                                onChange={(event) => {
                                                    const files = event.currentTarget.files;
                                                    if (files && files.length > 0) {
                                                      const file = files[0];
                                                      deposit.setFieldValue('image', file);
                                                      if (file) {
                                                        setImagePreview(URL.createObjectURL(file)); // Set image preview URL
                                                      }
                                                    }
                                                  }}></input>
                                        </div>
                                        {deposit.touched.image && deposit.errors.image ? (
                    <div className="text-red-700">{deposit.errors.image}</div>
                ) : null}
                                        {/* {imagePreview && (
                <div>
                    <img src={imagePreview} alt="Selected Image" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )} */}
                                        <div className="form-group">
                                            <button type="submit" disabled={loader} className="anchor-button w-full">{loader ? 'Submitting...' : 'Submit'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="col">
                                <div className="deposit-card user-pay-text d-flex align">
                                    <p>How to transfer upi to bank click here www.upitobank.com</p>
                                    <Link href="#" className="anchor-button payment-btn">
                                        For payment related issues click here
                                        <span className="whatsapp-icon">
                                            <svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="_x36__stroke"><g id="WhatsApp"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128" /><path clip-rule="evenodd" d="M46.114,32.509    c-1.241-2.972-2.182-3.085-4.062-3.161c-0.64-0.037-1.353-0.074-2.144-0.074c-2.446,0-5.003,0.715-6.546,2.295    c-1.88,1.919-6.545,6.396-6.545,15.576c0,9.181,6.695,18.06,7.598,19.303c0.941,1.24,13.053,20.354,31.86,28.144    c14.707,6.095,19.071,5.53,22.418,4.816c4.89-1.053,11.021-4.667,12.564-9.03c1.542-4.365,1.542-8.09,1.09-8.88    c-0.451-0.79-1.693-1.24-3.573-2.182c-1.88-0.941-11.021-5.456-12.751-6.058c-1.693-0.639-3.31-0.413-4.588,1.393    c-1.806,2.521-3.573,5.08-5.003,6.622c-1.128,1.204-2.972,1.355-4.514,0.715c-2.069-0.864-7.861-2.898-15.008-9.256    c-5.53-4.928-9.291-11.06-10.381-12.904c-1.091-1.881-0.113-2.973,0.752-3.988c0.941-1.167,1.843-1.994,2.783-3.086    c0.941-1.091,1.467-1.655,2.069-2.935c0.64-1.241,0.188-2.521-0.263-3.462C51.418,45.414,47.657,36.233,46.114,32.509z M63.981,0    C28.699,0,0,28.707,0,63.999c0,13.996,4.514,26.977,12.187,37.512L4.212,125.29l24.6-7.862C38.93,124.125,51.004,128,64.019,128    C99.301,128,128,99.291,128,64.001c0-35.292-28.699-63.999-63.981-63.999h-0.037V0z" fill="#67C15E" fill-rule="evenodd" id="WhatsApp_1_" /></g></g></svg>
                                        </span>
                                    </Link>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-tab active" : "content-tab"}>
                    </div>
                </div>
                <div className="col bottom-col">
                        <div className="deposit-card withdraw-table">
                          <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>AMOUNT</th>
                                            <th>STATUS</th>
                                            <th>UTR</th>
                                            <th>DATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {useralldata?.transaction?.slice().reverse().map((item:any)=>(
                                        <tr key={item._id}>
                                            <td>
                                            ₹ {item?.amount}
                                            </td>
                                            <td>
                                            <p
                      className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${item?.status === "approved"
                          ? "green-text"
                          : item?.status === "rejected"
                            ? "danger-text"
                            : "warning-text"
                        }`}
                    >
                      {item?.status}
                    </p>
                                            </td>
                                            <td>
                                            {item?.transactionNumber}
                                            </td>
                                            <td>{dateformate(item?.createdAt)}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                </div>
                <div className="col bottom-col">
                        <div className="deposit-card bank-text">
                            <div className="gamemdheading">Deposit Discription</div>
                            <ul>
                                <li>
                                    1. Deposit money only in the below available accounts to get the fastest credits and avoid possible delays.
                                </li>
                                <li>
                                    2. Deposits made 45 minutes after the account removal from the site are valid & will be added to their wallets.
                                </li>
                                <li>
                                    3. Site is not responsible for money deposited to Old, Inactive or Closed accounts.
                                </li>
                                <li>
                                    4. NEFT receiving time varies from 40 minutes to 2 hours.
                                </li>
                                <li>
                                    5. In case of account modification: payment valid for 1 hour after changing account details in deposit page
                                </li>
                            </ul>
                        </div>
                </div>
              
            </section>
        </>
    );
}