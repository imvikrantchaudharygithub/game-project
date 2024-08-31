import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { SetStateAction, useEffect, useState, useRef } from "react";
import Breadcrumb from '../components/Breadcrumb';
import React from "react";
export default function Rock() {
    const monkeyRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const monkey = monkeyRef.current;
    const boxes = boxesRef.current;
    if (monkey && boxes) {
      boxes.forEach((box) => {
        box.addEventListener("click", () => {
          const boxRect = box.getBoundingClientRect();
       
          monkey.style.top = `${boxRect.top + boxRect.height / 2 - 10}px`;
          monkey.style.left = `${boxRect.left + boxRect.width / 2 - 15}px`;

        });
      });
    }
  }, []);
    return (
        <>
            <Breadcrumb page={"Rock"}></Breadcrumb>
            <section className="rock">
                <div className="container">
                    <div className="rock-main d-flex align">
                        <div className="rock-btn" id="monkey" ref={monkeyRef}>
                            <Image  width={100} height={100} className="" src={'/assets/images/monkey-icon.png'}  alt=""></Image>
                        </div>
                        {/* <div className="rock-btn">
                            <div id="monkey" ref={monkeyRef}>
                                <Image  width={100} height={100} className="" src={'/assets/images/monkey-icon.png'}  alt=""></Image>
                            </div>
                        </div> */}
                        <div className="rock-list d-grid align">
                            <div className="rock-card">
                                <div className="rock-box" id="box1" ref={(el) => (boxesRef.current[0] = el)}></div>
                                <div className="rock-box" id="box2" ref={(el) => (boxesRef.current[1] = el)}></div>
                                <div className="rock-box" id="box3" ref={(el) => (boxesRef.current[2] = el)}></div>
                                <div className="rock-box" id="box4" ref={(el) => (boxesRef.current[3] = el)}></div>
                            </div>
                            <div className="rock-card">
                                <div className="rock-box" id="box5" ref={(el) => (boxesRef.current[4] = el)}></div>
                                <div className="rock-box" id="box6" ref={(el) => (boxesRef.current[5] = el)}></div>
                                <div className="rock-box" id="box7" ref={(el) => (boxesRef.current[6] = el)}></div>
                                <div className="rock-box" id="box8" ref={(el) => (boxesRef.current[7] = el)}></div>
                            </div>
                        </div>
                        <div className="rock-btn">
                            <Image width={200} height={200} className="w-full" src={'/assets/images/banana-icon.png'}  alt=""></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}