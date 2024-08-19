import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { apipost,get ,formpost} from "../pages/services/apiService";
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import { env } from "process";


export default function Withdrawal({userData,useralldata,refreshuserdata}:any) {
    const dateformate = (date: any) => {
        return moment(date).format('LL LT')
      }

    const [loader, setloader] = useState(false)
    const [userWithdrawalList,setuserWithdrawalList]=useState<any>()
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [togglebankForm,setTogglebankForm]=useState(false)


    useEffect(() => {
    userWithdrawal(userData?.id)
    console.log("withdrawal user",userData)
    }, []);

    const withdrawal = useFormik({
        initialValues: {
            amount: '',
        },
        validationSchema: Yup.object({
            amount: Yup.string().required('Required'),
           
        }),
        onSubmit: async(values: any) => {
            // setloader(true)
         
            const payload ={
                amount:values.amount,
                userId:userData?.id
            }
            
            try{
                   if(useralldata?.bankdetails){
                await apipost("/add-withdrawl",payload).then((res:any)=>{
                    console.log("add-withdrawl", res.data)
                    setloader(false)
                    withdrawal.resetForm()
                    toast.success("Withdrawal Request sent Succesfull",{position:"top-right"})
                    userWithdrawal(userData?.id)
                    refreshuserdata()
                    // router.push(`/account`);
                }).catch((err:any)=>{
                    toast.error(err.response.data.message,{position:"top-right"})
                 setloader(false)
                 console.log("withdrawal  api err",err)
                })

                 }else{
                toast.error("Add your bank Details")
            }
             }catch(err){
                setloader(false)
                 console.log("user-sigin", err)
             }
           
        },
    });

    const userWithdrawal =async(id:any)=>{
        get(`/getwithdrawl/${id}`).then((res:any)=>{
          console.log("getwithdrawl",res)
          setuserWithdrawalList(res?.data)
          }).catch((err:any)=>{
            console.log(err)
          })
    }

    const bankform = useFormik({
        initialValues: {
            bankname: '',
            accountno: '',
            ifsc: '',
            holdername: '',
            upi: '',
            image: null,
        },
        validationSchema: Yup.object({
            bankname: Yup.string().required('Required'),
            accountno: Yup.string().required('Required'),
            ifsc: Yup.string().required('Required'),
            holdername: Yup.string().required('Required')
        }),
        onSubmit: async (values: any) => {
            setloader(true)
            console.log("form values", values)
            const formData = new FormData();  // Create a FormData object
            formData.append('userId', useralldata?._id);
            formData.append('bankname', values.bankname);
            formData.append('accountNumber', values.accountno);
            formData.append('ifscCode', values.ifsc);
            formData.append('accountName', values.holdername);
            formData.append('upi', values.upi);
            formData.append('image', values.image);
            try {
                const res = await formpost('/add-bankuser', formData);
              if(res.status===200){
                    console.log("add-bankaccount", res.data)
                    setloader(false)
                    bankform.resetForm()
                    toast.success("Bank added")
                    setTogglebankForm(false)
                    refreshuserdata()
              }
               
            } catch (err) {
                console.log("user-signup", err)
                setloader(false)
            }
        },
    });
    const formToggle =()=>{
        setTogglebankForm(prevState => !prevState);
    }

    return (
        <>
            <section className="deposit-box">
                <div className="deposit-main withdrawal-main d-flex">
                    <div className="col">
                        <div className="deposit-card bank-card">
                            <div className="gamemdheading">Bank Detail</div>
                            <button type="button" className="edit-btn d-flex align" onClick={formToggle}>
                            {!togglebankForm && (    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
                                </svg>)}

{togglebankForm && ( <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" id="close"><path fill="#000" d="M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z"></path></svg>)}
                            </button>
                            {useralldata?.bankdetails && !togglebankForm && (
                             <ul>
                                <div className="flex justify-center items-center">
                                <img src={`${process.env.NEXT_PUBLIC_SOCKETURL}/${useralldata?.bankdetails?.imagePath}`} width={400} height={400} alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                                    <li>
                                            <p><strong>UPI :</strong> {useralldata?.bankdetails?.upi}</p>
                                            
                                        </li>
                                        <li>
                                            <p><strong>Bank Account :</strong> {useralldata?.bankdetails?.bankname}</p>
                                            
                                        </li>
                                        <li>
                                            <p><strong>A/C No :</strong> {useralldata?.bankdetails?.accountNumber}</p>
                                            
                                        </li>
                                        <li>
                                            <p><strong>IFSC Code :</strong> {useralldata?.bankdetails?.ifscCode}</p>
                                            
                                        </li>
                                        <li>
                                            <p><strong>Account Name :</strong> {useralldata?.bankdetails?.accountName}</p>
                                            
                                        </li>
                                       
                             </ul>
                             )}
                             
                             {/* <div className="game-popup accont-popup"> */}
          {/* <div className="game-popup-overlay" onClick={onClose}></div> */}
          {/* <div className="game-popup-wrapper"> */}
            {/* <button className="game-popup-close" onClick={onClose}></button> */}
            {/* <div className="game-popup-body"> */}
                           {togglebankForm && (
                             <form onSubmit={bankform.handleSubmit}>
                                <div className="form-row d-flex">
                                    <div className="form-group">
                                        <label className="form-label">
                                            Bank Name
                                        </label>
                                        <input
                                            type="text"
                                            name="bankname"
                                            value={bankform.values.bankname} onChange={bankform.handleChange}
                                            placeholder="Enter your Bank Name"
                                            className="form-control"
                                        />
                                        {/* <p className="text-sm m-1 p-0 text-danger">Bank name is required</p> */}
                                    </div>

                                    <div className="form-group">


                                        <label className="form-label">
                                            Account Name
                                        </label>
                                        <input
                                            type="text"
                                            name="holdername"
                                            value={bankform.values.holdername} onChange={bankform.handleChange}
                                            placeholder="Enter your Account Name"
                                            className="form-control"
                                        />
                                    </div>
                                
                                <div className="form-group">
                                    <label className="form-label">
                                        Account No.
                                    </label>
                                    <input
                                        type="text"
                                        name="accountno"
                                        value={bankform.values.accountno} onChange={bankform.handleChange}
                                        placeholder="Enter your Account No."
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        IFSC
                                    </label>
                                    <input
                                        type="text"
                                        name="ifsc"
                                        value={bankform.values.ifsc} onChange={bankform.handleChange}
                                        placeholder="Enter your IFSC"
                                        className="form-control"
                                    />
                                </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            UPI
                                        </label>
                                        <input
                                            type="text"
                                            name="upi"
                                            value={bankform.values.upi} onChange={bankform.handleChange}
                                            placeholder="Enter the UPI"
                                            className="form-control"
                                        />
                                        {/* <p className="text-sm m-1 p-0 text-danger">Bank name is required</p> */}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            Attach file
                                        </label>
                                        <input
                                            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"

                                            id="image"
                                            name="image"
                                            type="file"
                                        
                                            onChange={(event) => {
                                                const files = event.currentTarget.files;
                                                if (files && files.length > 0) {
                                                  const file = files[0];
                                                  bankform.setFieldValue('image', file);
                                                  if (file) {
                                                    setImagePreview(URL.createObjectURL(file)); // Set image preview URL
                                                  }
                                                }
                                              }}
                                            ></input>

                                    </div>
                                {/* {imagePreview && (
                                    <div>
                                        <img src={imagePreview} alt="Selected Image" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                )} */}
                                </div>



                                <button type="submit" disabled={loader} className="anchor-button w-full mt-6">
                                    {loader ? "Loading.." : "Add Account"}
                                    {/* {useralldata?.bankdetails !=0 ? "bank available.." : "not available"} */}
                                </button>
                             </form>
                             )}
                             {/* </div>
                             </div>
                             </div> */}
                          
                             
                        </div>
                    </div>
                    <div className="col">
                        <div className="deposit-card pay-form">
                            <div className="gamemdheading">Amount</div>
                            <form onSubmit={withdrawal.handleSubmit}>
                                <div className="form-group">
                                    <input type="number" name="amount" value={withdrawal.values.amount} onChange={withdrawal.handleChange} className="form-control" placeholder="Enter amount"></input>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="anchor-button w-full">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
             {userWithdrawalList && (
                   <div className="col bottom-col">
                        <div className="deposit-card withdraw-table">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {/* <th>TRANSACTION NO</th> */}
                                            <th>AMOUNT</th>
                                            <th>STATUS</th>
                                            <th>DATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {userWithdrawalList?.slice().reverse().map((item:any)=>(
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
                                            <td>{dateformate(item?.createdAt)}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
                )}
                <div className="col bottom-col">
                        <div className="deposit-card bank-text">
                            <div className="gamemdheading">withdraw discription</div>
                            <ul>
                                <li>
                                    1. This form is for withdrawing the amount from the main wallet only.
                                </li>
                                <li>
                                    2. The bonus wallet amount cannot be withdrawn by this form.
                                </li>
                                <li>
                                    3. Do not put Withdraw request without betting with deposit amount. Such activity may be identified as Suspicious
                                </li>
                                <li>
                                    4. If multiple users are using same withdraw account then all the linked users will be blocked.
                                </li>
                                <li>
                                    5. Maximum Withdraw time is 45 minutes then only complain on WhatsApp number.
                                </li>
                            </ul>
                        </div>
                </div>
                
            </section>
        </>
    );
}