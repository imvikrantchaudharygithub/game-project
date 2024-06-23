import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { apipost,get } from "../pages/services/apiService";
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';


export default function Withdrawal({userData}:any) {
    const dateformate = (date: any) => {
        return moment(date).format('LL LT')
      }

    const [loader, setloader] = useState(false)
    const [userWithdrawalList,setuserWithdrawalList]=useState()

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
            setloader(true)
            const payload ={
                amount:values.amount,
                userId:userData?.id
            }
            try{
                await apipost("/add-withdrawl",payload).then((res:any)=>{
                    console.log("add-withdrawl", res.data)
                    setloader(false)
                    withdrawal.resetForm()
                    toast.success("Withdrawal Request sent Succesfull",{position:"top-right"})
                    userWithdrawal(userData?.id)
                    // router.push(`/account`);
                }).catch((err:any)=>{
                    toast.error(err.response.data.message,{position:"top-right"})
                 setloader(false)
                 console.log("withdrawal  api err",err)
                })
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

    return (
        <>
            <section className="deposit-box">
                <div className="deposit-main d-flex">
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
                    <div className="col">
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
                    <div className="col">
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
                                       {userWithdrawalList?.map((item:any)=>(
                                        <tr>
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

                </div>
            </section>
        </>
    );
}