import React from 'react'
import Numbers from '../components/limbo/Numbers'
import LimboMultiplier from '../components/limbo/LimboMultiplier'
import GameBetTab from '../components/GameBetTab'
export default function limbo () {
  return (
    <>
        <div className='game-main-box padding-tb-lg'>
            <div className='container'>
                <div className='game-mains d-flex'>
                    <div className='games-lest'>
                        <GameBetTab></GameBetTab>
                    </div>
                    <div className='games-right'>
                        <Numbers></Numbers>
                        <LimboMultiplier></LimboMultiplier>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
