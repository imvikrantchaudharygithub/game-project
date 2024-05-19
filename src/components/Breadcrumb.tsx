import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Breadcrumb() {
    return (
      <>
        <section className="breadcrumb">
            <div className="container d-flex align">
                <div className="breadcrumb-list">
                    <Link href='#'>
                        BC Originals
                    </Link>
                    <span></span>
                    <Link href='#' className="active">
                        BC Originals
                    </Link>
                </div>
            </div>
        </section>
      </>
    );
}