// Import modules
import { Link } from 'react-router-dom';

// Import page CSS
import './home.scss';

const Home = () => {
	return (
		<main className="main">
			<section
				id="home-hero"
				className="wrapper relative w100vw h100vh"
			>
				<img
					src="/images/home/background.jpg"
					alt="Background"
					className="z-0 w100 h100"
					loading='eager'
					id='home-hero-bg'
				/>

				<img
					src="/images/home/bmw.png"
					alt="BMW Car"
					className="absolute z-1"
					loading='eager'
					id='home-hero-bmw'
				/>

				<img
					src="/images/home/moped.png"
					alt="Moped"
					className="absolute z-2"
					loading='eager'
					id='home-hero-moped'
				/>

				<div 
					className="content z-3 absolute"
				>
					<h1
						className="fs-54 fw-550 ls-12 capital white"
						id='home-hero-head'
					>
						Unlock endless driving with drivee
					</h1>

					<p
						className="fs-18 fw-400 ls-05 gray-1"
						id='home-hero-text'
					>
						To contribute to positive change and achieve our sustainability goals with many extraordinary
					</p>

					<div className="home-hero-btns">
						<Link
							to='/cars-for-rent'
							rel='noreferrer noopener nofollow'
							className='black white-bg capital fw-550 18 btn-1 no-deco ls-05'
						>
							Rent car
						</Link>

						<Link
							to='/bikes-for-rent'
							rel='noreferrer noopener nofollow'
							className='white transparent capital fw-450 18 btn-1 no-deco white-border ls-05'
						>
							Rent bike
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;