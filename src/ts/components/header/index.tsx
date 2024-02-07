// Import modules
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import component CSS
import './header.scss';

// Import icons
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
	const isLoggedIn = false;

	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	const [ modal, setModal ] = useState<string>('');

	const HamburgerClick = () => {
		setIsOpen(!isOpen);
		document.body.className = `${!isOpen}`
	}

	const closeMenu = () => {
		setIsOpen(false);
		document.body.className = `${false}`
	}

	const openLoginModal = () => {
		setModal('login');
		document.body.classList.add('modal-open');
	}

	const openRegisterModal = () => {
		setModal('register');
		document.body.classList.add('modal-open');
	}

	const closeModal = () => {
		setModal('');
		document.body.classList.remove('modal-open');
	}

	return (
		<header
			id="header"
			className={`wrapper dark-gray-bg ${isOpen}`}
		>
		{modal !== '' && (
			<section className="wrapper absolute w100vw h100vh flex justify-center align-center modal">
				<div className="content p-24">
					<div className="flex justify-space w100 align-center">
						<h3 className="fs-20 fw-450 ls-05 white capital">
							{modal}
						</h3>
						
						<button
							onClick={closeModal}
							className='c-pointer no-border white cross transparent'
						>
							<RxCross2/>
						</button>
					</div>

					{/* LOGIN FORM */}
					{modal === 'login' && ( 
					<div className="m-t-20 flex flex-column gap-12 w100">
						<div className="form-input-field w100">
							<IoIosMail className='icon'/>

							<input
								type="text"
								name="user"
								id="user"
								placeholder='Email or username'
								className='input fs-16 fw-350'
							/>
						</div>

						<div className="form-input-field w100">
							<RiLockPasswordFill className='icon'/>

							<input
								type="password"
								name="password"
								id="password"
								placeholder='Password'
								className='input fs-16 fw-350'
							/>
						</div>

						<div className="flex w100 justify-center align-center">
							<button
								className="black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer w100 m-t-20"
							>
								Sign In
							</button>
						</div>

						<div className="flex gap-12 align-center justify-center w100 m-t-20">
							<hr className='modal-line'/>

							<span className="fs-16 gray-1 fw-400 ls-125 white or-text">
								or
							</span>

							<hr className='modal-line'/>
						</div>

						<div className="flex gap-12 align-center justify-center w100">
							<span className="fs-14 gray-1 fw-400">
								Don't have an account?
							</span>
							
							<button
								onClick={openRegisterModal}
								className='transparent no-border white fs-14 underline c-pointer ls-05'
							>
								Register here
							</button>
						</div>
					</div>
					)}

					{/* REGISTER FORM */}
					{modal === 'register' && (
					<div className="m-t-20 flex flex-column gap-12 w100">
						<div className="form-input-field w100">
							<FaUser className='icon'/>

							<input
								type="text"
								name="user"
								id="user"
								placeholder='Username'
								className='input fs-16 fw-350'
							/>
						</div>

						<div className="form-input-field w100">
							<IoIosMail className='icon'/>

							<input
								type="email"
								name="email"
								id="email"
								placeholder='Email address'
								className='input fs-16 fw-350'
							/>
						</div>

						<div className="form-input-field w100">
							<RiLockPasswordFill className='icon'/>

							<input
								type="password"
								name="password"
								id="password"
								placeholder='Password'
								className='input fs-16 fw-350'
							/>
						</div>

						<div className="form-input-field w100">
							<RiLockPasswordFill className='icon'/>

							<input
								type="password"
								name="confirm_password"
								id="confirm_password"
								placeholder='Confirm password'
								className='input fs-16 fw-350'
							/>
						</div>

						<div className="flex w100 justify-center align-center">
							<button
								className="black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer w100 m-t-20"
							>
								Sign Up
							</button>
						</div>

						<div className="flex gap-12 align-center justify-center w100 m-t-20">
							<hr className='modal-line'/>

							<span className="fs-16 gray-1 fw-400 ls-125 white or-text">
								or
							</span>

							<hr className='modal-line'/>
						</div>

						<div className="flex gap-12 align-center justify-center w100">
							<span className="fs-14 gray-1 fw-400">
								Already have an account?
							</span>
							
							<button
								onClick={openLoginModal}
								className='transparent no-border white fs-14 underline c-pointer ls-05'
							>
								Login here
							</button>
						</div>
					</div>
					)}
				</div>
			</section>
		)}
			<nav
				id="nav"
				className="content flex justify-space align-center"
			>
				<ul className="nav-list flex align-center gap-24">
					<li className="nav-item">
						<Link
							to='/'
							rel='noreferrer noopener nofollow'
							className='fs-24 fw-550 ls-12 capital no-deco white'
							onClick={HamburgerClick}
						>
							Drivee
						</Link>
					</li>

					<li className='nav-link'>
						<button
							className="hamburger flex flex-column justify-space"
							onClick={HamburgerClick}
						>
							<span className='w100'/>
							<span className='w100'/>
							<span className='w100'/>
						</button>
					</li>
				</ul>

				<ul className="nav-list flex align-center gap-24">
					<li className="nav-item">
						<Link
							to='/'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={HamburgerClick}
						>
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/about'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={HamburgerClick}
						>
							About
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/renting'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={HamburgerClick}
						>
							renting
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/contact'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={HamburgerClick}
						>
							contact
						</Link>
					</li>
				</ul>

				<ul className="nav-list flex align-center gap-24">
					<li className="nav-item">
						<button
							className='white transparent capital fw-450 fs-16 btn-1 no-deco white-border ls-05 c-pointer'
							onClick={openRegisterModal}
						>
							Sign Up
						</button>
					</li>

					<li className="nav-item">
						<button
							className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer'
							onClick={openLoginModal}
						>
							Sign In
						</button>
					</li>

					{isLoggedIn && (
					<li className="nav-item">
						<Link
							to='/login'
							rel='noreferrer noopener nofollow'
							className='black white-bg capital fw-450 fs-16 no-deco ls-05'
							onClick={closeMenu}
						>
							Account
						</Link>
					</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Header;