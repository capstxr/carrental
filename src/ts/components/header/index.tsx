// Import modules
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import component CSS
import './header.scss';

const Header = () => {
	const isLoggedIn = false;

	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	const HamburgerClick = () => {
		setIsOpen(!isOpen);
		document.body.className = `${!isOpen}`
	}

	const closeMenu = () => {
		setIsOpen(false);
		document.body.className = `${false}`
	}

	return (
		<header
			id="header"
			className={`wrapper dark-gray-bg ${isOpen}`}
		>
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
						<Link
							to='/register'
							rel='noreferrer noopener nofollow'
							className='white transparent capital fw-450 fs-16 btn-1 no-deco white-border ls-05'
							onClick={closeMenu}
						>
							Sign Up
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/login'
							rel='noreferrer noopener nofollow'
							className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05'
							onClick={closeMenu}
						>
							Sign In
						</Link>
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