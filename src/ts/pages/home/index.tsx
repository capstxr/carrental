// Import modules
import { Link } from 'react-router-dom';

// Import page CSS
import './home.scss';

const Home = () => {
	return (
		<main className="main">
			<section
				id="home-hero"
				className="wrapper relative w100vw h100vh flex flex-column "
			>
				<img
					src="/images/home/background.jpg"
					alt="Background"
					className="z-0 w100 h100"
					loading='eager'
					id='home-hero-bg'
				/>

				<img
					src="/images/home/bmw.webp"
					alt="BMW Car"
					className="absolute z-1"
					loading='eager'
					id='home-hero-bmw'
				/>

				<img
					src="/images/home/moped.webp"
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

					<div className="home-hero-btns flex gap-24">
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

				<section
					id="quick-search"
					className="wrapper transparent absolute z-4"
				>
					<div
						className="content white-bg h100 gray-3-border flex justify-center align-center b-4"
					>
						<div
							className="quick-search-grid w100 h100 flex justify-space align-center p-12-36"
						>
							<div className="quick-search-item">
								<span
									className="fs-16 black fw-500 ls-05"
								>
									Location
								</span>

								<input
									type="text"
									name=""
									id="" 
									placeholder='Select Location'
									className='p-6-12'
								/>
							</div>

							<div className="quick-search-item">
								<span
									className="fs-16 black fw-500 ls-05"
								>
									Pick-Up
								</span>

								<input
									type="text"
									name=""
									id="" 
									placeholder='Select Location'
									className='p-6-12'
								/>
							</div>

							
							<div className="quick-search-item">
								<span
									className="fs-16 black fw-500 ls-05"
								>
									Date
								</span>

								<input
									type="date"
									name=""
									id="" 
									className='p-6-12'
								/>
							</div>

							<div className="quick-search-item">
								<span
									className="fs-16 black fw-500 ls-05"
								>
									Find your car now
								</span>

								<Link
									to='/search-rent'
									className='dark-gray-bg no-deco btn-1 white fs-16 fw-500 text-center'
								>
									Search Now
								</Link>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section
				id="features"
				className='100vw'
			>
				<section id="rent-a-car" className="wrapper flex relative">
					<img
						src="/images/home/features/thumbs_up.png"
						alt="Thumbs up"
						loading='eager'
						className="absolute"
						id='thumbs_up'
					/>

					<div 
						className="content align-start"
					>
						<h2 className="fs-36 fw-600 ls-125 black capital">
							Rent a car
						</h2>

						<div className="flex gap-12 align-center m-t-20">
							<div className="gray-bg-1 p-6-12 b-4 flex align-center justify-center">
								<span className="upper fs-14 fw-400 ls-03 gray-1">
									Luxury
								</span>
							</div>

							<div className="gray-bg-1 p-6-12 b-4 flex align-center justify-center">
								<span className="upper fs-14 fw-400 ls-03 gray-1">
									Comfort
								</span>
							</div>

							<div className="gray-bg-1 p-6-12 b-4 flex align-center justify-center">
								<span className="upper fs-14 fw-400 ls-03 gray-1">
									Prestige
								</span>
							</div>
						</div>

						<div
							className="flex flex-column gap-24 align-start m-t-20"
						>
							<p
								className="fs-16 black fw-400 lh-200 ls-03 feature-width-text"
							>
								Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice. Our user-friendly platform allows you to manage your bookings and view your trip history with ease. 
							</p>

							<Link
								to='/cars-for-rent'
								className='b-4 p-6-12 dark-gray-bg white fs-16 fw-400 ls-05 capital no-deco'
							>
								Rent car
							</Link>
						</div>
					</div>
				</section>

				<section id="rent-a-bike" className="wrapper flex relative">
					<img
						src="/images/home/features/thumbs_up.png"
						alt="Thumbs up"
						loading='eager'
						className="absolute"
						id='thumbs_up_1'
					/>
					
					<div 
						className="content align-start feature-right-content"
					>
						<h2 className="fs-36 fw-600 ls-125 black capital">
							Rent a bike
						</h2>

						<div className="flex gap-12 align-center m-t-20">
							<div className="gray-bg-1 p-6-12 b-4 flex align-center justify-center">
								<span className="upper fs-14 fw-400 ls-03 gray-1">
									Luxury
								</span>
							</div>

							<div className="gray-bg-1 p-6-12 b-4 flex align-center justify-center">
								<span className="upper fs-14 fw-400 ls-03 gray-1">
									Comfort
								</span>
							</div>

							<div className="gray-bg-1 p-6-12 b-4 flex align-center justify-center">
								<span className="upper fs-14 fw-400 ls-03 gray-1">
									Prestige
								</span>
							</div>
						</div>

						<div
							className="flex flex-column gap-24 align-start m-t-20"
						>
							<p
								className="fs-16 black fw-400 lh-200 ls-03 feature-width-text"
							>
								Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice. Our user-friendly platform allows you to manage your bookings and view your trip history with ease. 
							</p>

							<Link
								to='/cars-for-rent'
								className='dark-gray-bg white fs-16 fw-400 ls-05 capital no-deco p-6-12 b-4'
							>
								Rent car
							</Link>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}

export default Home;