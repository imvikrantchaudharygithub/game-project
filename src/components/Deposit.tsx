import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from "../pages/services/apiService";
import apiService from "../pages/services/apiService";
import toast, { Toaster } from 'react-hot-toast';


export default function Deposit({userData}:any) {
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
                deposit.resetForm();
                setImagePreview(null); // Reset image preview
                toast.success('Deposit Request sent Successfully', { position: 'top-right' });
                // router.push(`/account`);
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
                                (<p className="text-center text-red-400">Select any bank</p>)
                                }
                            </div>
                            <div className="col">
                                <div className="deposit-card user-pay-text d-flex align">
                                    <p>How to transfer upi to bank click here www.upitobank.com</p>
                                    <Link href="#" className="anchor-button payment-btn">
                                        For payment related issues click here
                                        <span className="whatsapp-icon">
                                            <svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="_x36__stroke"><g id="WhatsApp"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128" /><path clip-rule="evenodd" d="M46.114,32.509    c-1.241-2.972-2.182-3.085-4.062-3.161c-0.64-0.037-1.353-0.074-2.144-0.074c-2.446,0-5.003,0.715-6.546,2.295    c-1.88,1.919-6.545,6.396-6.545,15.576c0,9.181,6.695,18.06,7.598,19.303c0.941,1.24,13.053,20.354,31.86,28.144    c14.707,6.095,19.071,5.53,22.418,4.816c4.89-1.053,11.021-4.667,12.564-9.03c1.542-4.365,1.542-8.09,1.09-8.88    c-0.451-0.79-1.693-1.24-3.573-2.182c-1.88-0.941-11.021-5.456-12.751-6.058c-1.693-0.639-3.31-0.413-4.588,1.393    c-1.806,2.521-3.573,5.08-5.003,6.622c-1.128,1.204-2.972,1.355-4.514,0.715c-2.069-0.864-7.861-2.898-15.008-9.256    c-5.53-4.928-9.291-11.06-10.381-12.904c-1.091-1.881-0.113-2.973,0.752-3.988c0.941-1.167,1.843-1.994,2.783-3.086    c0.941-1.091,1.467-1.655,2.069-2.935c0.64-1.241,0.188-2.521-0.263-3.462C51.418,45.414,47.657,36.233,46.114,32.509z M63.981,0    C28.699,0,0,28.707,0,63.999c0,13.996,4.514,26.977,12.187,37.512L4.212,125.29l24.6-7.862C38.93,124.125,51.004,128,64.019,128    C99.301,128,128,99.291,128,64.001c0-35.292-28.699-63.999-63.981-63.999h-0.037V0z" fill="#67C15E" fill-rule="evenodd" id="WhatsApp_1_" /></g></g></svg>
                                        </span>
                                    </Link>
                                </div>
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
                                            <label className="form-label">Coupon Code <span className="red">*</span></label>
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
                                        {imagePreview && (
                <div>
                    <img src={imagePreview} alt="Selected Image" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
                                        <div className="form-group">
                                            <button type="submit" disabled={loader} className="anchor-button w-full">{loader ? 'Submitting...' : 'Submit'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "content-tab active" : "content-tab"}>
                    </div>
                </div>
            </section>
        </>
    );
}