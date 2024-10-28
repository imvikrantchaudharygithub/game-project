import React from 'react'
import GameBetTab from '../components/GameBetTab'
import RouletteGame from '../components/roulette/RouletteGame'
export default function roulette () {
  return (
    <>
        <div className='game-main-box padding-tb-lg'>
            <div className='container'>
                <div className='game-mains d-flex'>
                    <div className='games-lest'>
                        <GameBetTab></GameBetTab>
                    </div>
                    <div className='games-right'>
                        <RouletteGame></RouletteGame>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
