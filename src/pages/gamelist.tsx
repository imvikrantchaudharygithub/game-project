import React from 'react'
import GameListSlider from '../components/GameListSlider'

export default function gamelist () {
  return (
    <>
        <div className='product-box padding-tb-lg'>
            <div className="container">
                <div className="heading-top">
                        <div className="gamesmheading">Stake Originals</div>
                </div>
                <div className='product-list'>
                    <GameListSlider></GameListSlider>
                </div>
            </div>
        </div>
    </>
  ) 
}
