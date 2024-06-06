import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useState } from "react";
export default function Withdrawal() {
    return (
        <>
            <section className="deposit-box">
                <div className="deposit-main d-flex">
                    <div className="col">
                        <div className="deposit-card pay-form">
                            <div className="gamemdheading">Amount</div>
                            <form>
                                <div className="form-group">
                                    <input type="number" name="name" className="form-control" placeholder="Enter amount" value=""></input>
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
                                            <th>TRANSACTION NO</th>
                                            <th>AMOUNT</th>
                                            <th>STATUS</th>
                                            <th>DATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                450907632810
                                            </td>
                                            <td>
                                                1000.00
                                            </td>
                                            <td>
                                                <div className="green-text">APPROVED</div>
                                            </td>
                                            <td>22-02-2024</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                450907632810
                                            </td>
                                            <td>
                                                1000.00
                                            </td>
                                            <td>
                                                <div className="green-text">APPROVED</div>
                                            </td>
                                            <td>22-02-2024</td>
                                        </tr>
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