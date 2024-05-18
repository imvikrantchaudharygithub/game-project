import Image from "next/image";
import Link from "next/link";
const Table = ({}) =>{
    return(
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Player</th>
                            <th>Bet Amount</th>
                            <th>Multiplier</th>
                            <th>Profit Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="game">
                                <Image width={70} height={70} className="w-full game-icon" src={'/assets/images/game-icon.png'} alt=""></Image>
                                <div class="name">Money Minter Bonus Buy</div>
                            </td>
                            <td>
                                <Link href='#' className="user-info">
                                    <div class="name">VIP 12</div>
                                </Link>
                            </td>
                            <td>
                                <div class="coin notranslate">
                                    <div class="amount amount-str">3000.00</div>
                                    <Image width={100} height={100} className="coin-icon" src={'/assets/images/vnd-icon.png'} alt=""></Image>
                                </div>
                            </td>
                            <td>0.00x</td>
                            <td class="profitline lose">
                                <div class="has-sign">
                                    <div class="amount amount-str">-3000.00</div>
                                    <Image width={100} height={100} className="coin-icon" src={'/assets/images/vnd-icon.png'} alt=""></Image>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="game">
                                <Image width={70} height={70} className="w-full game-icon" src={'/assets/images/game-icon.png'} alt=""></Image>
                                <div class="name">Money Minter Bonus Buy</div>
                            </td>
                            <td>
                                <Link href='#' className="user-info">
                                    <div class="name">VIP 12</div>
                                </Link>
                            </td>
                            <td>
                                <div class="coin notranslate">
                                    <div class="amount amount-str">3000.00</div>
                                    <Image width={100} height={100} className="coin-icon" src={'/assets/images/vnd-icon.png'} alt=""></Image>
                                </div>
                            </td>
                            <td>0.00x</td>
                            <td class="profitline lose win">
                                <div class="has-sign">
                                    <div class="amount amount-str">-3000.00</div>
                                    <Image width={100} height={100} className="coin-icon" src={'/assets/images/vnd-icon.png'} alt=""></Image>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Table;