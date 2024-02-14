// Import packages and modules
import { useState } from 'react';

// Import icons
import { Link } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineErrorOutline } from "react-icons/md";

// Import css
import './header.scss';

// Auth
import useAuthentication from '../../useAuthentication';
import { useContext  } from 'react';
import { AuthContext } from '../../Auth';

const Header = () => {
    const authContext = useContext<any>(AuthContext);

    const { isLoggedIn } = authContext;

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openModal = (type: string) => {
        setModal(type);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setModal('');
        document.body.classList.remove('modal-open');
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const {
        error,
        errorId,
        userName,
        email,
        password,
        confirmPassword,
        setUserName,
        setEmail,
        setPassword,
        setConfirmPassword,
        handleRegister,
        handleLogin
    } = useAuthentication(openModal);

    const renderModalContent = () => {
        if (modal === 'login') {
            return (
                <div className="m-t-20 flex flex-column gap-12 w100">
					<div className="form-input-field w100">
						<IoIosMail className='icon'/>

						<input
							type="text"
							name="user"
							id="user_login"
							placeholder='Username'
							className='input fs-16 fw-350'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>

					<div className="form-input-field w100">
						<RiLockPasswordFill className='icon'/>

						<input
							type="password"
							name="password"
							id="password_login"
							placeholder='Password'
							className='input fs-16 fw-350'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="flex w100 justify-center align-center">
						<button
							className="black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer w100 m-t-20"
							onClick={handleLogin}
						>
							Sign In
						</button>
					</div>

					{error && (
						<span className="error-message fs-14 fw-400 ls-05 text-center">
							{error}
						</span>
					)}

					<div className="flex gap-12 align-center justify-center w100">
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
							onClick={() => openModal('register')}
							className='transparent no-border white fs-14 underline c-pointer ls-05'
						>
							Register here
						</button>
					</div>
                </div>
            );
        } else if (modal === 'register') {
            return (
                <div className="m-t-20 flex flex-column gap-12 w100">
                    <div className="form-input-field w100">
						<FaUser className='icon'/>

						<input
							type="text"
							name="user"
							id="user_register"
							placeholder='Username'
							className='input fs-16 fw-350'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>

						{errorId === 'user' && (
							<MdOutlineErrorOutline className='error-icon'/>
						)}
					</div>

					<div className="form-input-field w100">
						<IoIosMail className='icon'/>

						<input
							type="email"
							name="email"
							id="email"
							placeholder='Email address'
							className='input fs-16 fw-350'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						{errorId === 'email' && (
							<MdOutlineErrorOutline className='error-icon'/>
						)}
					</div>

					<div className="form-input-field w100">
						<RiLockPasswordFill className='icon'/>

						<input
							type="password"
							name="password"
							id="password_register"
							placeholder='Password'
							className='input fs-16 fw-350'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						{errorId === 'confirm' && (
							<MdOutlineErrorOutline className='error-icon'/>
						)}
					</div>

					<div className="form-input-field w100">
						<RiLockPasswordFill className='icon'/>

						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							placeholder='Confirm password'
							className='input fs-16 fw-350'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>

						{errorId === 'confirm' && (
							<MdOutlineErrorOutline className='error-icon'/>
						)}
					</div>

					<div className="flex w100 justify-center align-center">
						<button
							className="black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer w100 m-t-20"
							onClick={handleRegister}
						>
							Sign Up
						</button>
					</div>
					
					{error && (
						<span className="error-message fs-14 fw-400 ls-05 text-center">
							{error}
						</span>
					)}

					<div className="flex gap-12 align-center justify-center w100">
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
							onClick={() => openModal('login')}
							className='transparent no-border white fs-14 underline c-pointer ls-05'
						>
							Login here
						</button>
					</div>
                </div>
            );
        }
		else if (modal === 'success') {
			return (
				<div className="m-t-20 flex flex-column gap-12 w100">
					<p className="fs-18 fw-400 ls-05 white">
						Registered succesfully.
					</p>

					<button
							onClick={() => openModal('login')}
							className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer'
						>
							Login now
					</button>
				</div>
			);
		}
		else if (modal === 'Success') {
			return (
				<div className="m-t-20 flex flex-column gap-12 w100">
					<p className="fs-16 fw-400 ls-05 white">
						<span className="gray-1">Logged in as </span>{userName}
					</p>

					<button
						onClick={closeModal}
						className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer'
					>
						Close
					</button>
				</div>
			);
		}
        return null;
    };

    return (
        <header
			id="header"
			className={`wrapper dark-gray-bg ${isOpen}`}
		>
            {modal && (
                <div className="wrapper absolute w100vw h100vh flex justify-center align-center modal">
                    <div className="content p-24">
						<div className="flex justify-space align-center">
							<h3
								className="fs-20 fw-450 ls-05 white capital"
							>
								{modal}
							</h3>
							
							<button
								onClick={closeModal}
								className="c-pointer no-border white cross transparent"
							>
								<RxCross2 />
							</button>
						</div>

                        {renderModalContent()}
                    </div>
                </div>
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
							onClick={handleLinkClick}
						>
							EzRental
						</Link>
					</li>

					<li className='nav-link'>
						<button
							className="hamburger flex flex-column justify-space"
							onClick={toggleMenu}
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
							onClick={handleLinkClick}
						>
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/about'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={handleLinkClick}
						>
							About
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/renting'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={handleLinkClick}
						>
							renting
						</Link>
					</li>

					<li className="nav-item">
						<Link
							to='/contact'
							rel='noreferrer noopener nofollow'
							className='fs-16 fw-400 ls-05 capital no-deco white'
							onClick={handleLinkClick}
						>
							contact
						</Link>
					</li>
				</ul>

				{!isLoggedIn && (
				<ul className="nav-list flex align-center gap-24">
					<li className="nav-item">
						<button
							className='white transparent capital fw-450 fs-16 btn-1 no-deco white-border ls-05 c-pointer'
							onClick={() => openModal('register')}
						>
							Sign Up
						</button>
					</li>

					<li className="nav-item">
						<button
							className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer'
							onClick={() => openModal('login')}
						>
							Sign In
						</button>
					</li>
				</ul>
				)}

				{isLoggedIn && (
				<ul className="nav-list flex align-center gap-24">
					<li className="nav-item">
						<Link
							to='/dashboard'
							rel='noreferrer noopener nofollow'
							className='black white-bg capital fw-450 fs-16 btn-1 no-deco ls-05 c-pointer'
						>
							Account
						</Link>
					</li>
				</ul>
				)}
			</nav>
        </header>
    );
};

export default Header;
