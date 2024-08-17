import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Breadcrumb({page}:any) {
    return (
      <>
        <section className="breadcrumb">
            <div className="container d-flex align">
                <div className="breadcrumb-list">
                    <Link href='/'>
                        Home
                    </Link>
                    <span></span>
                    <Link href='#' className="active">
                        {page}
                    </Link>
                </div>
            </div>
        </section>
      </>
    );
}