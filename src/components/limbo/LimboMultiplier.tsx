import React from 'react'

export default function LimboMultiplier () {
  return (
    <>
        <div className='footer-multiplier'>
            <form>
                <div className='form-row d-flex'>
                    <div className='form-group'>
                        <label className='form-label'>Target Multiplier</label>
                        <input type='number' className='form-control' placeholder='0.00' min={1.0} max={10000}></input>
                        <span>x</span>
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Win Chance</label>
                        <input type='number' className='form-control' placeholder='0.00' min={1.0} max={10000}></input>
                        <span>%</span>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}
