// Import modules
import { Link } from 'react-router-dom';

// Import component CSS
import './header.scss';

const Header = () => {
	const isLoggedIn = false;

	return (
		<header
			id="header"
			className="wrapper dark-gray-bg"
		>
			<nav
				id="nav"
				className="content"
			>
				<ul className="nav-list">
					<li className="nav-item">
						<Link
							to='/'
							rel='noreferrer noopener nofollow'
							className='fs-24 fw-550 ls-12 capital no-deco white'
						>
							Drivee
						</Link>
					</li>
				</ul>

				<ul className="nav-list">
					<li className="nav-item">
						<Link
							to='/'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
						>
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/about'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
						>
							About
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/renting'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
						>
							renting
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/contact'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
						>
							contact
						</Link>
					</li>
				</ul>

				<ul className="nav-list">
					<li className="nav-item">
						<Link
							to='/register'
							rel='noreferrer noopener nofollow'
							className='white transparent capital fw-450 fs-16 btn-1 no-deco white-border ls-05'
						>
							Sign Up
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/login'
							rel='noreferrer noopener nofollow'
							className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05'
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