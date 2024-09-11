import React from 'react'
import Image from 'next/image';
import { Style } from 'util';
export default function RouletteGame () {
  return (
    <>
        <div className='roulette-main'>
            <div className='roulette-top'>
                <div className='roulette-left'>

                </div>
                <div className='roulette-mid'>
                    <Image width={540} height={540} className="w-full" src={'/assets/images/wheel.webp'} alt="" />
                </div>
                <div className='roulette-right'>

                </div>
            </div>
            <div className='roulette-list'>
                <button className="pocket range1936 border-range" style={{gridArea: 'range1936',}}>
                    <div className="name">19 to 36</div>
                </button>
                <button className="pocket parityOdd border-range" style={{gridArea: 'parityOdd',}}>
                    <div className="name">Odd</div>
                </button>
                <button className="pocket colorBlack border-range pocketblack" style={{gridArea: 'colorBlack',}}>
                </button>
                <button className="pocket colorRed border-range pocketred" style={{gridArea: 'colorRed',}}>
                </button>
                <button className="pocket parityEven border-range" style={{gridArea: 'parityEven',}}>
                    <div className="name">Even</div>
                </button>
                <button className="pocket range0118 border-range" style={{gridArea: 'range0118',}}>
                    <div className="name">1 to 18</div>
                </button>
                <button className="pocket range2536 border-range" style={{gridArea: 'range2536',}}>
                    <div className="name">25 to 36</div>
                </button>
                <button className="pocket range1324 border-range" style={{gridArea: 'range1324',}}>
                    <div className="name">13 to 24</div>
                </button>
                <button className="pocket range0112 border-range" style={{gridArea: 'range0112',}}>
                    <div className="name">1 to 12</div>
                </button>
                <button className="pocket row3 border-range" style={{gridArea: 'row3',}}>
                    <div className="name">2:1</div>
                </button>
                <button className="pocket row2 border-range" style={{gridArea: 'row2',}}>
                    <div className="name">2:1</div>
                </button>
                <button className="pocket row1 border-range" style={{gridArea: 'row1',}}>
                    <div className="name">2:1</div>
                </button>
                <button className="pocket number36 border-range pocketred" style={{gridArea: 'number36',}}>
                    <div className="name">36</div>
                </button>
                <button className="pocket number35 border-range pocketblack" style={{gridArea: 'number35',}}>
                    <div className="name">35</div>
                </button>
                <button className="pocket number34 border-range pocketred" style={{gridArea: 'number34',}}>
                    <div className="name">34</div>
                </button>
                <button className="pocket number33 border-range pocketblack" style={{gridArea: 'number33',}}>
                    <div className="name">33</div>
                </button>
                <button className="pocket number32 border-range pocketred" style={{gridArea: 'number32',}}>
                    <div className="name">32</div>
                </button>
                <button className="pocket number31 border-range pocketblack" style={{gridArea: 'number31',}}>
                    <div className="name">31</div>
                </button>
                <button className="pocket number30 border-range pocketred" style={{gridArea: 'number30',}}>
                    <div className="name">30</div>
                </button>
                <button className="pocket number29 border-range pocketblack" style={{gridArea: 'number29',}}>
                    <div className="name">29</div>
                </button>
                <button className="pocket number28 border-range pocketblack" style={{gridArea: 'number28',}}>
                    <div className="name">28</div>
                </button>
                <button className="pocket number27 border-range pocketred" style={{gridArea: 'number27',}}>
                    <div className="name">27</div>
                </button>
                <button className="pocket number26 border-range pocketblack" style={{gridArea: 'number26',}}>
                    <div className="name">26</div>
                </button>
                <button className="pocket number25 border-range pocketred" style={{gridArea: 'number25',}}>
                    <div className="name">25</div>
                </button>
                <button className="pocket number24 border-range pocketblack" style={{gridArea: 'number24',}}>
                    <div className="name">24</div>
                </button>
                <button className="pocket number23 border-range pocketred" style={{gridArea: 'number23',}}>
                    <div className="name">23</div>
                </button>
                <button className="pocket number22 border-range pocketblack" style={{gridArea: 'number22',}}>
                    <div className="name">22</div>
                </button>
                <button className="pocket number21 border-range pocketred" style={{gridArea: 'number21',}}>
                    <div className="name">21</div>
                </button>
                <button className="pocket number20 border-range pocketblack" style={{gridArea: 'number20',}}>
                    <div className="name">20</div>
                </button>
                <button className="pocket number19 border-range pocketred" style={{gridArea: 'number19',}}>
                    <div className="name">19</div>
                </button>
                <button className="pocket number18 border-range pocketred" style={{gridArea: 'number18',}}>
                    <div className="name">18</div>
                </button>
                <button className="pocket number17 border-range pocketblack" style={{gridArea: 'number17',}}>
                    <div className="name">17</div>
                </button>
                <button className="pocket number16 border-range pocketred" style={{gridArea: 'number16',}}>
                    <div className="name">16</div>
                </button>
                <button className="pocket number15 border-range pocketblack" style={{gridArea: 'number15',}}>
                    <div className="name">15</div>
                </button>
                <button className="pocket number14 border-range pocketred" style={{gridArea: 'number14',}}>
                    <div className="name">14</div>
                </button>
                <button className="pocket number13 border-range pocketblack" style={{gridArea: 'number13',}}>
                    <div className="name">13</div>
                </button>
                <button className="pocket number12 border-range pocketred" style={{gridArea: 'number12',}}>
                    <div className="name">12</div>
                </button>
                <button className="pocket number11 border-range pocketblack" style={{gridArea: 'number11',}}>
                    <div className="name">11</div>
                </button>
                <button className="pocket number10 border-range pocketblack" style={{gridArea: 'number10',}}>
                    <div className="name">10</div>
                </button>
                <button className="pocket number9 border-range pocketred" style={{gridArea: 'number9',}}>
                    <div className="name">9</div>
                </button>
                <button className="pocket number8 border-range pocketblack" style={{gridArea: 'number8',}}>
                    <div className="name">8</div>
                </button>
                <button className="pocket number7 border-range pocketred" style={{gridArea: 'number7',}}>
                    <div className="name">7</div>
                </button>
                <button className="pocket number6 border-range pocketblack" style={{gridArea: 'number6',}}>
                    <div className="name">6</div>
                </button>
                <button className="pocket number5 border-range pocketred" style={{gridArea: 'number5',}}>
                    <div className="name">5</div>
                </button>
                <button className="pocket number4 border-range pocketblack" style={{gridArea: 'number4',}}>
                    <div className="name">4</div>
                </button>
                <button className="pocket number3 border-range pocketred" style={{gridArea: 'number3',}}>
                    <div className="name">3</div>
                </button>
                <button className="pocket number2 border-range pocketblack" style={{gridArea: 'number2',}}>
                    <div className="name">2</div>
                </button>
                <button className="pocket number1 border-range pocketred" style={{gridArea: 'number1',}}>
                    <div className="name">1</div>
                </button>
                <button className="pocket number0 border-range pocketgreen" style={{gridArea: 'number0',}}>
                    <div className="name">0</div>
                </button>

            </div>
        </div>
    </>
  )
}
