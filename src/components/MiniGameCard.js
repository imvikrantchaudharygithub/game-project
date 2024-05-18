import Image from "next/image";
import Link from "next/link";
const MiniGameCard = ({}) =>{
    return(
        <>
			<div className="mini-card">
				<div className="mini-card-thumb relative">
                    <Image width={250} height={250} className="w-full" src={'/assets/images/mini-thumb.jpg'} alt=""/>
				</div>
				<div className="mini-card-content">
					<div className="mini-card-name d-flex">
                        <Image width={68} height={68} className="w-full" src={'/assets/images/platinum-icon.png'} alt=""/>
						<div className="name" title="betonthepitc">betonthepitc</div>
					</div>
					<p className="price" title="$33.78K">$33.78K</p>
				</div>	
			</div>
        </>
    )
}
export default MiniGameCard;