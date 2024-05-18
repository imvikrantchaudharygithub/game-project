import Image from "next/image";
import Link from "next/link";
const GameCard = ({}) =>{
    return(
        <>
			<div className="game-card">
				<div className="game-card-thumb thumb-ratio relative">
					<Link href='#'>
						<Image width={526} height={296} className="full-image hovertime" src={'/assets/images/game-thumb.jpg'} alt=""/>
					</Link>
					<div className="user-num">
						<svg class="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
						<span>8</span>
					</div>
				</div>
				<div className="game-card-content">
					<div className="gamexxssheading d-flex">
						<Link href='#'>
							FA CHAI
						</Link>
						<button class="info-btn"><svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg></button>
					</div>
					<button className="anchor-button">play now</button>
				</div>	
			</div>
        </>
    )
}
export default GameCard;