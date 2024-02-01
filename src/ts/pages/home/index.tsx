// Import modules
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Import icons
import { IoMdArrowDropdown } from "react-icons/io";

// Import page CSS
import './home.scss';

const Home = () => {
	useEffect(() => {
		document.title = "Drivee - Home";
		window.scrollTo(0,0);
	}, []);

	const [ activeTab, setActiveTab ] = useState<number>(0);

	interface ReviewProps {
		image: string;
		name: string;
		head: string;
		text: string;
	}

	const Review = (props: ReviewProps) => {
		const { image, name, head, text } = props;

		return (
			<div className="review-wrapper relative">
				<img
					src={`/images/reviews/${image}`}
					alt={`${name}`}
					className="absolute z-0 w100 h100 review-image"
				/>

				<div className="review-content absolute z-1 flex flex-column gap-12 w100">
					<span className="white fw-550 ls-05 fs-18">
						{head}
					</span>

					<q className="white fw-400 fs-16 ls-05">
						{text}
					</q>

					<span className="fs-18 fw-550 ls-05 white quote-end">
						<hr /> <span>{name}</span>
					</span>
				</div>
			</div>
		);
	}

	interface TabProps {
		name: string;
		index: number;
	}

	const Tab = (props: TabProps) => {
		const { name, index } = props;

		// Check if current tab is active
		const isTabActive = activeTab == index;
		
		// Change colors accordingly
		const colors = isTabActive
			? 'gray-bg-1 black'
			: 'transparent gray-1';

		const handleClick = () => {
			setActiveTab(index);
		}

		return (
			<div
				className={`flex align-center justify-center b-4 p-8-16 fs-18 fs-05 text-center lh-150 ${colors} c-pointer fw-600`}
				onClick={() => handleClick()}
			>
				{name}
			</div>
		);
	}

	interface QuestionProps {
		q: string;
		ans: string;
	}

	const Question = (props: QuestionProps) => {
		const { q, ans } = props;

		const [ isOpen, setIsOpen ] = useState<boolean>(false);

		return (
			<div className={`q-wrapper ${isOpen} w100`}>
				<div
					className="flex justify-space align-center b-4 p-8-24 c-pointer black-border"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="q fs-18 fw-400 ls-05 black q">
						{q}
					</span>

					<IoMdArrowDropdown className='black fs-28 icon' />
				</div>

				<p className="fs-16 fw-400 ls-05 black a m-t-20">
					{ans}
				</p>
			</div>
		);
	}

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
					<div 
						className="content flex align-center gap-36"
					>
						<div className='flex flex-column'>
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
									className='b-4 p-6-12 dark-gray-bg white fs-16 fw-400 ls-05 capital no-deco btn-1'
								>
									Rent car
								</Link>
							</div>
						</div>

						<img
							src="/images/home/features/thumbs_up.png"
							alt="Thumbs up"
							loading='eager'
							id='thumbs_up'
						/>
					</div>
				</section>

				<section id="rent-a-bike" className="wrapper flex relative">
					<div 
						className="content flex align-center gap-36"
					>
						<img
							src="/images/home/features/thumbs_up.png"
							alt="Thumbs up"
							loading='eager'
							id='thumbs_up_1'
						/>

						<div className='flex flex-column'>
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
									to='/bikes-for-rent'
									className='dark-gray-bg white fs-16 fw-400 ls-05 capital no-deco p-6-12 b-4 btn-1'
								>
									Rent bike
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section id="why-us" className="wrapper">
					<div className="content">
						<div className="w100 flex justify-space align-center">
							<div className="flex flex-column gap-12 why-us">
								<h2 className="fs-36 fw-550 ls-1 capital black">
									Why choose us
								</h2>

								<p className="black fs-16 fw-400 ls-05">
									Booking a self-driving car with us is simple and easy. You can browse our selection of vehicles online, choose the car that best fits your needs, and book it for the duration of your choice.
								</p>
							</div>

							<div className="flex gap-36 align-center justify-end stats">
								<div className="flex flex-column align-center">
									<h4 className="fw-550 fs-28 black ls-05">
										45k+
									</h4>

									<span className="gray-1 fs-18 text-center ls-05 fw-400">
										Vehicles available
									</span>
								</div>

								<div className="flex flex-column align-center">
									<h4 className="fw-550 fs-28 black ls-05">
										1M+
									</h4>

									<span className="gray-1 fs-18 text-center ls-05 fw-400">
										Happy customers
									</span>
								</div>

								<div className="flex flex-column align-center">
									<h4 className="fw-550 fs-28 black ls-05">
										3+ Years
									</h4>

									<span className="gray-1 fs-18 text-center ls-05 fw-400">
										In the business
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section id="customer-reviews" className="wrapper m-t-40">
				<div className="content">
					<h2 className="fs-42 black fw-550 ls-1 capital text-center">
						What our customers say
					</h2>

					<div className="flex justify-space align-center review-grid">
						<Review
							image='male_car.webp'
							name='Jack Williams'
							head='Best cars for rent in Europe'
							text='I do businnes all around Europe all the time. Drivee really comes in handy for me. '
						/>

						<Review
							image='2.webp'
							name='Mike Oxlong'
							head='Excellent car rent service'
							text='I have been using Drivee on all of my trips abroad and the service is excellent. I can find cars for all my needs for good prices everywhere I go.'
						/>

						<Review
							image='3.jpg'
							name='Mary Poppins'
							head='My go-to car rental company'
							text="I'm a regular customer of five years. I like the pricing and wide selection of cars Drivee offers."
						/>
					</div>
				</div>
			</section>

			<section id="faq" className="wrapper m-t-40">
				<div className="content">
					<h2 className="fs-42 black fw-550 ls-1 capital text-center">
						Frequently asked questions
					</h2>

					<div className="flex justify-center align-center gap-36 m-t-20">
						<Tab name='General' index={0} />
						<Tab name='Security' index={1} />
						<Tab name='Booking' index={2} />
						<Tab name='Payment' index={3} />
						<Tab name='Others' index={4} />
					</div>

					{activeTab == 0 && ( // General
					<div
						className="grid temp-columns-2 gap-36 w100 m-t-40"
					>
						<Question
							q='General 1??'
							ans='Hello, World!'
						/>

						<Question
							q='General 2??'
							ans='Hello, World!'
						/>

						<Question
							q='General 3??'
							ans='Hello, World!'
						/>

						<Question
							q='General 4??'
							ans='Hello, World!'
						/>

						<Question
							q='General 5??'
							ans='Hello, World!'
						/>

						<Question
							q='General 6??'
							ans='Hello, World!'
						/>
					</div>
					)}

					{activeTab == 1 && ( // Security
					<div
						className="grid temp-columns-2 gap-36 w100 m-t-40"
					>
						<Question
							q='Security 1??'
							ans='Hello, World!'
						/>

						<Question
							q='Security 2??'
							ans='Hello, World!'
						/>

						<Question
							q='Security 3??'
							ans='Hello, World!'
						/>

						<Question
							q='Security 4??'
							ans='Hello, World!'
						/>

						<Question
							q='Security 5??'
							ans='Hello, World!'
						/>

						<Question
							q='Security 6??'
							ans='Hello, World!'
						/>
					</div>
					)}

					{activeTab == 2 && ( // Booking
					<div
						className="grid temp-columns-2 gap-36 w100 m-t-40"
					>
						<Question
							q='Booking 1??'
							ans='Hello, World!'
						/>

						<Question
							q='Booking 2??'
							ans='Hello, World!'
						/>

						<Question
							q='Booking 3??'
							ans='Hello, World!'
						/>

						<Question
							q='Booking 4??'
							ans='Hello, World!'
						/>

						<Question
							q='Booking 5??'
							ans='Hello, World!'
						/>

						<Question
							q='Booking 6??'
							ans='Hello, World!'
						/>
					</div>
					)}
					
					{activeTab == 3 && ( // Payment
					<div
						className="grid temp-columns-2 gap-36 w100 m-t-40"
					>
						<Question
							q='Payment 1??'
							ans='Hello, World!'
						/>

						<Question
							q='Payment 2??'
							ans='Hello, World!'
						/>

						<Question
							q='Payment 3??'
							ans='Hello, World!'
						/>

						<Question
							q='Payment 4??'
							ans='Hello, World!'
						/>

						<Question
							q='Payment 5??'
							ans='Hello, World!'
						/>

						<Question
							q='Payment 6??'
							ans='Hello, World!'
						/>
					</div>
					)}

					{activeTab == 4 && ( // Other
					<div
						className="grid temp-columns-2 gap-36 w100 m-t-40"
					>
						<Question
							q='Other 1??'
							ans='Hello, World!'
						/>

						<Question
							q='Other 2??'
							ans='Hello, World!'
						/>

						<Question
							q='Other 3??'
							ans='Hello, World!'
						/>

						<Question
							q='Other 4??'
							ans='Hello, World!'
						/>

						<Question
							q='Other 5??'
							ans='Hello, World!'
						/>

						<Question
							q='Other 6??'
							ans='Hello, World!'
						/>
					</div>
					)}
				</div>
			</section>
		</main>
	);
}

export default Home;