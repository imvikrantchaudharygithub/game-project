import React from 'react'
import Link from "next/link";
import Image from 'next/image';
export default function GameCards () {
  return (
    <>
          <div className="game-cards">
              <div className="game-cards-thumbs thumb-ratio relative">
                  <Link href='#'>
                      <Image width={526} height={296} className="full-image hovertime" src={'/assets/images/mines-game.jpg'} alt="" />
                  </Link>
              </div>
              <div className="game-cards-content">
                  <div className="gamexsheading">
                        Mines
                  </div>
                  <p>6,431 playing</p>
              </div>
          </div>
    </>
  )
}
