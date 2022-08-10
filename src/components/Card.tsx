import { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './card.css'

export default function Card({
	title,
	href,
	icon
}: {
	title: string;
	href: string;
	icon: string;
}) {
	const lottiePlayer = useRef<Player>(null)
  return (
    <li className="link-card" onMouseEnter={() => lottiePlayer?.current?.play()} onMouseLeave={() => {
			lottiePlayer.current?.pause()
			lottiePlayer.current?.setSeeker(0)
		}}>
			<a className='mx-auto w-full text-center justify-center' href={href}>
				<Player
					keepLastFrame		
					className='w-7 h-7'
					ref={lottiePlayer}
					src={icon}
					speed={0.7}
				>
    		</Player>
				<h2 className='text-center ml-1 text-xl mt-1'>
					{title}
				</h2>
			</a>
  	</li>
  )
}